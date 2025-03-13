import React, { useEffect, useState } from 'react';
import './AttendanceEntry.css';
import CheckAuth from '../../../hooks/checkAuth';
import { useNavigate } from 'react-router-dom';

// Sample data for students
const students = [
  { studentId: "S001", name: "Alice Johnson" },
  { studentId: "S002", name: "Bob Smith" },
  { studentId: "S003", name: "Charlie Brown" },
  { studentId: "S004", name: "Daisy Miller" },
];

const TeacherAttendanceEntry = () => {
  const {user}=CheckAuth()
  const navigate=useNavigate()
  const [date, setDate] = useState("");
  const [attendance, setAttendance] = useState(
    students.map((student) => ({
      studentId: student.studentId,
      name: student.name,
      status: "Absent",
    }))
  );
  const [editMode, setEditMode] = useState(false);
  const [totalWorkingDays, setTotalWorkingDays] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return; 
  
      console.log(user)
      if (user !== 'teacher') {
  navigate('/login/teachers')
      }
    }
    fetchDashboardData();
  
    calculateTotalWorkingDays();
  }, [user]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    loadAttendanceData(selectedDate);
  };

  const loadAttendanceData = (selectedDate) => {
    const savedAttendance = JSON.parse(localStorage.getItem(`attendance-${selectedDate}`));
    if (savedAttendance) {
      setAttendance(savedAttendance);
      setEditMode(true);
    } else {
      setEditMode(false);
      resetAttendance();
    }
  };

  const resetAttendance = () => {
    setAttendance(
      students.map((student) => ({
        studentId: student.studentId,
        name: student.name,
        status: "Absent",
      }))
    );
  };

  const handleStatusChange = (studentId, status) => {
    setAttendance((prev) =>
      prev.map((record) =>
        record.studentId === studentId ? { ...record, status } : record
      )
    );
  };

  const handleSelectAll = (status) => {
    setAttendance((prev) => prev.map((record) => ({ ...record, status })));
  };

  // Save attendance for the selected date and mark it as a working day
  const handleSave = () => {
    localStorage.setItem(`attendance-${date}`, JSON.stringify(attendance));

    // Update the working days list in localStorage
    const workingDays = JSON.parse(localStorage.getItem("workingDays") || "[]");
    if (!workingDays.includes(date)) {
      workingDays.push(date);
      localStorage.setItem("workingDays", JSON.stringify(workingDays));
      calculateTotalWorkingDays();
    }

    alert("Attendance saved! This date is now considered a working day.");
  };

  // Calculate the total working days
  const calculateTotalWorkingDays = () => {
    const workingDays = JSON.parse(localStorage.getItem("workingDays") || "[]");
    setTotalWorkingDays(workingDays.length);
  };

  return (
    <div className="attendance-container">
      <h2 className="title">Daily Attendance Entry</h2>
      <p>Total Working Days: {totalWorkingDays}</p>
      <input
        type="date"
        className="date-input"
        value={date}
        onChange={handleDateChange}
      />
      <div className="select-buttons">
        <button onClick={() => handleSelectAll("Present")}>Mark All Present</button>
        <button onClick={() => handleSelectAll("Absent")}>Mark All Absent</button>
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Register No</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((student) => (
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>
                <button
                  className={`status-btn ${student.status === "Present" ? "present" : ""}`}
                  onClick={() => handleStatusChange(student.studentId, "Present")}
                >
                  Present
                </button>
                <button
                  className={`status-btn ${student.status === "Absent" ? "absent" : ""}`}
                  onClick={() => handleStatusChange(student.studentId, "Absent")}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="save-button" onClick={handleSave}>
        {editMode ? "Update Attendance" : "Save Attendance"}
      </button>
    </div>
  );
};

export default TeacherAttendanceEntry;
