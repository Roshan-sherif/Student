import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import verifyToken from '../../verifyUser';
import CheckAuth from '../../../../hooks/checkAuth';
const TeacherEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [teacher, setTeacher] = useState({
    name: '',
    register: '',
    gender: '',
    department: '',
    subject: '',
  });
const {user} = CheckAuth()
  useEffect(() => {
    console.log(id)
    const fetchDashboardData = async () => {
if(user!=='admin'){
  return null
}
    const getData= await axios.get(`http://localhost:5000/api/admin/get-teacher/${id}`)
    console.log(getData)
    if(getData.data.status){
        setTeacher(getData.data.teacherData)
    }
    

    }

    fetchDashboardData();
  }, [navigate]);
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
       const EditTeacher= await axios.post(`http://localhost:5000/api/admin/edit-teacher/${id}`,teacher)
       if(EditTeacher.data.status){
        alert('Successfuly Edited')
        navigate('/admin/teacher')
       }else{
        alert('Somthing went wrong')
       }
    }catch(error){
console.log(error)
    }
  }
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

export default TeacherEdit;
