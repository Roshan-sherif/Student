import React, { useState } from 'react';
import './StudentsLogin.css'; // Add custom CSS styling

function StudentLogin() {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Example validation; replace with actual validation logic
    if (studentID === '12345' && password === 'password') {
      alert('Login successful');
      // Redirect to dashboard or perform other actions
    } else {
      setErrorMessage('Invalid Student ID or Password');
    }
  };

  return (
    <div className="login-container">
      <h2>Student Portal Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="studentID">Student ID</label>
          <input
            type="text"
            id="studentID"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default StudentLogin;
