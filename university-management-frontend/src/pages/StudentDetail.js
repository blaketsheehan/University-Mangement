import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const StudentDetail = () => {
    const { studentId } = useParams(); // Get the student ID from the URL
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook for navigation


    useEffect(() => {
        // Fetch student details from the backend
        const fetchStudent = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/students/${studentId}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch student details");
                }
                const data = await response.json();
                setStudent(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [studentId]);

    if (loading) return <p>Loading student details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Student Details</h2>
            {student ? (
                <div>
                    <p><strong>ID:</strong> {student.student_id}</p>
                    <p><strong>Name:</strong> {student.first_name}</p>
                    <p><strong>Email:</strong> {student.email}</p>
                    <p><strong>Phone:</strong> {student.phone}</p>
                    <p><strong>Start Date:</strong> {student.start_date}</p>
                    <p><strong>Degree:</strong> {student.degree}</p>
                    <p><strong>Date of Birth:</strong> {student.dob}</p>
                 {/* Update button */}
                 <button onClick={() => navigate(`/students/${studentId}/update`)}>Update</button>
                </div>
            ) : (
                <p>No student data found.</p>
            )}
        </div>
    );
};

export default StudentDetail;
