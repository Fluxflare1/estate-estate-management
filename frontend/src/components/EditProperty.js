// frontend/src/components/EditProperty.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({ title: '', description: '', address: '', price: '' });

  useEffect(() => {
    axios.get(`/api/properties/${id}/`)
      .then(res => {
        setProperty(res.data);
      })
      .catch(err => {
        console.error('Error fetching property:', err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/properties/${id}/`, property)
      .then(res => {
        console.log('Property updated:', res.data);
      })
      .catch(err => {
        console.error('Error updating property:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={property.title}
        onChange={(e) => setProperty({ ...property, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={property.description}
        onChange={(e) => setProperty({ ...property, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={property.address}
        onChange={(e) => setProperty({ ...property, address: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={property.price}
        onChange={(e) => setProperty({ ...property, price: e.target.value })}
      />
      <button type="submit">Update Property</button>
    </form>
  );
};

export default EditProperty;
