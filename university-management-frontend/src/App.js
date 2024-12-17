import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentEnrollment from './pages/StudentEnrollment';
import StudentList from './pages/StudentList';
import StudentDetail from './pages/StudentDetail';
import FacultyList from './pages/FacultyList';
import FacultyDetail from './pages/FacultyDetail';
import UpdateStudentForm from './pages/UpdateStudentForm';
import Homepage from './pages/Homepage';
import UpdateFacultyForm from './pages/UpdateFacultyForm';
import AddFacultyForm from './pages/AddFacultyForm';
import Classroom from './pages/Classroom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Homepage" element={<Homepage />} />
                {/* Route for enrolling a student */}
                <Route path="/enroll" element={<StudentEnrollment />} />
                
                {/* Route for displaying the student list */}
                <Route path="/students" element={<StudentList />} />
                {/* Route for displaying detailed student information */}
                <Route path="/students/:studentId" element={<StudentDetail />} />

                {/* Route for displaying FacultyList */}
                <Route path="/faculty" element={<FacultyList />} />
                {/* Route for adding a new faculty member */}
                <Route path="/faculty/add" element={<AddFacultyForm />} />
                {/* Route for displaying detailed faculty information */}
                <Route path="/faculty/:facultyId" element={<FacultyDetail />} />

                {/* Route for taking user to a form to update information on a specific student */}
                <Route path="/students/:studentId/update" element={<UpdateStudentForm />} />
                {/* Route for taking user to a form to update information on a specific faculty member */}
                <Route path="/faculty/:facultyId/update" element={<UpdateFacultyForm />} />
                 {/* Route for viewing classrooms */}
                 <Route path="/classroom" element={<Classroom />} />
            </Routes>
        </Router>
    );
}

export default App;
