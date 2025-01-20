import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddTeacher.css';

const AddTeacher = () => {
  const [teacher, setTeacher] = useState({
    name: '',
    register: '',
    gender: '',
    department: '',
    subject: '',
    isClassTeacher: false,
    class: '',
  });
  
  const [classes, setClasses] = useState([]); 
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('/api/classes'); 
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTeacher({
      ...teacher,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Teacher Data Submitted:', teacher);
    alert('Teacher added successfully!');
    setTeacher({
      name: '',
      register: '',
      gender: '',
      department: '',
      subject: '',
      isClassTeacher: false,
      class: '',
    });
  };

  return (
    <div className="table-container">
      <h2 className="table-title">Add Teacher</h2>
      <form className="styled-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={teacher.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="register">Register Number:</label>
          <input
            type="text"
            id="register"
            name="register"
            value={teacher.register}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={teacher.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={teacher.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={teacher.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="isClassTeacher"
              checked={teacher.isClassTeacher}
              onChange={handleChange}
            />
            Is Class Teacher?
          </label>
        </div>

        {teacher.isClassTeacher && (
          <div className="form-group">
            <label htmlFor="class">Class:</label>
            <select
              id="class"
              name="class"
              value={teacher.class}
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group">
          <button type="submit" className="add-button">Add Teacher</button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
