// frontend/src/components/AddProperty.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProperty = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = { title, description, address, price };
    axios.post('/api/properties/', newProperty)
      .then(res => {
        console.log('Property added:', res.data);
      })
      .catch(err => {
        console.error('Error adding property:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddProperty;
