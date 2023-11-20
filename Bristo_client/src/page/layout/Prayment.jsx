import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm ';
// todo stripe promise  
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
const Prayment = () => {
  // builting method here
  return (
    <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
  )
}

export default Prayment