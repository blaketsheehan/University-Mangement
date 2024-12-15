import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/students')  // Make sure this matches your Flask backend URL
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8000/api/students/${id}`).then(() => {
      setStudents(students.filter(student => student.id !== id));
    }).catch(error => console.error('Error deleting student:', error));
  };

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - {student.course}
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
