

import { Helmet } from "react-helmet-async"
import Carosual from "./components/Carosual"
import Featured from "./components/Featured"
import PopularMenu from "./components/PopularMenu"
import SwiperOne from "./components/SwiperOne"


const Home = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
    <Helmet>
    <title>BISTRO BOSS | Home</title>
    
  </Helmet>
      <Carosual></Carosual>
      <SwiperOne></SwiperOne>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      
    </div>
  )
}

export default Home
