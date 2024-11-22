import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentEnrollment from './pages/StudentEnrollment';

function App() {
    return (
        <Router>
            <Routes>
                {/* Use `element` to render the component */}
                <Route path="/enroll" element={<StudentEnrollment />} />
            </Routes>
        </Router>
    );
}

export default App;

