import React, { useEffect, useState } from 'react';
import './TimeTable.css';

const TeacherTimetable = () => {
  // Sample timetable data for the teacher (this data could come from an API or database)
  const initialTimetable = {
    Monday: ['Math', 'English', 'History', 'Physics', 'Chemistry'],
    Tuesday: ['Biology', 'Chemistry', 'Math', 'English', 'History'],
    Wednesday: ['Physics', 'History', 'Biology', 'Math', 'Chemistry'],
    Thursday: ['English', 'Physics', 'Biology', 'History', 'Math'],
    Friday: ['Chemistry', 'Math', 'English', 'History', 'Physics'],
  };

  const [timetable, setTimetable] = useState(initialTimetable);

  useEffect(() => {
    // In a real-world app, you could fetch this data from an API or localStorage
    // For this example, it's hardcoded.
    // setTimetable(fetchedTimetableData);
  }, []);

  return (
    <div className="teacher-timetable-container">
      <h2>Teacher's Weekly Timetable</h2>
      <table className="timetable-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'].map((time, index) => (
            <tr key={index}>
              <td>{time}</td>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                <td key={day} className="subject-cell">
                  {timetable[day][index] || 'No Class'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTimetable;
