import { useState, useEffect } from 'react';
import axios from 'axios';
import StaffProjectRow from './staffProjectRowUser';

const StaffProjectsTableUser = () => {
    const [projects, setProjects] = useState([]);
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProjects = async () => {
            if (!token || !userId) {
                console.error('No token or user ID found');
                return;
            }

            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const projectAssignmentsResponse = await axios.get('http://localhost:8055/items/projects_staff_assignments', {
                    params: {
                        filter: {
                            staff_id: {
                                _eq: userId
                            }
                        }
                    },
                    ...config
                });

                const projectAssignments = projectAssignmentsResponse.data.data;

                if (projectAssignments.length === 0) {
                    setProjects([]);
                    return;
                }

                const projectIds = projectAssignments.map(item => item.project_id);

                const projectDetailsPromises = projectIds.map(id => axios.get(`http://localhost:8055/items/projects/${id}`, config));
                const projectDetailsResponses = await Promise.all(projectDetailsPromises);

                const projects = await Promise.all(projectDetailsResponses.map(async (response) => {
                    const project = response.data.data;

                    const clientResponse = await axios.get(`http://localhost:8055/items/clients/${project.client_id}`, config);
                    const clientName = clientResponse.data.data.name;

                    const imageUrl = `http://localhost:8055/assets/${project.image}`;

                    return { ...project, client_name: clientName, imageUrl };
                }));

                setProjects(projects);
            } catch (error) {
                console.error('Error fetching data: ', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                    console.error('Response headers:', error.response.headers);
                } else if (error.request) {
                    console.error('Request data:', error.request);
                } else {
                    console.error('Error message:', error.message);
                }
            }
        };

        fetchProjects();
    }, [userId, token]);

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
                                            <button type="button" className="w-full text-left flex justify-between items-center">
                                                <div className="font-semibold">PROJECT</div>
                                            </button>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <button type="button" className="w-full text-left flex justify-between items-center">
                                                <div className="font-semibold">CLIENT</div>
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
                                            task={project?.name}
                                            owner={project?.client_name}
                                            status={project?.status}
                                            deadline={project?.deadline}
                                            imageUrl={project?.imageUrl}
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

export default StaffProjectsTableUser;
