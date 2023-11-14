import { useContext } from "react";
import { Authcontex } from "../privet/Authprovider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import useAxios from "../Hooks/useAxios";
import useTanstack from "../Hooks/useTanstack";

// const axios = require('axios');
const FoodCard = ({item}) => {
  const{user}=useContext(Authcontex)
  const navigate = useNavigate()
  const location = useLocation()
  const Axioscicure =useAxios()
  const{refetch}=useTanstack()

    const{name,image,price,recipe,_id,category}=item
   
    const handelFood =(food)=>{
      if(user&&user.email){
        const cartItem ={
          name,
          menuId :_id,
          email:user.email,
          image,
          price,
          category}
          // ababeo korte pari .. kintu use constome hook use korbo...
          
          // axios.post('http://localhost:3000/carts',cartItem)
          // .then(res => {
          //   console.log(res.data)
          //   if(res.data.insertedId){
          //     alert('added successfully')
          //   }
          // })







          Axioscicure.post('/carts',cartItem)
          .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
              alert('added successfully')
              refetch()
              
            }
          })
          console.log(cartItem,'here')
      }else{
        Swal.fire({
          title: "Your are not login  ",
          text: "please login the page to add the card",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login',{state:{from:location}})
          }
        });
      }
      console.log(food)
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
      
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-5 mr-5 px-4">${price}</p>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={()=> handelFood(item)} className="btn btn-primary">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
