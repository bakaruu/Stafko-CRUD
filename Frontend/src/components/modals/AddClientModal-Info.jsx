import { useState, useEffect } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const AddClientModalInfo = ({handleClose}) => {
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
        axios.post(`http://localhost:3000/projects/${projectId}/client`, { client: customer })
            .then(response => {
                console.log(response);
                handleClose();
                navigate(0); // Usa navigate(0) para recargar la página actual
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };


    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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
                    maxMenuHeight={120}
                />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Add Client
                </button>
            </div>
        </form>
    );
}

export default AddClientModalInfo;