import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://ul-earning-server.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;