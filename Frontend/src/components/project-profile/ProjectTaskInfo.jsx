import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GenericBtn from "../buttons/Generic-btn";
import AddTaskModal from '../modals/AddTaskModal';

const ProjectTaskInfo = () => {
    const { id } = useParams(); // Project ID from URL
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectTasks, setProjectTasks] = useState([]);
    const userRole = localStorage.getItem("userRole"); // Get user role from localStorage

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

    const handleTaskAdded = (newTask) => {
        setProjectTasks([...projectTasks, newTask]);
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
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span className="tracking-wide">Tasks</span>
                </div>
                {userRole === "Admin" && (
                    <GenericBtn onClick={handleAddTask} buttonText="Add Task" className="justify-end" />
                )}
                {isModalOpen && <AddTaskModal projectId={id} handleClose={handleCloseModal} handleTaskAdded={handleTaskAdded} />}
            </div>

            <div className="grid grid-cols-2">
                {projectTasks.map(task => (
                    <div key={task.id} className="bg-gray-50 p-4 rounded-md shadow-md mb-4">
                        <h2 className="text-xl font-semibold">{task.name}</h2>
                        <p className="text-sm text-gray-500">Type: {task.type}</p>
                        <p className="text-sm text-gray-500">Status: {task.status}</p>
                        {userRole === "Admin" && (
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectTaskInfo;
