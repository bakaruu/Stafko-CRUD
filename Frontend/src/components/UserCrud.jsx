import { useState, useEffect } from 'react';
import axios from 'axios';

const UserCrud = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        const sortedUsers = response.data.sort((a, b) => (b.role === 'ADMIN' ? 1 : 0) - (a.role === 'ADMIN' ? 1 : 0));
        setUsers(sortedUsers);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleEdit = (userId) => {
    const user = users.find(user => user.id === userId);
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setEditingUser(userId);
    setEditing(true);
  };

  const handleUpdate = () => {
    axios.patch(`http://localhost:3000/users/${editingUser}`, { name, email, role })
      .then(response => {
        console.log(`Updated user with id ${editingUser}`);
        setUsers(users.map(user => user.id === editingUser ? response.data : user));
        setEditing(false);
        setEditingUser(null);
      })
      .catch(error => console.error('Error:', error));
  };

  const handleCancel = () => {
    setEditing(false);
    setEditingUser(null);
  };

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      axios.delete(`http://localhost:3000/users/${userId}`)
        .then(() => {
          console.log(`Deleted user with id ${userId}`);
          setUsers(users.filter(user => user.id !== userId));
        })
        .catch(error => console.error('Error:', error));
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
  {users.map(user => (
    <tr key={user.id}>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {editing && editingUser === user.id ? <input type="text" value={name} onChange={e => setName(e.target.value)} /> : user.name}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {editing && editingUser === user.id ? <input type="text" value={email} onChange={e => setEmail(e.target.value)} /> : user.email}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {editing && editingUser === user.id ? <input type="text" value={role} onChange={e => setRole(e.target.value)} /> : user.role}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {editing && editingUser === user.id ? (
          <>
            <button className="btn btn-success" style={{ marginRight: '10px' }} onClick={handleUpdate}>Accept</button>
            <button className="btn btn-error" onClick={handleCancel}>Cancel</button>
            
          </>
        ) : (
          <>
            <button className="btn btn-warning" style={{ marginRight: '10px' }} onClick={() => handleEdit(user.id)}>Edit</button>
            <button className="btn btn-error" onClick={() => handleDelete(user.id)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  ))}
</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCrud;