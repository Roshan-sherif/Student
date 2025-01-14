import React, { useEffect, useState } from 'react';
import './CIA2_Entry.css';

// Sample student data
const students = [
  { studentId: "S001", name: "Alice Johnson" },
  { studentId: "S002", name: "Bob Smith" },
  { studentId: "S003", name: "Charlie Brown" },
  { studentId: "S004", name: "Daisy Miller" },
];

const CIA2ENTRY = () => {
  const [marks, setMarks] = useState(
    students.map((student) => ({
      studentId: student.studentId,
      name: student.name,
      subject1: '',
      subject2: '',
      subject3: '',
    }))
  );

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Load saved marks from localStorage when the component mounts
    const savedMarks = JSON.parse(localStorage.getItem('marks'));
    if (savedMarks) {
      setMarks(savedMarks);
      setEditMode(true);
    }
  }, []);

  const handleMarkChange = (studentId, subject, value) => {
    setMarks((prev) =>
      prev.map((student) =>
        student.studentId === studentId
          ? { ...student, [subject]: value }
          : student
      )
    );
  };

  const handleSave = () => {
    localStorage.setItem('marks', JSON.stringify(marks));
    alert('Marks saved!');
  };

  return (
    <div className="mark-entry-container">
      <h2 className="title">Mark Entry Panel</h2>
      <table className="marks-table">
        <thead>
          <tr>
            <th>Register No</th>
            <th>Name</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((student) => (
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="number"
                  value={student.subject1}
                  onChange={(e) => handleMarkChange(student.studentId, 'subject1', e.target.value)}
                  className="mark-input"
                  placeholder="Enter marks"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.subject2}
                  onChange={(e) => handleMarkChange(student.studentId, 'subject2', e.target.value)}
                  className="mark-input"
                  placeholder="Enter marks"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.subject3}
                  onChange={(e) => handleMarkChange(student.studentId, 'subject3', e.target.value)}
                  className="mark-input"
                  placeholder="Enter marks"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="save-button" onClick={handleSave}>
        {editMode ? "Update Marks" : "Save Marks"}
      </button>
    </div>
  );
};

export default CIA2ENTRY;
