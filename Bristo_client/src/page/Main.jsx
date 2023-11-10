import { Outlet } from "react-router-dom"
import Navbar from "../sherd/Navbar"
import Footer from "../sherd/Footer"


const Main = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
    <Navbar></Navbar>
      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
