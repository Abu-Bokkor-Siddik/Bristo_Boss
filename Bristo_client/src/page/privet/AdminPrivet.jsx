import { useContext } from "react"
import useAdmin from "../Hooks/useAdmin"
import { Authcontex } from "./Authprovider"
import { Navigate, useLocation } from "react-router-dom"


const AdminPrivet = ({children}) => {
    const [isAdmin,isPending]=useAdmin()
    const{user,loading}=useContext(Authcontex)
    const location = useLocation()
    console.log('location',location)
    if(loading || isPending){
        return <img src="https://i.ibb.co/qmMJFf4/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" />
    }
    
    if(user && isAdmin){
        return children
    }
  return<Navigate state={{from:location}} replace to={`/login`}></Navigate>
  
}

export default AdminPrivet
