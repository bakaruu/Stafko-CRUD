import { useState } from 'react';


const ProjectForm = () => {
    const [manager, setManager] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [customer, setCustomer] = useState('');

    const handleSearch = async (event) => {
        const { value } = event.target;
        setManager(value);

        // if (value.length > 2) {
        //     const results = await searchStaff(value);
        //     setSearchResults(results);
        // } else {
        //     setSearchResults([]);
        // }
    };

    const managers = ['Manager 1', 'Manager 2', 'Manager 3']; // reemplaza con datos reales
    const customers = ['Customer 1', 'Customer 2', 'Customer 3']; // reemplaza con datos reales

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">
                    Project
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="projectName" type="text" placeholder="Project name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                    Customer
                </label>
                <select value={customer} onChange={(e) => setCustomer(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    {customers.map((customer, index) => (
                        <option key={index} value={customer}>{customer}</option>
                    ))}
                </select>
                </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectImage">
                    Photo
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="projectImage" type="file" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Description project"></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectManager">
                    Project Manager
                </label>
                <select value={manager} onChange={(e) => setManager(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    {managers.map((manager, index) => (
                        <option key={index} value={manager}>{manager}</option>
                    ))}
                </select>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Add Project
                </button>
            </div>
        </form>
    );
}

export default ProjectForm;