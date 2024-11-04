
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../Hooks/useCart";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
// console.log(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl"> Payment functionality ...</h2>
            
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;