import axios from "axios";

const instance = axios.create({
 
    baseURL : "http://localhost:3003/api/v1/",
    
})

export default instance;