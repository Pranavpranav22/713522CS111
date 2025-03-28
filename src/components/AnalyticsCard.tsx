import React from 'react';

interface AnalyticsCardProps {
    title: string;
    value: number;
    description: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value, description }) => {
    return (
        <div className="analytics-card">
            <h3>{title}</h3>
            <p>{value}</p>
            <small>{description}</small>
        </div>
    );
};

export default AnalyticsCard;