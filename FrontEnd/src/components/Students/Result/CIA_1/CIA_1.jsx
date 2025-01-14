import React from 'react';
import './CIA_1.css'; // Import your CSS file for styling

const ResultPage = () => {
    // Sample data for the student results
    const studentData = {
        firstName: 'John',
        registerNumber: '2023101',
        resultType: 'Internal',
        subjects: [
            { subjectName: 'Mathematics', subjectCode: 'MTH101', marks: 85, status: 'Pass' },
            { subjectName: 'Physics', subjectCode: 'PHY101', marks: 75, status: 'Pass' },
            { subjectName: 'Chemistry', subjectCode: 'CHE101', marks: 65, status: 'Pass' },
            { subjectName: 'Biology', subjectCode: 'BIO101', marks: 55, status: 'Fail' },
        ],
    };

    return (
        <div className="result-page">
            <h1>CIA-1 </h1>
            <div className="student-info">
                <p><strong>First Name:</strong> {studentData.firstName}</p>
                <p><strong>Register Number:</strong> {studentData.registerNumber}</p>
                <p><strong>Result Type:</strong> {studentData.resultType}</p>
            </div>
            <table className="results-table">
                <thead>
                    <tr>
                        <th>Subject Name</th>
                        <th>Subject Code</th>
                        <th>Marks</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.subjects.map((subject, index) => (
                        <tr key={index}>
                            <td>{subject.subjectName}</td>
                            <td>{subject.subjectCode}</td>
                            <td>{subject.marks}</td>
                            <td>{subject.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultPage;
