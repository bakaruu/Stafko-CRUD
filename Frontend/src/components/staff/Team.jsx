import TeamCard from './TeamCard'; // Import the 'TeamCard' component
import { useEffect, useState } from 'react';
import axios from 'axios';

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users'); // Reemplaza con la URL de tu endpoint
                setTeamMembers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="font-[sans-serif] text-[#333] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto pb-40">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold">Meet our team</h2>
                    <p className="text-sm mt-4 leading-relaxed">Meet our team of professionals to serve you.</p>
                </div>
                <div className="flex flex-wrap justify-center mt-12">
                    {teamMembers.map((member, index) => (
                        <div className="m-2 flex-auto" style={{minWidth: '250px', maxWidth: 'calc(100% / 4)'}} key={index}>
                            <a href="#" className="hover:shadow-lg transition-shadow duration-200">
                                <TeamCard name={member.name} role={member.role} photoUrl={member.imgSrc} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;