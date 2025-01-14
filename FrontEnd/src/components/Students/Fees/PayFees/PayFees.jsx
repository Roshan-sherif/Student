import React, { useState } from 'react';
import './PayFees.css'; // Import the CSS for styling

// Sample data for demonstration
const studentDetails = {
  name: 'John Doe',
  registerNumber: '123456',
  fees: [
    { feeName: 'Tuition Fee', actualAmount: 5000, paidAmount: 5000 },
    { feeName: 'Lab Fee', actualAmount: 2000, paidAmount: 1500 },
    { feeName: 'Library Fee', actualAmount: 1000, paidAmount: 1000 },
  ],
};

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleAmountChange = (feeName, value) => {
    const updatedDetails = paymentDetails.map(detail =>
      detail.feeName === feeName ? { ...detail, amount: value } : detail
    );

    if (!updatedDetails.find(detail => detail.feeName === feeName)) {
      updatedDetails.push({ feeName, amount: value });
    }

    setPaymentDetails(updatedDetails);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Here you would typically handle the payment logic and redirect to the payment gateway

    // Simulate a successful payment operation
    const totalPayment = paymentDetails.reduce((acc, detail) => acc + Number(detail.amount), 0);
    setConfirmationMessage(`Payment of $${totalPayment} made successfully! You will be redirected to the payment gateway.`);
    
    // Clear payment details after submission
    setPaymentDetails([]);
    setPaymentMethod('Credit Card'); // Reset to default payment method

    // Simulating redirect to payment gateway
    setTimeout(() => {
      window.location.href = '/payment-gateway'; // Replace with actual payment gateway URL
    }, 3000);
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment Page</h1>
      <div className="student-details">
        <h2 className="student-title">Student Information</h2>
        <p><strong>Name:</strong> {studentDetails.name}</p>
        <p><strong>Register Number:</strong> {studentDetails.registerNumber}</p>
      </div>

      <form className="payment-form" onSubmit={handlePayment}>
        {studentDetails.fees.map((fee, index) => (
          <div key={index} className="form-group">
            <label htmlFor={`amount-${index}`}>{fee.feeName} (Max: ₹{fee.actualAmount - fee.paidAmount})</label>
            <input
              type="number"
              id={`amount-${index}`}
              onChange={(e) => handleAmountChange(fee.feeName, e.target.value)}
              placeholder="Enter amount"
              min="0"
              max={fee.actualAmount - fee.paidAmount}
              required
            />
          </div>
        ))}
        
        <div className="form-group">
          <label htmlFor="payment-method">Payment Method:</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit Payment</button>
      </form>

      {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
    </div>
  );
};

export default Payment;
