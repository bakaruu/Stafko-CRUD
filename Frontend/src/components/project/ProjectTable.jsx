import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectRow from "./ProjectRow";
import ProjectFormModal from './ProjectFormModal';
import AddClient from '../buttons/btn-addClient';

const ProjectTable = () => {
    const [projects, setProjects] = useState([]);
    const [sortConfig, setSortConfig] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const sortedProjects = [...projects];

    if (sortConfig !== null) {
        sortedProjects.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

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
                            <AddClient onClick={handleModalOpen} buttonText="Add Project" />
                        </div>
                    </header>

                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <button type="button" onClick={() => requestSort('name')} className="w-full text-left flex justify-between items-center">
                                                <div className="font-semibold">PROJECT</div>
                                                <div>
                                                    <span className={sortConfig && sortConfig.key === 'name' && sortConfig.direction === 'ascending' ? 'text-black' : 'text-gray-400'}>▲</span>
                                                    <span className={sortConfig && sortConfig.key === 'name' && sortConfig.direction === 'descending' ? 'text-black' : 'text-gray-400'}>▼</span>
                                                </div>
                                            </button>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <button type="button" onClick={() => requestSort('client')} className="w-full text-left flex justify-between items-center">
                                                <div className="font-semibold">CLIENT</div>
                                                <div>
                                                    <span className={sortConfig && sortConfig.key === 'client' && sortConfig.direction === 'ascending' ? 'text-black' : 'text-gray-400'}>▲</span>
                                                    <span className={sortConfig && sortConfig.key === 'client' && sortConfig.direction === 'descending' ? 'text-black' : 'text-gray-400'}>▼</span>
                                                </div>
                                            </button>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <button type="button" onClick={() => requestSort('progress')} className="w-full text-left flex justify-between items-center">
                                                <div className="font-semibold">PROGRESS</div>
                                                <div>
                                                    <span className={sortConfig && sortConfig.key === 'progress' && sortConfig.direction === 'ascending' ? 'text-black' : 'text-gray-400'}>▲</span>
                                                    <span className={sortConfig && sortConfig.key === 'progress' && sortConfig.direction === 'descending' ? 'text-black' : 'text-gray-400'}>▼</span>
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
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {sortedProjects.map((project, index) => (
                                        <ProjectRow
                                            key={index}
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