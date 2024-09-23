import React, { useEffect, useState } from 'react';

const PropertyComponent = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('/api/properties/')
            .then(response => response.json())
            .then(data => setProperties(data));
    }, []);

    return (
        <div>
            <h2>Properties List</h2>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>{property.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyComponent;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyComponent = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            const response = await axios.get('/api/properties/'); // Adjust endpoint as needed
            setProperties(response.data);
        };
        fetchProperties();
    }, []);

    return (
        <div>
            <h1>Properties</h1>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>{property.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyComponent;
