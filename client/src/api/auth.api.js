import api from "./api";

const authApi = {
    register: data => api.post('/api/users/register', data),
    login: data => api.post('/api/users/login', data),
    current: data => api.post('/api/users/current', data),
};

export default authApi
