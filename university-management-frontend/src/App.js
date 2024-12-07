import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentEnrollment from './pages/StudentEnrollment';
import StudentList from './pages/StudentList';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route for enrolling a student */}
                <Route path="/enroll" element={<StudentEnrollment />} />
                
                {/* Route for displaying the student list */}
                <Route path="/students" element={<StudentList />} />
            </Routes>
        </Router>
    );
}


export default App;

