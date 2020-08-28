import axios from "axios";
import { host } from "../local";


const api = axios.create({
    baseURL: host + '/api'
});

export default api
