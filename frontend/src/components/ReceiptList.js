// frontend/src/components/ReceiptList.js
import React, { useEffect, useState } from 'react';

const ReceiptList = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    // Fetch receipts from the backend
    fetch('/api/receipts/')
      .then((response) => response.json())
      .then((data) => setReceipts(data));
  }, []);

  return (
    <div>
      <h2>Your Receipts</h2>
      <ul>
        {receipts.map((receipt) => (
          <li key={receipt.id}>
            Amount: {receipt.amount} - Date: {receipt.date_issued}
            <button onClick={() => downloadReceipt(receipt.id)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const downloadReceipt = (id) => {
  // Logic to handle receipt download
};

export default ReceiptList;
