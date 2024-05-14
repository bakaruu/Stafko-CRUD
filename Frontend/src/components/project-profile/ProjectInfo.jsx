import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectInfo = () => {
    const { id } = useParams(); // Obtén el id del proyecto de los parámetros de la ruta
    const [project, setProject] = useState({}); // Estado para almacenar la información del proyecto

    useEffect(() => {
        // Haz una solicitud a tu API para obtener la información del proyecto
        axios.get(`http://localhost:3000/projects/${id}`)
            .then(response => {
                setProject(response.data); // Guarda la información del proyecto en el estado
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [id]);

    return (
        <div className="bg-white p-3 border-t-4 border-orange-200">
            <div className="image overflow-hidden">
                <img className="h-auto w-full mx-auto"
                    src={project.photoUrl} // Usa la URL de la imagen del proyecto
                />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{project.name}</h1>
            {/* <h3 className="text-gray-600 font-lg text-semibold leading-6">{project.owner}</h3>  client */}
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{project.description}</p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto"><span className="bg-green-500 py-1 px-2 rounded text-white text-sm">{project.status}</span></span>
                </li>
                <li className="flex items-center py-3">
                    <span>Deadline</span>
                    <span className="ml-auto">{project.deadline}</span>
                </li>
                <li className="flex items-center py-3">
                    <span>Progress</span>
                    
                <span className={`text-center align-baseline inline-flex px-2 py-1 ml-auto items-center font-semibold text-base/none rounded-lg ${project.progress < 40 ? 'text-red-500 bg-red-100' : project.progress < 80 ? 'text-yellow-500 bg-yellow-100' : 'text-green-500 bg-green-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg> {project.progress}%
                </span>
            
                </li>
            </ul>
        </div>
    );
}

export default ProjectInfo;