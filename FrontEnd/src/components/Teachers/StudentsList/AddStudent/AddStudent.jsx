import React, { useEffect, useState } from 'react';
import './AddStudent.css'; // Import the CSS file
import CheckAuth from '../../../../hooks/checkAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";




const AddStudentForm = () => {
  const section = ['A', 'B', 'C', 'D', 'E']
  const regulation = [2018, 2021];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  const years = Array.from({ length: 20 }, (_, i) => 2019 + i);
  const jwtToken = localStorage.getItem('token');



  const { user } = CheckAuth()
  const navigate = useNavigate()
  const [studentData, setStudentData] = useState({
    reg: "",
    name: "",
    department: "",
    section: "",
    address: "",
    bloodGroup: "",
    dob: "",
    boardingPoint: "",
    contactNumber: "",
    parentNumber: ""
  });
  const [classdtls, setClassdtls] = useState({
    department: "",
    section: "",
    regulation: "",
    startYear: "",
    endYear: "",
    semester: "",

  })


  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return;

      console.log(user)
      if (user !== 'teacher') {
        navigate('/login/teachers')
      }
      if (jwtToken) {
        const decodedToken = jwtDecode(jwtToken);
        console.log(decodedToken);
        const classid = decodedToken.classId
        console.log(classid)
        const responce = await axios.post('http://localhost:5000/api/teacher/fetch-class', { classid })
        if (responce) {
          const data = responce.data.data
          setClassdtls({
            department: data.department,
            section: data.section,
            regulation: data.regulation,
            startYear: data.startYear,
            endYear: data.endYear,
            semester: data.semester,
            classid:classid

          })
          setStudentData((prevData)=>({
            ...prevData,
            department: data.department,
            section: data.section,
            regulation: data.regulation,
            startYear: data.startYear,
            endYear: data.endYear,
            semester: data.semester,
            classid:classid

        }))
        
          console.log(studentData)
        }

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


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post('http://localhost:5000/api/teacher/add-students',{studentData} )

      console.log(responce)
    } catch (err) { }
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
          <input
            type="text"
            id="department"
            name="department"
            value={studentData.department}
            onChange={handleChange}
            required
            readOnly
          >
          </input>
        </div>


        <div className="form-group">
          <label htmlFor="year">Regualation Year:</label>
          <input
            id="year"
            name="year"
            value={studentData.regulation}
            onChange={handleChange}
            required
            readOnly
          >
          </input>
        </div>

        <div className="form-group">
          <label>Start Year:</label>
          <input
            name="regulation"
            value={studentData.startYear}
            onChange={handleChange}
            readOnly
            required
          >
          </input>
        </div>

        <div className="form-group">
          <label>End Year:</label>
          <input
            name="regulation"
            value={studentData.endYear}
            onChange={handleChange}
            readOnly
          >

          </input>
        </div>



        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <input
            id="section"
            name="section"
            value={studentData.section}
            onChange={handleChange}
            required
            readOnly
          >
          </input>
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
          <label htmlFor="contactNumber">Parent Contact Number:</label>
          <input
            type="text"
            id="parentNumber"
            name="parentNumber"
            value={studentData.parentNumber}
            onChange={handleChange}
            required
          />
        </div>


        {/* <div className="form-group">
          <label htmlFor="parentNumber">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            value={studentData.parentNumber}
            onChange={handleChange}
            required
          />
        </div> */}

        <button type="submit" className="submit-button">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
