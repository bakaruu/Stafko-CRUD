import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectRowUser = ({ id, task, owner, progress, status, deadline, imageUrl }) => {
    return (
        <tr className="border-b border-dashed last:border-b-0">
            <td className="p-3 pl-0">
                <div className="flex items-center">
                    <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        <img src={imageUrl} className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                    </div>
                    <Link to={`/userproject/${id}`} className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">
                        {task}
                    </Link>
                </div>
            </td>
            <td className="p-3  text-left">
                <span className="font-semibold text-light-inverse text-md/normal">{owner}</span>
            </td>
            <td className="p-3 text-left">
                <span className={`text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none rounded-lg ${progress < 40 ? 'text-red-500 bg-red-100' : progress < 80 ? 'text-yellow-500 bg-yellow-100' : 'text-green-500 bg-green-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg> {progress}%
                </span>
            </td>
            <td className="p-3 pr-1 text-center">
                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">{status}</span>
            </td>
            <td className="text-center">
                <span className="font-semibold text-light-inverse text-md/normal">{deadline || "No deadline set"}</span>
            </td>

        </tr>
    );
};

ProjectRowUser.propTypes = {
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    deadline: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
};

export default ProjectRowUser;