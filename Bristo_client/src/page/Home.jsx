
import Footer from "../sherd/Footer"
import Carosual from "./components/Carosual"
import Featured from "./components/Featured"
import PopularMenu from "./components/PopularMenu"
import SwiperOne from "./components/SwiperOne"


const Home = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
     
      <Carosual></Carosual>
      <SwiperOne></SwiperOne>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Footer></Footer>
    </div>
  )
}

export default Home
