// src/pages/classroomEnrollment.js
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const classroomEnrollment = () => {
    const [classrooms, setclassrooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from Flask backend
        const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
        
        fetch(`${API_URL}/api/classrooms`)
            .then((response) => response.json())
            .then((data) => {
                setclassrooms(data);
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
            <h1>classroom</h1>
            <ul>
                {classrooms.map((classroom) => (
                    <li key={classroom.classroom_id}>
                        <Link to={`/classrooms/${classroom.classroom_id}`}>
                            {classroom.room_number} - {classroom.course_id}
                                </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default classroomEnrollment;