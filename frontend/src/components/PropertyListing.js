import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            const response = await axios.get('/api/properties/');
            setProperties(response.data);
        };
        fetchProperties();
    }, []);

    return (
        <ul>
            {properties.map(property => (
                <li key={property.id}>{property.title} - {property.property_type}</li>
            ))}
        </ul>
    );
};

export default PropertyListing;
