import api from "./api";

const authApi = {
    register: data => api.post('/api/users/register', data),
};

export default authApi
