import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectRow from "./ProjectRow";
import ProjectFormModal from './ProjectFormModal';

const ProjectTable = () => {
    const [projects, setProjects] = useState([]);
    
    

    useEffect(() => {
        axios.get('http://localhost:3000/projects')
            .then(response => {
                const sortedProjects = response.data.sort((a, b) => a.name.localeCompare(b.name));
                setProjects(sortedProjects);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);


    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <section className="antialiased text-gray-600  mt-32 px-4">
            <div className="flex flex-col justify-center">
                <div className="w-full max-w-screen-xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-semibold text-gray-800">Projects Deliveries</h2>

                        <div className="relative flex flex-wrap items-center my-2">
                            <button onClick={handleModalOpen} className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-orange-200 active:bg-light focus:bg-light bg-gray-200">
                                Add Client
                            </button></div>
                    </header>

                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Project</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Client</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Progress</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Status</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Deadline</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {projects.map((project, index) => (
                                        <ProjectRow
                                            key={index} // Add key prop with a unique value
                                            id={project.id}
                                            task={project.name}
                                            owner={project.client ? project.client.clientName : 'No client'}
                                            progress={project.progress || 0}
                                            status={project.status}
                                            deadline={project.deadline}
                                            imageUrl={project.photoUrl || 'default.jpg'}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {modalOpen && <ProjectFormModal handleClose={handleModalClose} />}
        </section>
    );
};

export default ProjectTable;