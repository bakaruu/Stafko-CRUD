import ProjectCard from './ProjectCard';

const Projects = () => {
  // Supongamos que tienes una lista de proyectos obtenidos desde tu backend
  const projects = [
    { name: 'Project 1', role: 'Role 1', imageSrc: 'https://picsum.photos/300/300' },
    { name: 'Project 2', role: 'Role 2', imageSrc: 'https://picsum.photos/300/301' },
    { name: 'Project 3', role: 'Role 3', imageSrc: 'https://picsum.photos/300/302' },
    { name: 'Project 1', role: 'Role 1', imageSrc: 'https://picsum.photos/300/300' },
    { name: 'Project 2', role: 'Role 2', imageSrc: 'https://picsum.photos/300/301' },





    // Agrega más proyectos según sea necesario
  ];

  //const numColumns = projects.length <= 3 ? projects.length : 3;

  return (
    <div className="bg-transparent p-8 min-h-[350px] flex items-center justify-center font-[sans-serif] text-[#333]  z-10">
      <div >
        <div className="flex flex-wrap justify-center pb-40">
          {projects.map((project, index) => (
            <div className="m-2" style={{ minWidth: '250px', maxWidth: 'calc(100% / 3)' }} key={index}>
              <ProjectCard name={project.name} role={project.role} imageSrc={project.imageSrc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


//cargar proyectos para cuando tengamos las fotos y demás
//   import axios from 'axios';
// import { useEffect, useState } from 'react';
// import ProjectCard from '../utils/ProjectCard';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/tasks')
//       .then(response => setProjects(response.data))
//       .catch(error => console.error(`Error: ${error}`));
//   }, []);

//   return (
//     <div className="bg-transparent p-8 min-h-[350px] flex items-center justify-center font-[sans-serif] text-[#333 ml-[240px] z-10">
//       <div className="max-w-screen-md mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} name={project.title} role={project.description} imageSrc={project.imageSrc} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
