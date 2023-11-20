import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import useTanstack from "../Hooks/useTanstack";
import { Authcontex } from "../privet/Authprovider";

const CheckoutForm = () => {
  // error handeling 
  const [error,seterror]=useState('')
  const [secret,setsecret]=useState('')
  // transection  id 
  const [transection,settransection]=useState('')
  // user 
  const {user}=useContext(Authcontex)

  // middleware builting 
  const stripe = useStripe();
  const elements = useElements();
  const Axioscicure=useAxios()
  const{data,refetch}=useTanstack()
  console.log(data,'data form tanstack')
  const totalprice = data?.reduce((total,item)=>total+item?.price,0)
  console.log(totalprice)

  useEffect(()=>{
   if(totalprice>0){
    Axioscicure.post('/create-payment-intent',{price:totalprice})
    .then(res => {
     console.log(res?.data.clientSecret)
     setsecret(res?.data.clientSecret)
    })
   }
  },[Axioscicure,totalprice])
  // form 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // payment method banachi..
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    // cheack method here error or success
    if(error){
      console.log('error ',error)
      seterror(error.message)
    }else{
      console.log('payment method',paymentMethod)
      seterror('')
    }
    //  conform card payment here 
    const {paymentIntent,error:confirmCard}=await stripe.confirmCardPayment(secret,{
      payment_method: {
        card: card,
        billing_details: {
          email:user?.email||'anonymous',
          name: user?.displayName ||'anonymous',
        },
      },
    })
// end conform  error or success
if(confirmCard){
  console.log('error indence ',confirmCard)
}else{
  console.log(paymentIntent,'payment indexnt ')
  if(paymentIntent.status==='succeeded'){
    console.log('payment transection id ',paymentIntent?.id)
    settransection(paymentIntent.id)
    // now save the payment data to database ...
    const payment ={
      email:user?.email,
      transectionId :paymentIntent.id,
      price:totalprice,
      date: new Date(),
      cardId:data?.map(item=>item._id),
      menuIds:data?.map(item=>item.menuId),
      status:'pending'
    }

    const res= await Axioscicure.post('/payments',payment)
    console.log(res.data,'here is response')
  }
}

  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || !secret}>
        Pay
      </button>
      <p className="text-red-700">{error}</p>
      {transection&&<p>Transaction id : {transection}</p>}
    </form>
  );
};

export default CheckoutForm;
