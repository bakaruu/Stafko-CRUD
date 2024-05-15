
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddClientModal from '../modals/AddClientModal';
import AddClient from '../buttons/btn-addClient';

// eslint-disable-next-line react/prop-types
const ProjectClientInfo = () => {
    const { id } = useParams();
    const [client, setClient] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3000/projects/${id}`)
            .then(response => {
                setClient(response.data.client);
            })
            .catch(error => {
                console.error('Error fetching project data:', error);
            });
    }, [id]);

    const handleAddClient = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    if (!client) {
        return (
            <div>
                <AddClient onClick={handleAddClient} buttonText="Add Client" />
    
                {isModalOpen && <AddClientModal handleClose={handleCloseModal} />}
            </div>
        );
    }

    return (

        <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-orange-200">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span className="tracking-wide">Client</span>
            </div>
            <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">First Name</div>
                        <div className="px-4 py-2">{client.clientName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Last Name</div>
                        <div className="px-4 py-2">Doe</div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                        <div className="px-4 py-2">{client.phone}</div>
                    </div>
                    
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Permanant Address</div>
                        <div className="px-4 py-2">{client.address}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email.</div>
                        <div className="px-4 py-2">
                            <a className="text-blue-800" href="mailto:jane@example.com">{client.email}</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <button
                className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                Full Information</button>
        </div>
    );

};

export default ProjectClientInfo;