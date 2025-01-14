// src/components/StudentProgress.js

import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const StudentProgress = () => {
  const data = [
    { subject: "Mathematics", score: 85 },
    { subject: "Science", score: 90 },
    { subject: "History", score: 75 },
    { subject: "English", score: 95 },
    { subject: "Art", score: 80 },
  ];

  return (
    <div className="progress-page">
      <h1>Student Progress</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#76c7c0" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentProgress;
