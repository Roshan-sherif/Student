import React from 'react';
import './AttendanceCard.css';

const AttendanceCard = ({ title, percentage }) => {
  return (
    <div className="attendance-card">
      <div className="content-wrapper">
        <div className="circle-container">
          <svg className="progress-circle" width="100" height="100">
            <circle cx="50" cy="50" r="45" stroke="#e6e6e6" strokeWidth="5" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#4caf50"
              strokeWidth="5"
              fill="none"
              strokeDasharray={`${percentage * 2.83} ${2.83 * 100 - percentage * 2.83}`}
              style={{ transition: 'stroke-dasharray 0.5s ease-in-out' }}
            />
          </svg>
          <span className="percentage">{percentage}%</span>
        </div>
        <div className="text-container">
          <h3 className="title">{title}</h3>
          <p className="description">Attendance Percentage</p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
