import { useEffect, useState } from "react"
import SectionTitle from "./SectionTitle"
import ManuCard from "../../sherd/ManuCard"


const PopularMenu = () => {
    const [Manu,setManu]=useState([])
    useEffect(()=>{
        fetch('./manu.json')

        
        .then(res => res.json())
        .then(data => {
            const populardata = data.filter(item => item.category ==='popular');
        setManu(populardata)
        })
    },[])
    console.log(Manu)
  return (
    <section>
    <SectionTitle  heading={'---Check it out---'} subheading={'FROM OUR MENU'}></SectionTitle>
    <div className="grid grid-cols-2 gap-10 my-7">
    {
        Manu.map(item=><ManuCard key={item._id} item={item}></ManuCard>)
    }</div>
    </section>
  )
}

export default PopularMenu