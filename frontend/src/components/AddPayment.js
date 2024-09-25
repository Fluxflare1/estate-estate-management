// frontend/src/components/AddPayment.js
// npm install react-modal react-confetti

import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Confetti from 'react-confetti';

Modal.setAppElement('#root'); // Important for accessibility

const AddPayment = () => {
  const [property, setProperty] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Pending');
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const validateFields = () => {
    let errors = {};
    if (!property) {
      errors.property = 'Property ID is required';
    } else if (!/^\d+$/.test(property)) {
      errors.property = 'Property ID must be a valid number';
    }

    if (!amount) {
      errors.amount = 'Amount is required';
    } else if (amount <= 0) {
      errors.amount = 'Amount must be a positive number';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowErrorModal(true);
      return;
    }

    const newPayment = { property, amount, status };
    axios.post('/api/payments/', newPayment)
      .then(res => {
        setConfetti(true);
        setShowSuccessModal(true);
        setErrors({});
        setProperty('');
        setAmount('');
        setStatus('Pending');
        setTimeout(() => setConfetti(false), 5000); // Confetti for 5 seconds
      })
      .catch(err => {
        setShowErrorModal(true);
      });
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setConfetti(false);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>Add New Payment</h2>
      <form onSubmit={handleSubmit} style={styles.paymentForm}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Property ID:</label>
          <input
            type="text"
            placeholder="Property ID"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            style={styles.input}
          />
          {errors.property && <p style={styles.error}>{errors.property}</p>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Amount (€):</label>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
          {errors.amount && <p style={styles.error}>{errors.amount}</p>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} style={styles.input}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
        </div>

        <button type="submit" style={styles.submitBtn}>Add Payment</button>
      </form>

      {/* Success Modal */}
      <Modal isOpen={showSuccessModal} onRequestClose={closeSuccessModal} style={styles.modal}>
        {confetti && <Confetti />}
        <h2>Success!</h2>
        <p>Your payment has been added successfully.</p>
        <button onClick={closeSuccessModal} style={styles.modalBtn}>Close</button>
      </Modal>

      {/* Error Modal */}
      <Modal isOpen={showErrorModal} onRequestClose={closeErrorModal} style={styles.modal}>
        <h2>Error</h2>
        <p>There was an error adding the payment. Please try again.</p>
        <button onClick={closeErrorModal} style={styles.modalBtn}>Close</button>
      </Modal>
    </div>
  );
};

export default AddPayment;

// Inline Styles
const styles = {
  formContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  paymentForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  },
  submitBtn: {
    display: 'block',
    width: '100%',
    padding: '12px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  modalBtn: {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    marginTop: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  modal: {
    content: {
      background: 'white',
      padding: '40px',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: 'auto',
      textAlign: 'center',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};
