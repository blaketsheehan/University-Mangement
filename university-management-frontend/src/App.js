import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentEnrollment from './pages/StudentEnrollment';
import StudentList from './pages/StudentList';
import StudentDetail from './pages/StudentDetail';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route for enrolling a student */}
                <Route path="/enroll" element={<StudentEnrollment />} />
                
                {/* Route for displaying the student list */}
                <Route path="/students" element={<StudentList />} />
                {/* Route for displaying detailed student information */
                <Route path="/students/:studentId" element={<StudentDetail />} />}
            </Routes>
        </Router>
    );
}


export default App;

