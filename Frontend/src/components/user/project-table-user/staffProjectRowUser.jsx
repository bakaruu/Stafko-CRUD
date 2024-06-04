import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StaffProjectRow = ({ id, task, owner, status, deadline, imageUrl }) => {
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
            <td className="p-3 text-left">
                <span className="font-semibold text-light-inverse text-md/normal">{owner}</span>
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

StaffProjectRow.propTypes = {
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    deadline: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
};

export default StaffProjectRow;
