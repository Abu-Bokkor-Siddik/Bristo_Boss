
import { Link } from "react-router-dom"
import Cover from "./Cover"
import ManuCard from "./ManuCard"


const MenuCategory = ({items,coverimg,title}) => {
   
  return (
    
    <div> 
     {/** akhane sir dynamic babe style korese jodi title and img dei tobe cover show korbe na hole korbe na ami cover components use onek korte hoto tai sir shaire babe korese .... okk good pactices  */}
    { title &&<Cover img={coverimg} title={`OUR MENU` && `${title}`}></Cover>}
    
    <div className="grid grid-cols-2 gap-10 my-7">
    {
        items.map(item=><ManuCard key={item._id} item={item}></ManuCard>)
    }</div>
    { title&&<Link className="btn btn-neutral text-center flex justify-center w-40 mx-auto" to={`/order`}> <button className="">Order Now</button></Link>}
    </div>
    
  )
}

export default MenuCategory

// { title&&<Link className="btn btn-neutral text-center flex justify-center w-40 mx-auto" to={`/order/${title}`}> <button className="">Order Now</button></Link>}