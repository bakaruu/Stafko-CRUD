import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GenericBtn from "../buttons/Generic-btn";
import AddTaskModal from '../modals/AddTaskModal';

// eslint-disable-next-line react/prop-types
const ProjectTaskInfo = () => {

    const { id } = useParams();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [projectTasks, setProjectTasks] = useState([]);

    useEffect(() => {
        fetchProject();
    }, [id]);

    const fetchProject = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/projects/${id}`);
            setProjectTasks(response.data.tasks);
        } catch (error) {
            console.error('Error fetching project:', error.response);
        }
    };

    const handleAddTask = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await axios.delete(`http://localhost:3000/tasks/${taskId}`);
            fetchProject(); // Refetch the project to update the task list
        } catch (error) {
            console.error('Error deleting task:', error.response);
        }
    };

    return (
    <div className="bg-white p-3 mb-36 shadow-sm rounded-sm">
        <div className="flex items-center justify-between space-x-2 font-semibold text-gray-900 leading-8 m-4">
            <div className="flex items-center space-x-2">
                <span className="text-orange-200">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span className="tracking-wide">Tasks</span>
            </div>
            <GenericBtn onClick={handleAddTask} buttonText="Add Task" className="justify-end" />
            {isModalOpen && <AddTaskModal projectId={id} handleClose={handleCloseModal} />}
        </div>

        <div className="grid grid-cols-2">
            {projectTasks.map(task => (
                <div key={task.id} className="bg-gray-50 p-4 rounded-md shadow-md mb-4">
                    <h2 className="text-xl font-semibold">{task.name}</h2>
                    <p className="text-sm text-gray-500">Type: {task.type}</p>
                    <p className="text-sm text-gray-500">Status: {task.status}</p>
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    
                </div>
            ))}
        </div>
    </div>
);

};

export default ProjectTaskInfo;





// import axios from 'axios';

// async function getTaskTime(taskId) {
//     const response = await axios.get(`https://api.clockify.me/api/v1/workspaces/{workspaceId}/time-entries?task=${taskId}`, {
//         headers: { 'X-Api-Key': 'your-api-key' }
//     });

//     // Aquí debes procesar la respuesta para obtener las horas y minutos
//     const hours = response.data.hours;
//     const minutes = response.data.minutes;

//     return { hours, minutes };
// }




// const TimeDisplay = ({ taskId }) => {
//     const [time, setTime] = useState({ hours: 0, minutes: 0 });

//     useEffect(() => {
//         getTaskTime(taskId).then(setTime);
//     }, [taskId]);

//     return (
//         <div className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-orange-200 active:bg-light focus:bg-light bg-gray-200">
//             {time.hours} hours, {time.minutes} minutes
//         </div>
//     );
// };