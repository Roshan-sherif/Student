import React from 'react';
import './Profile.css'; // Create a CSS file for styling

const StudentProfile = () => {
    // Sample student data
    const student = {
        name: "Shiva",
        registerNumber: "123456",
        department: "Computer Science",
        year: "3rd Year",
        section: "A",
        address: "123 Main St, City, Country",
        bloodGroup: "O+",
        dob: "2000-01-01",
        boardingPoint: "Main Hostel",
        contactNumber: "123-456-7890",
        parentNumber: "098-765-4321",
        profilePicture: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png", // Replace with actual path
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={student.profilePicture} alt="Profile" className="profile-pic" />
                <h2>{student.name}</h2>
                <p>Register Number: {student.registerNumber}</p>
            </div>
            <div className="profile-details">
                <h3>Student Details</h3>
                <ul>
                    <li><strong>Department:</strong> {student.department}</li>
                    <li><strong>Year:</strong> {student.year}</li>
                    <li><strong>Section:</strong> {student.section}</li>
                    <li><strong>Address:</strong> {student.address}</li>
                    <li><strong>Blood Group:</strong> {student.bloodGroup}</li>
                    <li><strong>Date of Birth:</strong> {student.dob}</li>
                    <li><strong>Boarding Point/Hostel:</strong> {student.boardingPoint}</li>
                    <li><strong>Contact Number:</strong> {student.contactNumber}</li>
                    <li><strong>Parent Number:</strong> {student.parentNumber}</li>
                </ul>
            </div>
        </div>
    );
};

export default StudentProfile;
