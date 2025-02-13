import React from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom'; 
import './TeacherList.css'; 
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import CheckAuth from '../../../hooks/checkAuth';

const TeacherListManagement = () => {

  const navigate=useNavigate()
  const [DashboardData,setDashboardData]=useState([])
  const [Teachers,setTeacher]=useState([])

  const dltTeacher=async (id)=>{
const dlt = await axios.post(`http://localhost:5000/api/admin/dlt-teacher/${id}`)
console.log(dlt)
if(dlt.data.status){
  console.log('hello')
  setTeacher((prevTeachers) => prevTeachers.filter((teacher) => teacher._id !== id));
}
  }
const {user}=CheckAuth()
  useEffect(()=>{
     const fetchDashboardData=async()=>{
      if (!user == 'admin') {
        return null;
      }else{
        const ListTeacher= await axios.get('http://localhost:5000/api/admin/teacher-view')
        console.log(ListTeacher.data.teacherData)
        if(ListTeacher.data.status){
          setTeacher(ListTeacher.data.teacherData)
        }

      }
      }
      fetchDashboardData(); 

      }
  
  ,[navigate])
  
  return (
    <div className="table-container">
      <h2 className="table-title">Teacher Portal - Teacher Data</h2>

      <div className="add-teacher-button">
        <Link to="/admin/add-teacher">
          <button>Add Teacher</button>
        </Link>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Register</th>
            <th>Name</th>
            <th>Dep</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Teachers.map((teacher, index) => (
            <tr key={index} className={teacher.isClassTeacher === "Yes" ? 'row-class-teacher' : ''}>
              <td>{teacher.register}</td>
              <td>{teacher.name}</td>
              <td>{teacher.department}</td>
              <td>{teacher.gender}</td>
              <td>
              <Link to={`/admin/edit-teacher/${teacher._id}`}>
                  <button className="edit-btn">Edit</button>
                </Link>
                <button className="delete-btn" onClick={()=>dltTeacher(teacher._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherListManagement;
