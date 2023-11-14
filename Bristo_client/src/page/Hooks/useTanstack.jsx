import {  useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { Authcontex } from "../privet/Authprovider"
import axios from "axios"



const useTanstack = () => {
    const {user}=useContext(Authcontex)
   
    const {data,refetch } = useQuery({
  
        // queryKey: ['carts',user?.email],
        // queryFn: () =>
        //   fetch(`http://localhost:3000/carts?email=${user.email}`).then(
        //     (res) => res.json(),
        //   ),



        queryKey: ['carts',user?.email],
        queryFn:async () => {
         const data=await axios.get(`http://localhost:3000/carts?email=${user.email}`)
         return data.data
        
        },
        
        
      })


    
   return {data,refetch}
  
}

export default useTanstack







// import useAxios from "./useAxios"

// queryFn: () =>
// fetch('http://localhost:3000/carts').then(
//   (res) => res.json(),
// ),