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
