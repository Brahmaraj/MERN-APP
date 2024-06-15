import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ fetchUsers, currentUser, setCurrentUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentUser) {
        await axios.patch(`http://localhost:5001/users/${currentUser._id}`, { name, email });
        setCurrentUser(null);
      } else {
        await axios.post('http://localhost:5001/users', { name, email });
      }
      setName('');
      setEmail('');
      fetchUsers();  // Fetch the updated list of users
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">{currentUser ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;
