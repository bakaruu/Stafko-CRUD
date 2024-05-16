import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const AddTaskModal = ({ handleClose }) => {
    const taskTypeOptions = [
        { value: 'Frontend', label: 'Frontend' },
        { value: 'Backend', label: 'Backend' },
        // Add any other task types here
    ];

   

    const [taskName, setTaskName] = useState('');
    const [taskType, setTaskType] = useState(taskTypeOptions[0].value);
    const { projectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Aquí podrías realizar cualquier lógica adicional que necesites al cargar el componente, como cargar datos adicionales
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        
    
        try {
            await axios.post('http://localhost:3000/tasks', {
                name: taskName,
                type: taskType,
                status: "ToDo",
                project: {
                    id: projectId
                },
            });
    
            // Navegar a la página raíz del proyecto
            navigate(0);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };
    

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-8">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
                                    Task Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="taskName"
                                    type="text"
                                    placeholder="Enter task name"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskType">
                                    Task Type
                                </label>
                                <Select
                                    value={taskTypeOptions.find(option => option.value === taskType)}
                                    onChange={(option) => setTaskType(option.value)}
                                    options={taskTypeOptions}
                                    isSearchable={true}
                                    menuPlacement="auto"
                                    maxMenuHeight={120}
                                />
                            </div>

                            

                            <div className="flex items-center justify-between">
                                <button
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
                                    type="submit"
                                >
                                    Add Task
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            onClick={handleClose}
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;
