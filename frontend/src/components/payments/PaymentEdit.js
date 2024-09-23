// Complete PaymentEdit.js
const PaymentEdit = ({ paymentId, onClose }) => {
    const [payment, setPayment] = useState(null);

    useEffect(() => {
        const fetchPayment = async () => {
            const response = await getPayments(paymentId);
            setPayment(response.data);
        };
        fetchPayment();
    }, [paymentId]);

    const handleUpdatePayment = async () => {
        await updatePayment(paymentId, payment);
        onClose(); // Close edit modal or component
    };

    if (!payment) return null;

    return (
        <div>
            <h2>Edit Payment</h2>
            <input
                type="number"
                value={payment.amount}
                onChange={(e) => setPayment({ ...payment, amount: e.target.value })}
            />
            <input
                type="text"
                value={payment.userId}
                onChange={(e) => setPayment({ ...payment, userId: e.target.value })}
            />
            <button onClick={handleUpdatePayment}>Update Payment</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default PaymentEdit;
