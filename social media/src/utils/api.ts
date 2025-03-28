import axios from 'axios';

const API_BASE_URL = 'https://api.socialmediaanalytics.com';

export const fetchUserEngagement = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/engagement/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user engagement data:', error);
        throw error;
    }
};

export const fetchPostAnalytics = async (postId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/post/${postId}/analytics`);
        return response.data;
    } catch (error) {
        console.error('Error fetching post analytics data:', error);
        throw error;
    }
};

export const fetchOverallAnalytics = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/analytics/overall`);
        return response.data;
    } catch (error) {
        console.error('Error fetching overall analytics data:', error);
        throw error;
    }
};