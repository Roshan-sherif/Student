import React, { useState } from 'react';
import './AddStudent.css'; // Import the CSS file
import CheckAuth from '../../../../hooks/checkAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudentFormMangement = () => {

  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
    reg: "",
    name: "",
    department: "",
    year: "",
    section: "",
    address: "",
    bloodGroup: "",
    dob: "",
    boardingPoint: "",
    contactNumber: "",
    parentNumber: ""
  });

  const { user } = CheckAuth()
  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return; 

      if (user !== 'admin') {
        navigate('/login/admin')
      }
    }
    fetchDashboardData();
  }, [user])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-student-form-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reg">Register Number:</label>
          <input
            type="text"
            id="reg"
            name="reg"
            value={studentData.reg}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={studentData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={studentData.year}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <input
            type="text"
            id="section"
            name="section"
            value={studentData.section}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={studentData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group:</label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            value={studentData.bloodGroup}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={studentData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="boardingPoint">Boarding Point/Hostel:</label>
          <input
            type="text"
            id="boardingPoint"
            name="boardingPoint"
            value={studentData.boardingPoint}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={studentData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="parentNumber">Parent Number:</label>
          <input
            type="text"
            id="parentNumber"
            name="parentNumber"
            value={studentData.parentNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentFormMangement;
