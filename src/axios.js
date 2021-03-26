import axios from 'axios';


// not used because of different services
const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

export default instance;