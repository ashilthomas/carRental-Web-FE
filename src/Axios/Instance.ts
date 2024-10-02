import axios from "axios";

const instance = axios.create({
    // baseURL : "http://localhost:3000/api/v1/",
    baseURL : "http://localhost:3002/api/v1/",
    
})

export default instance;