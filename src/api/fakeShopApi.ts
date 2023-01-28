import axios, { AxiosHeaders } from "axios";

//URL based created to use for all API calls
const fakeShopApi = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
});

fakeShopApi.interceptors.request.use((config)=>{
    //Access localStorage token 
    const token = localStorage.getItem('token');
    if (token){
        //Establish the token in the header
        (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); //JWT
    }
    return config;
});

export default fakeShopApi;