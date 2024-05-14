import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/projects') // Asegúrate de reemplazar esta URL con la ruta correcta a tu API
      .then(response => setProjects(response.data))
      .catch(error => console.error(`Error: ${error}`));
  }, []);

  return (
    <div className="bg-transparent p-8 min-h-[350px] flex items-center justify-center font-[sans-serif] text-[#333]  z-10">
      <div >
        <div className="flex flex-wrap justify-center pb-40">
          {projects.map((project, index) => (
            <div className="m-2" style={{ minWidth: '250px', maxWidth: 'calc(100% / 3)' }} key={index}>
             <Link to={`/project/${project.id}`}>
                <ProjectCard name={project.name} role={""} imageSrc={project.photoUrl} />
              </Link></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;