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
  }
  fetchTeacher()
})


  const handleDelete = (id) => {
    const updatedData = classData.filter((cls) => cls.id !== id);
    setClassData(updatedData);
  };

  const handleEdit = (id) => {
    const classToEdit = classData.find((cls) => cls.id === id);
    const newTeacher = prompt(
      `Edit Class Teacher for ${classToEdit.department}`,
      classToEdit.classTeacher
    );
    if (newTeacher) {
      setClassData(
        classData.map((cls) =>
          cls.id === id ? { ...cls, classTeacher: newTeacher } : cls
        )
      );
    }
  };

  const handleAdd = () => {
    const newClass = {
      id: classData.length + 1,
      department: prompt("Enter Department:", "New Department"),
      regulationYear: prompt("Enter Regulation Year:", "2023"),
      startYear: prompt("Enter Start Year:", "2023"),
      endYear: prompt("Enter End Year:", "2027"),
      semester: prompt("Enter Semester:", "1"),
      classTeacher: prompt("Enter Class Teacher:", "New Teacher"),
    };
    if (newClass.department && newClass.regulationYear) {
      setClassData([...classData, newClass]);
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
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(cls.id)}
                >
                  Edit
                </button>
                <button
                  className="sem-btn"
                  onClick={() => handleDelete(cls.id)}
                >
                  SEM+
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(cls.id)}
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
