import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../sherd/Navbar"
import Footer from "../sherd/Footer"


const Main = () => {
  const loacations =useLocation()
  console.log(loacations)
  const noHeaders = loacations.pathname.includes('login')
  return (
    <div className="max-w-[1500px] mx-auto">
   {noHeaders || <Navbar></Navbar>}
      
      <Outlet></Outlet>
     {noHeaders || <Footer></Footer>}
    </div>
  )
}

export default Main
