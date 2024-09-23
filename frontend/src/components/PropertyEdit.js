// src/components/PropertyEdit.js
import React, { useEffect, useState } from 'react';
import { getProperties, updateProperty } from '../services/propertyService';

const PropertyEdit = ({ propertyId, onClose }) => {
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            const response = await getProperties(propertyId);
            setProperty(response.data);
        };
        fetchProperty();
    }, [propertyId]);

    const handleUpdateProperty = async () => {
        await updateProperty(propertyId, property);
        onClose(); // Close edit modal or component
    };

    if (!property) return null;

    return (
        <div>
            <h2>Edit Property</h2>
            <input
                type="text"
                value={property.name}
                onChange={(e) => setProperty({ ...property, name: e.target.value })}
            />
            <input
                type="text"
                value={property.location}
                onChange={(e) => setProperty({ ...property, location: e.target.value })}
            />
            <button onClick={handleUpdateProperty}>Update Property</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default PropertyEdit;
