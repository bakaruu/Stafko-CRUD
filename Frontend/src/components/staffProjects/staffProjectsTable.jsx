import { useState, useEffect } from 'react';
import axios from 'axios';
import StaffProjectRow from './staffProjectRow';

const StaffProjectsTable = () => {
    const [projects, setProjects] = useState([]);
    const userId = localStorage.getItem('userId'); // Obtener el ID del usuario desde localStorage

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:3000/users/${userId}`)
                .then(response => {
                    console.log('Projects received:', response.data.projects);
                    setProjects(response.data.projects);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        }
    }, [userId]); // Asegúrate de volver a cargar cuando el ID del usuario cambie



    return (
        <section className="antialiased text-gray-600 mt-32 px-4">
            <div className="flex flex-col justify-center">
                <div className="w-full max-w-screen-xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-semibold text-gray-800">Working on</h2>
                    </header>

                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <button type="button"  className="w-full text-left flex justify-between items-center">
                                                <div className="font-semibold">PROJECT</div>
                                                <div>
                                                 </div>
                                            </button>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <button type="button"  className="w-full text-left flex justify-between items-center">
                                                <div className="font-semibold">CLIENT</div>
                                                <div>
                                                 </div>
                                            </button>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <button type="button"  className="w-full text-left flex justify-between items-center">
                                                <div className="font-semibold">PROGRESS</div>
                                                <div>
                                                  </div>
                                            </button>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">STATUS</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">DEADLINE</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map(project => (
                                        <StaffProjectRow
                                            key={project.id}
                                            id={project.id}
                                            task={project.name}
                                            owner={project.client.clientName} // Replace with actual owner if available
                                            progress={project.progress}
                                            status={project.status}
                                            deadline={project.deadline}
                                            imageUrl={project.photoUrl}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StaffProjectsTable;