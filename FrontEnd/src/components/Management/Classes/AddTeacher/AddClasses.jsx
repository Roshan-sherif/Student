import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddClass = () => {
  const [teachers, setTeachers] = useState([]); // Initialize state as an empty array
  const departments = ["CSE", "ECE", "EEE", "Mechanical", "Civil"];
  const regulation = [2018,2021];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  const years = Array.from({ length: 20 }, (_, i) => 2019 + i); 

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/admin/classes-teacher-list'
        );
        console.log(response)
        if (response.data.status && Array.isArray(response.data.teacher)) {
          console.log('hello')
          setTeachers(response.data.teacher);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };
    fetchTeacher();
  }, []);

  const [formData, setFormData] = useState({
    department: "",
    regulation: "",
    startYear: "",
    endYear: "",
    semester: "",
    classTeacherId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response=await axios.post('http://localhost:5000/api/admin/classes-add',formData)
      console.log(response)
if(response.data.status){
  alert('Class Succesfully Added')
}
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="add-class-container">
      <h2>Add Class</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Department:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Regulation Year:</label>
          <select
            name="regulation"
            value={formData.regulation}
            onChange={handleChange}
          >
            <option value="">Select Regulation Year</option>
            {regulation.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Start Year:</label>
          <select
            name="startYear"
            value={formData.startYear}
            onChange={handleChange}
          >
            <option value="">Select Start Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>End Year:</label>
          <select
            name="endYear"
            value={formData.endYear}
            onChange={handleChange}
          >
            <option value="">Select End Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Semester:</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
          >
            <option value="">Select Semester</option>
            {semesters.map((sem, index) => (
              <option key={index} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Class Teacher:</label>
          <select
            name="classTeacherId"
            value={formData.classTeacherId}
            onChange={handleChange}
          >
            <option value="">Select Class Teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher._id} value={teacher._id}>
                {teacher.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Add Class</button>
      </form>
    </div>
  );
};

export default AddClass;
