import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectRow from "./ProjectRow";


const ProjectTable = () => {
    // const projects = [
    //     { name: 'Vera Carpenter', role: 'Admin', createdAt: 'Jan 21, 2020', qrt: 43, status: 'Activo', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80' },
    //     // Aquí puedes agregar más objetos de proyecto según sea necesario
    // ];
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);


    return (
        <>
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css" /> */}

            <div className="flex flex-wrap -mx-3 mb-5 " >
                <div className="w-full max-w-full px-28 mb-6  mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">

                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                    <span className="mr-3 font-semibold text-dark">Projects Deliveries</span>
                                    <span className="mt-1 font-medium text-secondary-dark text-lg/normal text-gray-400">All projects from the Loopple team</span>
                                </h3>
                                <div className="relative flex flex-wrap items-center my-2">
                                    <a href="javascript:void(0)" className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-orange-200 active:bg-light focus:bg-light bg-gray-200"> See other projects </a>
                                </div>
                            </div>

                            <div className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.8rem] text-secondary-dark text-gray-400">
                                                <th className="pb-3 text-start min-w-[175px]">PROJECT</th>
                                                <th className="pb-3 text-end min-w-[100px]">CLIENT</th>
                                                <th className="pb-3 text-end min-w-[100px]">PROGRESS</th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">STATUS</th>
                                                <th className="pb-3  pr-12 text-end min-w-[100px]">DEADLINE</th>
                                                <th className="pb-3 text-end min-w-[50px]">DETAILS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <ProjectRow
                                                task="Social Media API"
                                                owner="Olivia Cambell"
                                                progress={6.5}
                                                status="In Progress"
                                                deadline="2023-08-23"
                                                imageUrl="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                                            /> */}



                                            {projects.map((project, index) => (
                                                <ProjectRow
                                                    key={index} // Add key prop with a unique value
                                                    task={project.name}
                                                    owner={project.client.clientName}
                                                    progress={project.progress}
                                                    status={project.status}
                                                    deadline={project.deadline}
                                                    imageUrl={project.imageUrl}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ProjectTable;
