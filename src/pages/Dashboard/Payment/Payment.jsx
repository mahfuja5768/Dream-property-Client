import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'Payment'} ></SectionTitle>
         <div>
           <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
           </Elements>
         </div>
           
        </div>
    );
};

export default Payment;