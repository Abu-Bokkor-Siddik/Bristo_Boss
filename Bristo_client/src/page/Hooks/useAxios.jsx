import axios from "axios"
import { useContext } from "react";
import {  useNavigate } from 'react-router-dom';
import { Authcontex } from "../privet/Authprovider";

 const Axioscicure = axios.create({
    baseURL:"http://localhost:3000"
})

const useAxios = () => {
  const navigate = useNavigate()
  const {logout}=useContext(Authcontex)
  // this is evry scrute calll api 
  Axioscicure.interceptors.request.use(function(config){
   const token = localStorage.getItem('access-token')
   config.headers.authorization=`Bearer ${token}`
    return config;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  // instance 401 403
  Axioscicure.interceptors.response.use(function(response){
    return response;
  },(error)=>{
    const status = error.response.status;
    // logout the user ....
    if(status===401||status===403){
      logout()
     .then(res => console.log(res))
     .catch(err => console.log(err))

   
        navigate('/login')
    }
    return Promise.reject(error);
  })
  return Axioscicure;
}

export default useAxios;
