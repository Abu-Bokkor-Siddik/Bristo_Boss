

import { Helmet } from "react-helmet-async"
import Carosual from "./components/Carosual"
import Featured from "./components/Featured"
import PopularMenu from "./components/PopularMenu"
import SwiperOne from "./components/SwiperOne"
import { useEffect, useState } from "react"


const Home = () => {
  const [loadings,setloadings]=useState(true)

  useEffect(()=>{
    const delay =2000;
    const timeout = setTimeout(()=>{
      setloadings(false)
    },delay);
    return ()=> clearTimeout(timeout)
  },[])


  return (
    <div className={`max-w-[1500px] mx-auto ${loadings?'bg-white':''}`}>

    <Helmet>
    <title>BISTRO BOSS | Home</title>
    
    
  </Helmet>

    { loadings? <img className="mx-auto" src="https://i.ibb.co/YbRrdn7/md-logo-animation.gif" alt="" /> :
    <div>
    <Carosual></Carosual>
    <SwiperOne></SwiperOne>
    <PopularMenu></PopularMenu>
    <Featured></Featured>
    </div>
    
  }
      
    </div>
  )
}

export default Home
