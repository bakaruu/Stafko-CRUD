import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const ProjectForm = ({ closeModal }) => {
    const [projectName, setProjectName] = useState('');
    const [customer, setCustomer] = useState('');
    const [description, setDescription] = useState('');
    const [customerOptions, setCustomerOptions] = useState([]);
    const workspaceId = '663a196d5e8ef3683b21dec8'; // Reemplaza con el ID real de tu workspace
    const clockifyApiKey = 'NTk4NDg5ZjItNzdlNC00ZDY5LTg5ZTQtM2YyYjgyZmIyYmE0'; // Reemplaza con tu API Key

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const project = {
            name: projectName,
            customerId: customer,
            description: description,
            // Add other project fields here
        };

        try {
            // Añadir proyecto a la base de datos
            const dbResponse = await axios.post('http://localhost:3000/projects', project);
            console.log('Project added to database:', dbResponse.data);

            // Añadir proyecto a Clockify
            const clockifyProject = {
                name: projectName,
                // Add other Clockify project fields here if needed
            };

            const clockifyResponse = await axios.post(`https://api.clockify.me/api/v1/workspaces/${workspaceId}/projects`, clockifyProject, {
                headers: { 'X-Api-Key': clockifyApiKey }
            });
            console.log('Project added to Clockify:', clockifyResponse.data);

            // Cerrar el modal y recargar la página
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error('There was an error!', error);
            alert('An error occurred while adding the project. Please try again.');
        }
    };

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">
                    Project
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="projectName" type="text" placeholder="Project name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
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
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Description project" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
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
