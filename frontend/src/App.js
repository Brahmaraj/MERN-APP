import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5001/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();  // Fetch users when the component mounts
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <UserForm fetchUsers={fetchUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <UserList users={users} fetchUsers={fetchUsers} setCurrentUser={setCurrentUser} />
    </div>
  );
};

export default App;
