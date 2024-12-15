import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateStudentForm = () => {
    const { studentId } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        start_date: "",
        degree: "",
        dob: "",
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch existing student details
        const fetchStudent = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/students/${studentId}`);
                if (!response.ok) throw new Error("Failed to fetch student details");
                const data = await response.json();
                setStudent(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchStudent();
    }, [studentId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/students/${studentId}/update`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student),
            });

            if (!response.ok) throw new Error("Failed to update student details");

            // Redirect back to student details
            navigate(`/students/${studentId}`);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Update Student</h2>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="first_name"
                        value={student.first_name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="last_name"
                        value={student.last_name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={student.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Start Date:
                    <input
                        type="date"
                        name="start_date"
                        value={student.start_date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Degree:
                    <input
                        type="text"
                        name="degree"
                        value={student.degree}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Date of Birth:
                    <input
                        type="date"
                        name="dob"
                        value={student.dob}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default UpdateStudentForm;