import React, { useState } from "react";
import "./ClassesList.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


const ClassManagement = () => {
  const [classData, setClassData] = useState([]);

useEffect(()=>{
  const fetchTeacher=async()=>{
    const responce=await axios.post('http://localhost:5000/api/admin/get-classes')
    console.log(responce)
    if(responce.data.status){
      setClassData(responce.data.data)
    }
    console.log(classData)
  }
  fetchTeacher()
})


  const handleSemInc =async (id) => {
    const responce=await axios.post(`http://localhost:5000/api/admin/classes-sem-inc/${id}`)
    console.log(responce)
    if(responce.data.status){
      setClassData(responce.data.data)
    }

  };


  const handleDelete =async (id) => {
    const responce=await axios.post(`http://localhost:5000/api/admin/classes-dlt/${id}`)
    console.log(responce)
    if(responce.data.status){
      setClassData(responce.data.data)
    }
  };

  return (
    <div className="class-management-container">
      <h2>Class Management</h2>
        <Link to="/admin/add-class">
          <button>Add Class</button>
        </Link>
      <table className="class-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Regulation Year</th>
            <th>Start Year</th>
            <th>End Year</th>
            <th>Semester</th>
            <th>Class Teacher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((cls) => (
            <tr key={cls.id}>
              <td>{cls.department}</td>
              <td>{cls.regulation}</td>
              <td>{cls.startYear}</td>
              <td>{cls.endYear}</td>
              <td>{cls.semester}</td>
              <td>{cls.classTeacherName}</td>
              <td>
              <Link to={`/admin/edit-classes/${cls._id}/${cls.classTeacherId}`}>
                  <button className="edit-btn">Edit</button>
                </Link>
                <button
                  className="sem-btn"
                  onClick={() => handleSemInc(cls._id)}
                >
                  SEM+
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(cls._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassManagement;
