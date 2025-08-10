import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivatePolicy from '../components/private_policy';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/private-policy" element={<PrivatePolicy />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
