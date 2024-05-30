import axios from "axios";

const axiosInstance =axios.create({
    // baseURL:"http://127.0.0.1:5001/e-clone-njd/us-central1/api",

    baseURL:"https://amazone-api-deploye.onrender.com/"
    
})

export {axiosInstance}
