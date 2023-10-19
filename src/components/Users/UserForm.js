import React, { useEffect, useState } from 'react';

import axios from 'axios';

function UserForm() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);
  const apiurl = 'http://localhost:5000/api/users/';
  const fetchUsers = () => {
    axios.get(apiurl)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users: ', error);
      });
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    if(!validateEmail(email)) {
      setValidationError('Invalid email');
      return; 
    }

    if (isEditing) {
      // Update user
      axios.put(`apiurl${editingUserId}`, { name, email })
        .then(response => {
          fetchUsers();
          setFormData({
            name: '',
            email: '',
          });
          setIsEditing(false);
          setEditingUserId(null);
        })
        .catch(error => {
          console.error('Error updating user: ', error);
        });
    } else {
      // Create user
      axios.post(apiurl, { name, email })
        .then(response => {
            console.log(response);
          fetchUsers();
          setFormData({
            name: '',
            email: '',
          });
        })
        .catch(error => {
          console.error('Error creating user: ', error);
        });
    }
  }

  const handleEditUser = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
    });
    setIsEditing(true);
    setEditingUserId(user._id);
  }

  const handleDeleteUser = (userId) => {
    axios.delete(`apiurl${userId}`)
      .then(response => {
        fetchUsers();
        setFormData({
          name: '',
          email: '',
        });
        setIsEditing(false);
        setEditingUserId(null);
      })
      .catch(error => {
        console.error('Error deleting user: ', error);
      });
  }

  return (
    <div>
      <h1>User CRUD Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          placeholder="Email"
        />
        <button type="submit">
          {isEditing ? 'Update' : 'Create'}
        </button>
        {validationError && <div style={{color:'red'}}>{validationError}</div>}
      </form>
      <div>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user._id}>
              {user.name} - {user.email}
              <button onClick={() => handleEditUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserForm;
