import React, { useState, useEffect } from 'react';
import { createProperty, updateProperty, getProperty } from '../api/propertyApi';

const PropertyForm = ({ propertyId, onClose }) => {
    const [property, setProperty] = useState({
        name: '',
        location: '',
        landlord: '',
        tenant: '',
        rent: ''
    });

    useEffect(() => {
        if (propertyId) {
            const fetchProperty = async () => {
                const response = await getProperty(propertyId);
                setProperty(response.data);
            };
            fetchProperty();
        }
    }, [propertyId]);

    const handleChange = (e) => {
        setProperty({ ...property, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (propertyId) {
            await updateProperty(propertyId, property);
        } else {
            await createProperty(property);
        }
        onClose(); // Close the form modal after submission
    };

    return (
        <div>
            <h2>{propertyId ? 'Edit Property' : 'Add Property'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Property Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={property.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={property.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Landlord:</label>
                    <input
                        type="text"
                        name="landlord"
                        value={property.landlord}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Tenant:</label>
                    <input
                        type="text"
                        name="tenant"
                        value={property.tenant}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Rent Amount:</label>
                    <input
                        type="number"
                        name="rent"
                        value={property.rent}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">
                    {propertyId ? 'Update Property' : 'Add Property'}
                </button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default PropertyForm;
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
