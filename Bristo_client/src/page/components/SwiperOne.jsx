import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slice1 from '../../assets/home/slide1.jpg'
import slice2 from '../../assets/home/slide2.jpg'
import slice3 from '../../assets/home/slide3.jpg'
import slice4 from '../../assets/home/slide4.jpg'
import slice5 from '../../assets/home/slide5.jpg'

import { Pagination } from 'swiper/modules';
import SectionTitle from './SectionTitle';

const SwiperOne = () => {
  return (
   <section>
   <SectionTitle heading={'---From 11:00am to 10:00pm---'} subheading={'ORDER ONLINE'}></SectionTitle>
   <Swiper
   slidesPerView={4}
   spaceBetween={-34}
   centeredSlides={true}
   pagination={{
     clickable: true,
   }}
   modules={[Pagination]}
   className="mySwiper my-9"
 >
   <SwiperSlide><img src={slice1} alt="" /> <p className=' -mt-10 pb-5  pl-20 text-3xl uppercase text-white '>Salads</p></SwiperSlide>
   <SwiperSlide><img src={slice2} alt="" /><p className=' -mt-10 pb-5 pl-20 text-3xl uppercase text-white '>Soups</p></SwiperSlide>
   <SwiperSlide><img src={slice3} alt="" /><p className=' -mt-10 pb-5 pl-20 text-3xl uppercase text-white '>pizzas</p></SwiperSlide>
   <SwiperSlide><img src={slice4} alt="" /><p className=' -mt-10 pb-5 pl-20 text-3xl uppercase text-white '>desserts</p></SwiperSlide>
   <SwiperSlide><img src={slice5} alt="" /><p className=' -mt-10 pb-5 pl-20 text-3xl uppercase text-white '>Salads</p></SwiperSlide>
   
 </Swiper>
   
   </section>
  )
}

export default SwiperOne
