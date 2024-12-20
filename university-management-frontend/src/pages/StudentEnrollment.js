// src/pages/StudentEnrollment.js
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const StudentEnrollment = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from Flask backend
        const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
        
        fetch(`${API_URL}/api/students`)
            .then((response) => response.json())
            .then((data) => {
                setStudents(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error loading data: {error.message}</h1>;
    }

    return (
        <div>
            <h1>Student</h1>
            <ul>
                {students.map((student) => (
                    <li key={student.student_id}>
                        <Link to={`/students/${student.student_id}`}>
                            {student.first_name} - {student.last_name}
                                </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentEnrollment;
