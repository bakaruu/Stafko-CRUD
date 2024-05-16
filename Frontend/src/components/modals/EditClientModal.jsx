import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';



// eslint-disable-next-line react/prop-types
const EditClientModal = ({ handleClose }) => {

    const { id: projectId } = useParams();
    const [customer, setCustomer] = useState('');
    const [customerOptions, setCustomerOptions] = useState([]);



    useEffect(() => {
        // Reemplaza 'your-api-url' con la URL de tu API
        axios.get('http://localhost:3000/clients')
            .then(response => {
                const customers = response.data; // Esto corresponde a la estructura de tu respuesta
                const options = customers.map((customer) => ({ value: customer.id, label: customer.clientName }));
                setCustomerOptions(options);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);


    const navigate = useNavigate(); // Agrega esto


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/projects/${projectId}`, { client: customer.value }) 
            .then(response => {
                console.log(response);
                handleClose();
                navigate(0);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:3000/projects/${projectId}/client`)
            .then(response => {
                console.log(response);
                handleClose();
                navigate(0);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };


    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                                    Customer
                                </label>
                                <Select
                                    value={customerOptions.find(option => option.value === customer.value)}
                                    onChange={(option) => setCustomer(option)}
                                    options={customerOptions}
                                    isSearchable={true}
                                    menuPlacement="auto"
                                    maxMenuHeight={120}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0  sm:w-auto sm:text-sm" type="submit">
                                    Change
                                </button>

                                <button onClick={handleDelete} type="submit" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Delete Client
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button onClick={handleClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cerrar
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditClientModal;