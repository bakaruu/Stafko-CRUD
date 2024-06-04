import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectStaffInfoUser = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token'); // Obtener el token de acceso desde localStorage

    useEffect(() => {
        const fetchStaffData = async () => {
            try {
                // Configurar el encabezado de autorización
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                // Obtener las asignaciones de usuarios al proyecto
                const assignmentsResponse = await axios.get('http://localhost:8055/items/projects_staff_assignments', {
                    params: {
                        filter: {
                            project_id: {
                                _eq: id
                            }
                        }
                    },
                    ...config
                });

                const staffAssignments = assignmentsResponse.data.data;

                if (staffAssignments.length === 0) {
                    setUsers([]);
                    return;
                }

                const staffIds = staffAssignments.map(item => item.staff_id);

                // Obtener la información detallada de cada usuario desde `directus_users`
                const userPromises = staffIds.map(staffId => axios.get(`http://localhost:8055/users/${staffId}`, config));
                const userResponses = await Promise.all(userPromises);

                const usersData = userResponses.map(response => response.data.data);

                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            }
        };

        if (id && token) {
            fetchStaffData();
        }
    }, [id, token]);

    return (
        <div className="bg-white p-3 mb-14 hover:shadow">
            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span className="text-orange-200">
                    <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </span>
                <span>Staff</span>
            </div>
            <div className="flex justify-center ">
                <div className="grid grid-cols-2 gap-2">
                    {users.map((user, index) => (
                        <div key={index} className="text-center my-2">
                            <img className="h-16 w-16 rounded-full mx-auto" src={`http://localhost:8055/assets/${user.avatar}`} alt={user.first_name} />
                            <a href="#" className="text-main-color">{user.first_name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectStaffInfoUser;
