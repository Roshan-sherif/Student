import React from 'react';
import { Link } from 'react-router-dom'; 
import './TeacherList.css'; 
const teacherData = [
  { register: "T001", name: "Dr. Emily Carter", Dep: "CSE", gender: "Female", className: "Class A", subClass: "Section 1", isClassTeacher: "Yes" },
  { register: "T002", name: "Mr. John Wilson", Dep: "IT", gender: "Male", className: "Class B", subClass: "Section 2", isClassTeacher: "No" },
  { register: "T003", name: "Mrs. Rachel Green", Dep: "AIDS", gender: "Female", className: "Class C", subClass: "Section 3", isClassTeacher: "Yes" },
  { register: "T004", name: "Mr. Ross Geller", Dep: "CSE", gender: "Male", className: "Class D", subClass: "Section 4", isClassTeacher: "No" }
];

const TeacherListManagement = () => {
  return (
    <div className="table-container">
      <h2 className="table-title">Teacher Portal - Teacher Data</h2>

      <div className="add-teacher-button">
        <Link to="/management/add-teacher">
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
            <th>Class Name</th>
            <th>Sub Class</th>
            <th>Class Teacher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teacherData.map((teacher, index) => (
            <tr key={index} className={teacher.isClassTeacher === "Yes" ? 'row-class-teacher' : ''}>
              <td>{teacher.register}</td>
              <td>{teacher.name}</td>
              <td>{teacher.Dep}</td>
              <td>{teacher.gender}</td>
              <td>{teacher.className}</td>
              <td>{teacher.subClass}</td>
              <td>{teacher.isClassTeacher}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherListManagement;
