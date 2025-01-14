import React, { useState } from 'react';
import './Cgpa.css';

// Grade to point mapping
const gradePoints = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'RA': 0
};

// Subjects and their credit points for each department and semester
const departmentSubjects = {
  'CSE': {
    'sem1': {
      'Professional English I': 3,
      'Matrices and Calculus': 4,
      'Engineering Physics': 3,
      'Engineering Chemistry': 3,
      'Problem Solving and Python Programming': 3,
      'Heritage of Tamil': 1,
      'Problem Solving and Python Programming Lab': 2,
      'Physics and Chemistry Lab': 2,
      'English Lab': 2,
    },
    'sem2': {
      'Professional English II': 2,
      'Statistics and Numerical Methods': 4,
      'Physics for Information Science': 3,
      'Basic Electrical and Electronics Engineering': 3,
      'Engineering Graphics': 4,
      'Programming in C': 3,
      'Tamil and Technology': 1,
      'Engineering Practices Lab': 2,
      'Programming in C Lab': 2,
    },
    // Additional semesters can be added here
  },
  'ECE': {
    // Add subjects for ECE department
  },
  'MECH': {
    // Add subjects for MECH department
  },
  'AIDS': {
    // Add subjects for AIDS department
  },
};

function CGPACalculator() {
  const [department, setDepartment] = useState('CSE');
  const [semester, setSemester] = useState('sem1');
  const [grades, setGrades] = useState({});
  const [cgpa, setCgpa] = useState(null);

  const semesters = Object.keys(departmentSubjects[department]);

  const handleGradeChange = (subject, grade) => {
    setGrades(prevGrades => ({
      ...prevGrades,
      [subject]: grade
    }));
  };

  const calculateCgpa = () => {
    const subjects = departmentSubjects[department][semester];
    let totalPoints = 0;
    let totalCredits = 0;

    for (const [subject, credits] of Object.entries(subjects)) {
      const grade = grades[subject] || 'RA'; // Default to RA if no grade
      if (gradePoints[grade] !== undefined) {
        totalPoints += gradePoints[grade] * credits;
        totalCredits += credits;
      }
    }

    const cgpaValue = totalCredits > 0 ? totalPoints / totalCredits : 0;
    setCgpa(cgpaValue);
  };

  return (
    <div className="cgpa-calculator-container">
      <h1 className="cgpa-calculator-title">CGPA Calculator</h1>
      <div className="cgpa-selection-container">
        <label>Select Department:</label>
        <select className="cgpa-dropdown" value={department} onChange={(e) => setDepartment(e.target.value)}>
          {Object.keys(departmentSubjects).map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>

        <label>Select Semester:</label>
        <select className="cgpa-dropdown" value={semester} onChange={(e) => setSemester(e.target.value)}>
          {semesters.map(sem => (
            <option key={sem} value={sem}>{sem}</option>
          ))}
        </select>
      </div>

      <h2 className="cgpa-subjects-title">Subjects and Grades</h2>
      <div className="cgpa-subjects-container">
        {Object.entries(departmentSubjects[department][semester]).map(([subject, credits]) => (
          <div key={subject} className="cgpa-subject-row">
            <span>{subject} ({credits} credits): </span>
            <select className="cgpa-grade-dropdown" onChange={(e) => handleGradeChange(subject, e.target.value)} defaultValue='RA'>
              <option value='RA'>RA</option>
              {Object.keys(gradePoints).map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button className="cgpa-calculate-button" onClick={calculateCgpa}>
        Calculate CGPA
      </button>

      <h2 className="cgpa-result-title">Your CGPA is: {cgpa !== null ? cgpa.toFixed(2) : '-'}</h2>
    </div>
  );
}

export default CGPACalculator;
