import axios from 'axios';
//andoid http://10.0.2.2:3000
//andoid http://10.0.3.2:3000
const api = axios.create({
    baseURL: 'http://192.168.2.77:3000/'
});

export default api;