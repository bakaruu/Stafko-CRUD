import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// eslint-disable-next-line react/prop-types
const ProjectForm = ({ closeModal }) => {
    const [projectName, setProjectName] = useState('');
    const [customer, setCustomer] = useState('');
    const [description, setDescription] = useState('');
    const [customerOptions, setCustomerOptions] = useState([]);

    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        axios.get('http://localhost:3000/clients')
            .then(response => {
                const customers = response.data;
                const options = customers.map((customer) => ({ value: customer, label: customer.clientName }));
                setCustomerOptions(options);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero indexed, so we add 1
        const day = ("0" + date.getDate()).slice(-2);

        return `${year}-${month}-${day}`;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formattedDate = formatDate(new Date(startDate.setUTCHours(0, 0, 0, 0)));
        const project = {
            name: projectName,
            client: customer.value,
            description: description,
            deadline: formattedDate
        };

        try {
            // Add project to the database
            const dbResponse = await axios.post('http://localhost:3000/projects', project);
            console.log('Project added to database:', dbResponse.data);


            // Close the modal and reload the page
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error('There was an error!', error.response ? error.response.data : error.message);
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
                    value={customer}
                    onChange={(option) => setCustomer(option)}
                    options={customerOptions}
                    isSearchable={true}
                    menuPlacement="auto"
                    maxMenuHeight={120}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Description project" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="mb-6 mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                    Deadline
                </label>
                <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-full" />
                </div>
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
