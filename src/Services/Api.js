import axios from 'axios';

const api = axios.create({
    baseURL:'http:/192.168.1.19:3000/'
});

export default api;