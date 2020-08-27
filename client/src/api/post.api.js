import api from "./api";

const postApi = {
    getPosts: params => api.get('/posts', {
        params
    }),
    get: params => api.get('post', {
        params
    }),
    createPost: data => api.post('/posts/create', data),
    update: data => api.put('/edit', data),
    delete: data => api.delete('/delete', data)
};

export default postApi
