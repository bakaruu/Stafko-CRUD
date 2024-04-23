import { useState, useEffect } from 'react';
import axios from 'axios';
import ToastNewProject from './ToastNewProject';

const TaskCrud = () => {
    const [tasks, setTasks] = useState([]);
    const [editing, setEditing] = useState(false);
    const [creating, setCreating] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/tasks')
      .then(response => {
        const sortedTasks = response.data.sort((a, b) => (b.status === 'ADMIN' ? 1 : 0) - (a.status === 'ADMIN' ? 1 : 0));
        setTasks(sortedTasks);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleCreate = () => {
    axios.post('http://localhost:3000/tasks', { title, description, status })
      .then(response => {
        console.log(`Created task with id ${response.data.id}`);
        setTasks([...tasks, response.data]);
        setCreating(false);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // hide the toast after 3 seconds
      })
      .catch(error => console.error('Error:', error));
  };

  const handleEdit = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setEditingTask(taskId);
    setEditing(true);
  };

  const handleUpdate = () => {
    axios.patch(`http://localhost:3000/tasks/${editingTask}`, { title, description, status })
      .then(response => {
        console.log(`Updated task with id ${editingTask}`);
        setTasks(tasks.map(task => task.id === editingTask ? response.data : task));
        setEditing(false);
        setEditingTask(null);
        
      })
      .catch(error => console.error('Error:', error));
  };

  const handleCancel = () => {
    setEditing(false);
    setCreating(false);
    setEditingTask(null);
  };

  const handleDelete = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      axios.delete(`http://localhost:3000/tasks/${taskId}`)
        .then(() => {
          console.log(`Deleted task with id ${taskId}`);
          setTasks(tasks.filter(task => task.id !== taskId));
        })
        .catch(error => console.error('Error:', error));
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
        

        {showToast && <ToastNewProject />}
      <div className="py-8">
      <button className="btn btn-primary" onClick={() => setCreating(true)}>Add New Task</button>
            {creating && (
              <div className="form">
                <input  type="text" placeholder="Title" value={title}  onChange={e => setTitle(e.target.value)} />
                <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                <input type="text" placeholder="Status" value={status} onChange={e => setStatus(e.target.value)} />
                <button className="btn btn-success" onClick={handleCreate}>Create</button>
                <button className="btn btn-error" onClick={handleCancel}>Cancel</button>
              </div>
            )}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(task => (
                  <tr key={task.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {editing && editingTask === task.id ? <input type="text" value={title} onChange={e => setTitle(e.target.value)} /> : task.title}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {editing && editingTask === task.id ? <input type="text" value={description} onChange={e => setDescription(e.target.value)} /> : task.description}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {editing && editingTask === task.id ? <input type="text" value={status} onChange={e => setStatus(e.target.value)} /> : task.status}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {editing && editingTask === task.id ? (
                        <>
                          <button className="btn btn-success" style={{ marginRight: '10px' }} onClick={handleUpdate}>Accept</button>
                          <button className="btn btn-error" onClick={handleCancel}>Cancel</button>
                        </>
                      ) : (
                        <>
                          <button className="btn btn-warning" style={{ marginRight: '10px' }} onClick={() => handleEdit(task.id)}>Edit</button>
                          <button className="btn btn-error" onClick={() => handleDelete(task.id)}>Delete</button>
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

export default TaskCrud;

  

