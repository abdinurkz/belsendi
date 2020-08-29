import api from "./api";

const digestApi = {
    getDigests: params => api.get('/digests', {
        params
    }),
    get: params => api.get('digest', {
        params
    }),
    createDigest: data => api.post('/digests/create', data),
    update: data => api.put('/edit', data),
    delete: data => api.delete('/delete', data)
};

export default digestApi
