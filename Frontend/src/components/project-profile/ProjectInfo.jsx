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
            </ul>
        </div>
    );
}

export default ProjectInfo;