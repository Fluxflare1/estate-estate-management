const handlePrint = () => {
    window.print();
};

const handleDownload = () => {
    // Logic to download receipt as PDF
};

return (
    <div>
        <h2>Receipt</h2>
        <button onClick={handlePrint}>Print Receipt</button>
        <button onClick={handleDownload}>Download Receipt</button>
    </div>
);
import React from 'react';

const Receipt = ({ receipt }) => {
    return (
        <div>
            <h2>Receipt</h2>
            {/* Display receipt details */}
        </div>
    );
};

export default Receipt;
