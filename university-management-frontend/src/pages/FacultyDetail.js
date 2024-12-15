import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FacultyDetail = () => {
    const { facultyId } = useParams(); // Get the faculty ID from the URL
    const [faculty, setFaculty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch faculty details from the backend
        const fetchFaculty = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/faculty/${facultyId}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch faculty details");
                }
                const data = await response.json();
                setFaculty(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFaculty();
    }, [facultyId]);

    if (loading) return <p>Loading faculty details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Student Details</h2>
            {faculty ? (
                <div>
                    <p><strong>ID:</strong> {faculty.student_id}</p>
                    <p><strong>Name:</strong> {faculty.first_name}</p>
                    <p><strong>Email:</strong> {faculty.email}</p>
                    <p><strong>Mobile Phone:</strong> {faculty.mobile_phone}</p>
                    <p><strong>Office Phone:</strong> {faculty.office_phone}</p>
                    <p><strong>Department:</strong> {faculty.department}</p>
                    <p><strong>Date of Birth:</strong> {faculty.date_of_birth}</p>
                    <p><strong>Certification:</strong> {faculty.certification}</p>
                </div>
            ) : (
                <p>No faculty data found.</p>
            )}
        </div>
    );
};

export default FacultyDetail;