// frontend/src/components/PropertyManagement.js
import React, { useEffect, useState } from 'react';
import { getProperties, createProperty, updateProperty, deleteProperty } from '../api/propertyApi';

const PropertyManagement = () => {
    const [properties, setProperties] = useState([]);
    const [newProperty, setNewProperty] = useState({ title: '', description: '', location: '', rent: '' });
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            const response = await getProperties();
            setProperties(response.data);
        };
        fetchProperties();
    }, []);

    const handleCreateProperty = async (e) => {
        e.preventDefault();
        await createProperty(newProperty);
        setNewProperty({ title: '', description: '', location: '', rent: '' });
        // Refresh the properties list
        const response = await getProperties();
        setProperties(response.data);
    };

    const handleUpdateProperty = async (propertyId) => {
        await updateProperty(propertyId, newProperty);
        setEditing(null);
        // Refresh the properties list
        const response = await getProperties();
        setProperties(response.data);
    };

    const handleDeleteProperty = async (propertyId) => {
        await deleteProperty(propertyId);
        // Refresh the properties list
        const response = await getProperties();
        setProperties(response.data);
    };

    return (
        <div>
            <h2>Property Management</h2>
            <form onSubmit={handleCreateProperty}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newProperty.title}
                    onChange={(e) => setNewProperty({ ...newProperty, title: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={newProperty.location}
                    onChange={(e) => setNewProperty({ ...newProperty, location: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={newProperty.description}
                    onChange={(e) => setNewProperty({ ...newProperty, description: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Rent"
                    value={newProperty.rent}
                    onChange={(e) => setNewProperty({ ...newProperty, rent: e.target.value })}
                    required
                />
                <button type="submit">Add Property</button>
            </form>

            <h3>Existing Properties</h3>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        <h4>{property.title}</h4>
                        <p>{property.description}</p>
                        <p>{property.location}</p>
                        <p>${property.rent}</p>
                        <button onClick={() => handleDeleteProperty(property.id)}>Delete</button>
                        <button onClick={() => {
                            setEditing(property.id);
                            setNewProperty(property);
                        }}>Edit</button>
                    </li>
                ))}
            </ul>

            {editing && (
                <form onSubmit={() => handleUpdateProperty(editing)}>
                    <input
                        type="text"
                        value={newProperty.title}
                        onChange={(e) => setNewProperty({ ...newProperty, title: e.target.value })}
                    />
                    <input
                        type="text"
                        value={newProperty.location}
                        onChange={(e) => setNewProperty({ ...newProperty, location: e.target.value })}
                    />
                    <textarea
                        value={newProperty.description}
                        onChange={(e) => setNewProperty({ ...newProperty, description: e.target.value })}
                    />
                    <input
                        type="number"
                        value={newProperty.rent}
                        onChange={(e) => setNewProperty({ ...newProperty, rent: e.target.value })}
                    />
                    <button type="submit">Update Property</button>
                </form>
            )}
        </div>
    );
};

export default PropertyManagement;
