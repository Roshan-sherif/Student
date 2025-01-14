import React, { useState } from 'react';

const AddClass = () => {
  // Hardcoded data for departments, regulation years, and teachers
  const departments = ["CSE", "ECE", "EEE", "Mechanical", "Civil"];
  const regulationYears = [2020, 2021, 2022, 2023];
  const teachers = [
    { id: 1, name: "Mr. John" },
    { id: 2, name: "Ms. Alice" },
    { id: 3, name: "Dr. Smith" },
  ];

  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  const years = Array.from({ length: 20 }, (_, i) => 2000 + i); // Generates years from 2000 to 2019

  const [formData, setFormData] = useState({
    department: "",
    regulationYear: "",
    startYear: "",
    endYear: "",
    semester: "",
    classTeacher: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.department &&
      formData.regulationYear &&
      formData.startYear &&
      formData.endYear &&
      formData.semester &&
      formData.classTeacher
    ) {
      console.log("Class Added", formData);
      alert("Class added successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="add-class-container">
      <h2>Add Class</h2>
      <form onSubmit={handleSubmit}>
        {/* Department Dropdown */}
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

        {/* Regulation Year Dropdown */}
        <div>
          <label>Regulation Year:</label>
          <select
            name="regulationYear"
            value={formData.regulationYear}
            onChange={handleChange}
          >
            <option value="">Select Regulation Year</option>
            {regulationYears.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Start Year Dropdown */}
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

        {/* End Year Dropdown */}
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

        {/* Semester Dropdown */}
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

        {/* Class Teacher Dropdown */}
        <div>
          <label>Class Teacher:</label>
          <select
            name="classTeacher"
            value={formData.classTeacher}
            onChange={handleChange}
          >
            <option value="">Select Class Teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.name}>
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
