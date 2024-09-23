import React, { useState } from 'react';
import { createProperty } from '../api'; // Define this API function

const PropertyForm = ({ onSuccess }) => {
    const [property, setProperty] = useState({ title: '', description: '', price: '', property_type: '', location: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProperty(property);
        onSuccess(); // Callback to refresh the property list or redirect
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={property.title} onChange={(e) => setProperty({ ...property, title: e.target.value })} placeholder="Title" required />
            <textarea value={property.description} onChange={(e) => setProperty({ ...property, description: e.target.value })} placeholder="Description" required />
            <input type="number" value={property.price} onChange={(e) => setProperty({ ...property, price: e.target.value })} placeholder="Price" required />
            <input type="text" value={property.property_type} onChange={(e) => setProperty({ ...property, property_type: e.target.value })} placeholder="Property Type" required />
            <input type="text" value={property.location} onChange={(e) => setProperty({ ...property, location: e.target.value })} placeholder="Location" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PropertyForm;
