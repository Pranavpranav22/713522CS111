import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnalyticsCard from '../components/AnalyticsCard';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <Header />
            <main>
                <h1>Social Media Analytics Dashboard</h1>
                <div className="analytics-cards">
                    <AnalyticsCard title="User Engagement" value="75%" />
                    <AnalyticsCard title="New Followers" value="120" />
                    <AnalyticsCard title="Post Reach" value="1,500" />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;