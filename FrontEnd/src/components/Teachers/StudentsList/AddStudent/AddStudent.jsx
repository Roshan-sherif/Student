import React, { useEffect, useState } from 'react';
import './AddStudent.css'; // Import the CSS file
import CheckAuth from '../../../../hooks/checkAuth';
import { useNavigate } from 'react-router-dom';

const AddStudentForm = () => {
  const departments = ["CSE", "ECE", "EEE", "Mechanical", "Civil"];
  const section=['A','B','C','D','E']
  const regulation = [2018,2021];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  const years = Array.from({ length: 20 }, (_, i) => 2019 + i); 

  const {user}=CheckAuth()
  const navigate=useNavigate()
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

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return; 
  
      console.log(user)
      if (user !== 'teacher') {
  navigate('/login/teachers')
      }
    }
    fetchDashboardData();
    }, [user]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data Submitted:", studentData);
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
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={studentData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <select
            type="text"
            id="department"
            name="department"
            value={studentData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="GENERAL">GENERAL</option>
            <option value="CSE">CSE</option>
            <option value="AIDS">AIDS</option>
            <option value="CYBER SECURITY">CYBER SECURITY</option>
            <option value="FOOD AND TECH">FOOD AND TECH</option>
            <option value="AGRICULTURE">AGRICULTURE</option>
            <option value="CIVIL">CIVIL</option>
            <option value="MECH">MECH</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="BIO TECH">BIO TECH</option>
          </select>
        </div>


        <div className="form-group">
          <label htmlFor="year">Regualation Year:</label>
          <select
            id="year"
            name="year"
            value={studentData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Regulation Year</option>
            <option value="2018">2018</option>
            <option value="2021">2021</option>

          </select>
        </div>

        <div>
          <label>Start Year:</label>
          <select
            name="regulation"
            value={studentData.regulation}
            onChange={handleChange}
          >
            <option value="Select Start Year">Select Start Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>End Year:</label>
          <select
            name="regulation"
            value={studentData.regulation}
            onChange={handleChange}
          >
            <option value="Select End Year">Select End Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>



        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <select
            id="section"
            name="section"
            value={studentData.section}
            onChange={handleChange}
            required
          >
                        <option value="">Select Section</option>
            {section.map((sec, index) => (
              <option key={index} value={sec}>
                {sec}
              </option>
            ))}
</select>
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
          <label htmlFor="parentNumber">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
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

export default AddStudentForm;
