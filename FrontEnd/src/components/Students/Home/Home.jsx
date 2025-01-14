import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AttendanceCard from '../../Students/Home/Elements/AttendanceCard';
import FeatureCard from '../../Students/Home/Elements/CardsMobile';
import NewsFetcher from '../../Students/Home/Elements/NewsFetcher';
import './Home.css';
const API_KEY = "b5726e1f423d5ff266c9ee38db4e3a11";
console.log(API_KEY)

const Home = () => {
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
    const navigate = useNavigate();

    const handleCardClick = (title) => {
        navigate(`/${title.toLowerCase()}`);
    };

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            setSidebarOpen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="app-container">
                    <div className="attendance-container">
                        <h1 className="NameText">Hello Shiva!</h1>
                        <h2 className="texts">Attendance</h2>
                        <AttendanceCard title="Student Attendance" percentage={75} />
                    </div>
                    <div className="news-container">
                        <h2 className="texts">TechNews</h2>
                        <div className="card bg-light mb-3 justify-content-center">
                            <NewsFetcher apiKey={API_KEY} />
                        </div>
                    </div>
                    <div className="feature-container">
                        <div className="feature-grid">
                            {['Profile', 'Attendance', 'Result', 'Events', 'Progress', 'CGPA', 'Fees'].map((title, index) => (
                                <FeatureCard
                                    key={index}
                                    title={title}
                                    icon={`/${title.toLowerCase()}.png`}
                                    onClick={() => handleCardClick(title)}
                                />
                            ))}
                        </div>
                    </div>
        </div>
    );
};

export default Home;
