import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = "Auth token from Instance";

//Write your own interceptors here, 
//The default interceptors will not be used for a new instance

//instance.interceptors.request ...
//instance.interceptors.response ...

export default instance;