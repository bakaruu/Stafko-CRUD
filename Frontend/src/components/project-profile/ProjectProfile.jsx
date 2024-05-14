

import ProjectClientInfo from "./ProjectClientInfo";
import ProjectInfo from "./ProjectInfo";
import ProjectStaffInfo from "./ProjectStaffInfo";
import ProjectTaskInfo from "./ProjectTaskInfo";


const ProjectProfile = () => {


    return (
        <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2 ">
                {/* <!-- Left Side --> */}

                <div className="w-full md:w-3/12 md:mx-2">
                    {/* <!-- Project info Card --> */}
                    <ProjectInfo />

                    {/* <!-- End of profile card --> */}
                    <div className="my-4"></div>
                    
                    {/* <!-- Staff card --> */}
                    <ProjectStaffInfo />
                </div>




                {/* <!-- Right Side --> */}
                <div className="w-full md:w-9/12 mx-2 h-64">
                    {/* <!-- Client info --> */}

                    <ProjectClientInfo />

                    <div className="my-4"></div>

                    {/* <!-- Tasks--> */}
                    <ProjectTaskInfo />
                </div>
            </div>
        </div>

    );
};


export default ProjectProfile;