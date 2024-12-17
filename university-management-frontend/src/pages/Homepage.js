import React from 'react';
import './styles.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
// Mock function to handle button clicks (replace with actual logic)



const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/* Header */}
            <header>
                <div className="container">
                    <h1>School Management System</h1>
                   
                </div>
            </header>

            {/* Main content */}
            <main>
                {/* Home Section */}
                <section id="home" className="section">
                    <h2>Welcome to the School Management System</h2>
                    <p>Manage your school's students, faculty, classrooms, and more efficiently.</p>
                </section>

                {/* Students Section */}
                <section id="students" className="section">
                    <h2>Students</h2>
                    <button onClick={() => navigate('/enroll')}>View Students</button>
                    <div id="students-data"></div>
                </section>

                {/* Faculty Section */}
                <section id="faculty" className="section">
                    <h2>Faculty</h2>
                    <button onClick={() => navigate('/faculty')}>View Faculty</button>
                    <div id="faculty-data"></div>
                </section>

                {/* Classrooms Section */}
                <section id="classrooms" className="section">
                    <h2>Classrooms</h2>
                    <button onClick={() => navigate('/classroom')}>View Classrooms</button>
                    <div id="classrooms-data"></div>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 School Management System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;