import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './StudentList.css'; 
import CheckAuth from '../../../hooks/checkAuth';
import { useEffect } from 'react';

const studentData = [
  { register: "S001", name: "Alice Johnson",Dep:"CSE", gender: "Female", feesDue: "$200", attendance: "95%", arrears: 0 },
  { register: "S002", name: "Bob Smith",Dep:"CSE", gender: "Male", feesDue: "$150", attendance: "90%", arrears: 1 },
  { register: "S003", name: "Charlie Brown",Dep:"AIDS", gender: "Male", feesDue: "$0", attendance: "85%", arrears: 0 },
  { register: "S004", name: "Daisy Miller",Dep:"IT", gender: "Female", feesDue: "$300", attendance: "80%", arrears: 1 }
];

const StudentListManagement = () => {
  const navigate = useNavigate();

  const { user } = CheckAuth()
  useEffect(() => {
    
    const fetchDashboardData = async () => {
    console.log("hhh"+user)
      if (!user) return; 

      if (user !== 'admin') {
        navigate('/login/admin')
      }
    }
    fetchDashboardData();
  }, [user])

  return (
    <div className="table-container">
      <h2 className="table-title">Teacher Portal - Student Data</h2>

      {/* Add Student Button (Navigates to the AddStudentPage) */}
      <div className="add-student-button">
        <Link to="/admin/add-student">
          <button>Add Student</button>
        </Link>
      </div>

      {/* Student table */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>Register</th>
            <th>Name</th>
            <th>Dep</th>
            <th>Gender</th>
            <th>Fees Due</th>
            <th>Attendance</th>
            <th>Arrears</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index} className={student.arrears ? 'row-arrears' : ''}>
              <td>{student.register}</td>
              <td>{student.name}</td>
              <td>{student.Dep}</td>
              <td>{student.gender}</td>
              <td>{student.feesDue}</td>
              <td>{student.attendance}</td>
              <td>{student.arrears ? "Yes" : "No"}</td>
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

export default StudentListManagement;
