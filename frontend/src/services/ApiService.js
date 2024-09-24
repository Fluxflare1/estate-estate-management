const submitPayment = async (paymentData) => {
    try {
        const response = await fetch('/api/billing/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
        });
        if (!response.ok) {
            throw new Error("Payment submission failed");
        }
        const result = await response.json();
        // Handle successful payment
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while processing your payment. Please try again.");
    }
};
