import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import PropertyList from './PropertyList';

const PropertyPage = () => {
    const [editingPropertyId, setEditingPropertyId] = useState(null);

    const openForm = (propertyId) => {
        setEditingPropertyId(propertyId);
    };

    const closeForm = () => {
        setEditingPropertyId(null);
    };

    return (
        <div>
            <h1>Properties</h1>
            <button onClick={() => openForm(null)}>Add Property</button>
            <PropertyList onEdit={openForm} />
            {editingPropertyId !== null && (
                <PropertyForm propertyId={editingPropertyId} onClose={closeForm} />
            )}
        </div>
    );
};

export default PropertyPage;
import React, { useEffect, useState } from 'react';
import { getProperties } from '../api'; // Define this API function

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            const response = await getProperties();
            setProperties(response.data);
        };
        fetchProperties();
    }, []);

    return (
        <div>
            <h1>Properties</h1>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        <h2>{property.title}</h2>
                        <p>{property.description}</p>
                        <p>Price: ${property.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
// src/components/PropertyList.js
import React, { useEffect, useState } from 'react';
import { getProperties, createProperty, deleteProperty } from '../services/propertyService';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [newProperty, setNewProperty] = useState({ name: '', location: '' });

    useEffect(() => {
        loadProperties();
    }, []);

    const loadProperties = async () => {
        const response = await getProperties();
        setProperties(response.data);
    };

    const handleAddProperty = async () => {
        await createProperty(newProperty);
        loadProperties();
        setNewProperty({ name: '', location: '' }); // Reset form
    };

    const handleDeleteProperty = async (id) => {
        await deleteProperty(id);
        loadProperties();
    };

    return (
        <div>
            <h2>Property List</h2>
            <input
                type="text"
                placeholder="Property Name"
                value={newProperty.name}
                onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Location"
                value={newProperty.location}
                onChange={(e) => setNewProperty({ ...newProperty, location: e.target.value })}
            />
            <button onClick={handleAddProperty}>Add Property</button>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        {property.name} ({property.location})
                        <button onClick={() => handleDeleteProperty(property.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
// frontend/src/components/PaymentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('/api/payments/')
      .then(res => {
        setPayments(res.data);
      })
      .catch(err => {
        console.error('Error fetching payments:', err);
      });
  }, []);

  return (
    <div>
      <h2>Payments</h2>
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>
            <p>Property ID: {payment.property}</p>
            <p>Amount: ${payment.amount}</p>
            <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
            <p>Status: {payment.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
// frontend/src/components/PropertyList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('/api/properties/')
      .then(res => {
        setProperties(res.data);
      })
      .catch(err => {
        console.error('Error fetching properties:', err);
      });
  }, []);

  return (
    <div>
      <h2>Properties</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
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
