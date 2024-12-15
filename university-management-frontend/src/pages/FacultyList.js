// src/pages/FacultyList.js
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const FacultyList = () => {
    const [faculty, setFaculty] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from Flask backend
        const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
        
        fetch(`${API_URL}/api/faculty`)
            .then((response) => response.json())
            .then((data) => {
                setFaculty(data);
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
            <h1>Faculty</h1>
            <ul>
                {faculty.map((faculty) => (
                    <li key={faculty.faculty_id}>
                        <Link to={`/faculty/${faculty.faculty_id}`}>
                            {faculty.first_name} - {faculty.last_name}
                                </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FacultyList;