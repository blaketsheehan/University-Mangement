import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateFacultyForm = () => {
    const { facultyId } = useParams();
    const navigate = useNavigate();
    const [faculty, setFaculty] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile_phone: "",
        office_phone: "",
        department: "",
        date_of_birth: "",
        certification: ""
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch existing faculty details
        const fetchFaculty = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/faculty/${facultyId}`);
                if (!response.ok) throw new Error("Failed to fetch faculty details");
                const data = await response.json();
                setFaculty(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchFaculty();
    }, [facultyId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFaculty((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/faculty/${facultyId}/update`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(faculty),
            });

            if (!response.ok) throw new Error("Failed to update faculty details");

            // Redirect back to faculty details
            navigate(`/faculty/${facultyId}`);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Update Faculty</h2>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="first_name"
                        value={faculty.first_name}
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
                        value={faculty.last_name}
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
                        value={faculty.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Mobile Phone:
                    <input
                        type="text"
                        name="mobile_phone"
                        value={faculty.mobile_phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Office Phone:
                    <input
                        type="text"
                        name="office_phone"
                        value={faculty.office_phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Department:
                    <input
                        type="text"
                        name="department"
                        value={faculty.department}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Date of Birth:
                    <input
                        type="date"
                        name="date_of_birth"
                        value={faculty.date_of_birth}
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

export default UpdateFacultyForm;
