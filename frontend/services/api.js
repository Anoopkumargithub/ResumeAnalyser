import axios from 'axios';

const api = axios.create({
    baseURL: 'https://resumeanalyserdev02.onrender.com/api',
});

export default api;
