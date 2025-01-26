import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddTeacher.css';
import { useNavigate } from 'react-router-dom';

const AddTeacher = () => {
  const [teacher, setTeacher] = useState({
    name: '',
    register: '',
    gender: '',
    department: '',
    subject: '',
  });
  const navigate =useNavigate()
  const [classes, setClasses] = useState([]); 
  const [DashboardData, setDashboardData] =useState()
useEffect(()=>{
   const fetchDashboardData=async()=>{
    const token=localStorage.getItem("token")
    console.log(token)
    if(!token){
       return navigate('/login/admin')
    }else{
        try {
      const response= await fetch('http://localhost:5000/api/admin/authverify', {
        method: 'GET',
        headers: {
            Authorization: `${token}`,
          }

      })
      const data = await response.json()
      if(data.status){
        navigate(`/admin/add-teacher`)
        setDashboardData(response.data)
      }else{
        navigate(`/login/admin`)
        setDashboardData(response.data)
      }
  
        } 
        
        catch (error) {
            navigate('/login/admin')
            console.error(error)
        }
    }
    }
    fetchDashboardData(); 

},[navigate])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTeacher({
      ...teacher,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTeacher({
      name: '',
      register: '',
      gender: '',
      department: '',
      subject: '',
    });
  
    try{
      const responseAddTeacher= await axios.post('http://localhost:5000/api/admin/add-teacher',teacher,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
if(responseAddTeacher.status){
  alert('Successfully Added the Teacher')
}else{
  alert('somthing went wrong')
}
    }catch(error){
      console.log(error)
    }
  };

  return (
    <div className="table-container">
      <h2 className="table-title">Add Teacher</h2>
      <form className="styled-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={teacher.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="register">Register Number:</label>
          <input
            type="text"
            id="register"
            name="register"
            value={teacher.register}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={teacher.gender}
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
            value={teacher.department}
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
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={teacher.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className="add-button">Add Teacher</button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
