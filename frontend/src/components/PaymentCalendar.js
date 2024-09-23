// frontend/src/components/PaymentCalendar.js
import React from 'react';
import Calendar from 'react-calendar';

const PaymentCalendar = () => {
  const handleDateChange = (date) => {
    // Logic to handle date selection (e.g., show payments due on selected date)
  };

  return (
    <div>
      <h2>Payment Due Dates</h2>
      <Calendar onChange={handleDateChange} />
    </div>
  );
};

export default PaymentCalendar;
