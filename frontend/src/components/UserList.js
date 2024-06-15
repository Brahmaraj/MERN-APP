import React from 'react';
import axios from 'axios';

const UserList = ({ users, fetchUsers, setCurrentUser }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/users/${id}`);
      fetchUsers();  // Fetch the updated list of users
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => setCurrentUser(user)}>Edit</button>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
