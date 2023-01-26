import axios, { AxiosHeaders } from 'axios';

const fakeShopApi = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});

fakeShopApi.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg"
  if (token) {
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); //JWT
  } 
  return config;
});

export default fakeShopApi;