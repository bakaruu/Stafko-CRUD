

import PropTypes from 'prop-types';

const TableRow = ({ name, role, createdAt, qrt, status, imageUrl }) => {
    // Component code here

    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full" src={imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{role}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{createdAt}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{qrt}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${status === 'Activo' ? 'text-green-900' : status === 'Suspended' ? 'text-orange-900' : 'text-red-900'}`}>
                    <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">{status}</span>
                </span>
            </td>
        </tr>
    );
};

TableRow.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    qrt: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default TableRow;
