import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Stats = () => {
  const [userCount, setUserCount] = useState(0);
  const navigate = useNavigate();
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => setUserCount(response.data.length))
      .catch(error => console.error(`Error: ${error}`));

      axios.get('http://localhost:3000/projects')
      .then(response => setProjectCount(response.data.length))
      .catch(error => console.error(`Error: ${error}`));

      axios.get('http://localhost:3000/clients')
      .then(response => setClientCount(response.data.length))
      .catch(error => console.error(`Error: ${error}`));
  }, []);

  return (
    <div className="bg-transparent p-8 min-h-[350px] flex items-center justify-center font-[sans-serif] text-[#333  z-10">
      <div className="bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] flex flex-wrap justify-center rounded-3xl px-20 py-10 gap-12">
        <div className="text-center cursor-pointer hover:shadow-lg" onClick={() => navigate('/projects')}>
          <h3 className="text-4xl font-extrabold">{projectCount}<span className="text-blue-600"></span></h3>
          <p className="text-gray-500 font-semibold mt-3">Total Projects</p>
        </div>
        <div className="text-center cursor-pointer hover:shadow-lg" onClick={() => navigate('/clients')}>
          <h3 className="text-4xl font-extrabold">{clientCount}</h3>
          <p className="text-gray-500 font-semibold mt-3">Clients</p>
        </div>
        <div className="text-center cursor-pointer hover:shadow-lg" onClick={() => navigate('/users')}>
          <h3 className="text-4xl font-extrabold">{userCount}</h3>
          <p className="text-gray-500 font-semibold mt-3">Users</p>
        </div>
      </div>
    </div>
  );
};
  
export default Stats;