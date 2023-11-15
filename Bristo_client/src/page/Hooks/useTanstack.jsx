import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Authcontex } from "../privet/Authprovider";
import axios from "axios";

const useTanstack = () => {
    // user

    // vvi ami user akhane contex theke na ane call korar somoy dite pari  jemon akhane dilam 

  const { user } = useContext(Authcontex);

  const { data, refetch } = useQuery({
//    documention ....

    // queryKey: ['carts',user?.email],
    // queryFn: () =>
    //   fetch(`http://localhost:3000/carts?email=${user.email}`).then((res) => res.json() ),


// jonker sir .....
    // queryKey: ['carts',user?.email],
    // queryFn:async () => {
    //  const data=await axios.get(`http://localhost:3000/carts?email=${user.email}`)
    //  return data.data

    // },
// jahid vai ... crud consepchual 

    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const data = await fetch(
        `http://localhost:3000/carts?email=${user.email}`
      );
      return await data.json();
    },
  });

  return { data, refetch };
};

export default useTanstack;

// import useAxios from "./useAxios"

// queryFn: () =>
// fetch('http://localhost:3000/carts').then(
//   (res) => res.json(),
// ),
