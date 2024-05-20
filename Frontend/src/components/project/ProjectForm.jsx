import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';


const ProjectForm = () => {
    const [customer, setCustomer] = useState('');
    const [customerOptions, setCustomerOptions] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:3000/clients')
            .then(response => {
                const customers = response.data;
                const options = customers.map((customer) => ({ value: customer.id, label: customer.clientName }));
                setCustomerOptions(options);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
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
                <Select
                    value={customerOptions.find(option => option.value === customer)}
                    onChange={(option) => setCustomer(option.value)}
                    options={customerOptions}
                    isSearchable={true}
                    menuPlacement="auto"
                    maxMenuHeight={120} // ajusta este valor para cambiar la altura máxima del menú desplegable
                />
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
            
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Add Project
                </button>
            </div>
        </form>
    );
}

export default ProjectForm;