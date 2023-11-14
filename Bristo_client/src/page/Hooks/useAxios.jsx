import axios from "axios"

 const Axioscicure = axios.create({
    baseURL:"http://localhost:3000"
})
const useAxios = () => {
  return Axioscicure;
}

export default useAxios;
