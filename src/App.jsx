import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Analyze from './pages/Analyze';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import Leaderboard from './pages/Leaderboard';

function App() {
    return (
        <Router>
            <div className="min-h-screen font-sans text-gray-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFE4E6] via-[#F3E8FF] to-[#FFFFFF] bg-fixed bg-cover">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/analyze" element={<Analyze />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                </Routes>

                <footer className="py-8 text-center text-gray-400 text-sm">
                    <div className="container border-t border-gray-200 pt-8">
                        &copy; 2024 Outfit Power Score. All rights reserved.
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
