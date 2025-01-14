import React from 'react';
import './DueFees.css'; // Import the CSS for styling

// Sample data for demonstration
const studentDetails = {
  name: 'John Doe',
  registerNumber: '123456',
  batch: '2024',
  branch: 'Computer Science',
  program: 'B.Tech',
  fatherName: 'Michael Doe',
  fees: [
    {sem: 1 , feeName: 'Tuition Fee', actualAmount: 5000, paidAmount: 5000 },
    {sem: 1  ,feeName: 'Lab Fee', actualAmount: 2000, paidAmount: 1500 },
    {sem: 1 , feeName: 'Library Fee', actualAmount: 1000, paidAmount: 1000 },
  ],
};

const FeesDues = () => {
  // Calculate totals
  const totalActual = studentDetails.fees.reduce((acc, fee) => acc + fee.actualAmount, 0);
  const totalPaid = studentDetails.fees.reduce((acc, fee) => acc + fee.paidAmount, 0);
  const totalDue = studentDetails.fees.reduce((acc, fee) => acc + (fee.actualAmount - fee.paidAmount), 0);

  return (
    <div className="fees-dues-container">
      <h1 className="page-title">Fees Dues Information</h1>

      <div className="student-details">
        <h2 className="student-title">Student Details</h2>
        <div className="details-grid">
          <p><strong>Name:</strong> {studentDetails.name}</p>
          <p><strong>Register Number:</strong> {studentDetails.registerNumber}</p>
          <p><strong>Batch:</strong> {studentDetails.batch}</p>
          <p><strong>Branch:</strong> {studentDetails.branch}</p>
          <p><strong>Program:</strong> {studentDetails.program}</p>
          <p><strong>Father's Name:</strong> {studentDetails.fatherName}</p>
        </div>

        <h3 className="fees-title">Fees Dues</h3>
        <table className="fees-table">
          <thead>
            <tr>
            <th>Sem</th>
              <th>Fees Name</th>
              <th>Actual Amount</th>
              <th>Paid Amount</th>
              <th>Due Amount</th>
            </tr>
          </thead>
          <tbody>
            {studentDetails.fees.map((fee, index) => {
              const dueAmount = fee.actualAmount - fee.paidAmount; // Calculate due amount
              return (
                <tr key={index}>
                  <td>{fee.sem}</td>
                  <td>{fee.feeName}</td>
                  <td>₹{fee.actualAmount}</td>
                  <td>₹{fee.paidAmount}</td>
                  <td>₹{dueAmount}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
            <td><strong></strong></td>
              <td><strong>Total</strong></td>
              <td><strong>₹{totalActual}</strong></td>
              <td><strong>₹{totalPaid}</strong></td>
              <td><strong>₹{totalDue}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default FeesDues;
