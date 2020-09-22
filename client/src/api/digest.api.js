import api from "./api";

const digestApi = {
    getDigests: params => api.get('/api/digests', {
        params
    }),
    get: params => api.get('/digest', {
        params
    }),
    createDigest: data => api.post('/digest/create', data),
    update: data => api.put('/edit', data),
    delete: data => api.delete('/delete', data)
};

export default digestApi
