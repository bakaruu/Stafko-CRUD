

import ProjectClientInfoUser from "./ProjectClientInfoUser";
import ProjectInfoUser from "./ProjectInfoUser";
import ProjectStaffInfoUser from "./ProjectStaffInfoUser";
import ProjectTaskInfoUser from "./ProjectTaskInfoUser";


const ProjectProfileUser = () => {
    

    return (
        <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2 ">
                {/* <!-- Left Side --> */}

                <div className="w-full md:w-3/12 md:mx-2">
                    {/* <!-- Project info Card --> */}
                    <ProjectInfoUser />

                    {/* <!-- End of profile card --> */}
                    <div className="my-4"></div>
                    
                    {/* <!-- Staff card --> */}
                    <ProjectStaffInfoUser />
                </div>




                {/* <!-- Right Side --> */}
                <div className="w-full md:w-9/12 mx-2 h-64">
                    {/* <!-- Client info --> */}

                    <ProjectClientInfoUser />

                    <div className="my-4"></div>

                    {/* <!-- Tasks--> */}
                    <ProjectTaskInfoUser />
                </div>
            </div>
        </div>

    );
};


export default ProjectProfileUser;