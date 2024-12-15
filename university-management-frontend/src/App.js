import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentEnrollment from './pages/StudentEnrollment';
import StudentList from './pages/StudentList';
import StudentDetail from './pages/StudentDetail';
import FacultyList from './pages/FacultyList';
import FacultyDetail from './pages/FacultyDetail';
import UpdateStudentForm from './pages/UpdateStudentForm';
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
                 {/* Route for displaying FacultyList */}
                <Route path="/faculty" element={<FacultyList />} />
                 {/* Route for displaying detailed student information */
                <Route path="/faculty/:facultyId" element={<FacultyDetail />} />}
                {/* Route for taking user to a form to update information on a specific student_od */}
                <Route path="/students/:studentId/update" element={<UpdateStudentForm />} />
            </Routes>
        </Router>
    );
}


export default App;

