// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { Authcontex } from "../privet/Authprovider";

import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { Authcontex } from "../privet/Authprovider"
import useAxios from "./useAxios"

const useAdmin = () => {
    const{user}=useContext(Authcontex)
    const Axioscicure =useAxios()
 const {data:isAdmin}=useQuery({
    queryKey: ["isAdmin", user?.email],

    queryFn: async () => {
        const res = await Axioscicure.get(`/users/admin/${user.email}`)
        console.log(res.data)
        return res?.data?.admin;
      },


 })
 return [isAdmin]
}

export default useAdmin
