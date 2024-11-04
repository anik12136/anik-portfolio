// import { useContext} from "react";
// import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import CartItems from "./CartItems/CartItems";

import TotalCartAmount from "./TotalCartAmount/TotalCartAmount";
import useCart from "../../Hooks/useCart";
import { useEffect, useState } from "react";

const Cart = () => {

  const [cartData, setCartData] = useState([]);
  const [cart] = useCart();

  useEffect(() => {
    setCartData(cart);  // This will cause re-rendering on every update!
  },[cart]);
  
  console.log(cartData);

const paymentHandler = () => {setCartData([])}
  // const paymentHandler = () => {
  //   cart = []};
  // const [cartData, setCartData] = useState([]);
  // const user = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://ul-earning-server.vercel.app/carts/${user?.email}`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       setCartData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [user]);
  // console.log(cartData);

  // .....yamin's code.....................................
  // let prices=[];
  //   for (let data of cartData){
  //     let priceValue= parseInt(data.coursePrice);
  //     prices.push(priceValue);

  //   }


  //   let totalPrice =0;
  //   for(let price of prices){
  //      console.log("Price", price)
  //     totalPrice = totalPrice + price;
  //   }
  // console.log("Total Price",totalPrice);
  // ......................................................
  return (
    <div className="flex justify-center">
      {/*   <p>{price}</p> */}
      <div className="w-3/4 my-8">
        <h1 className="text-5xl font-bold mb-5">Cart Items</h1>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3 ">
            {cart?.map((cartItem) => (
              <CartItems cartItem={cartItem} key={cartItem._id}></CartItems>
            ))}
          </div>

          <div className="border border-red-50">
            {/* <TotalCartAmount totalPrice={totalPrice} /> */}
            <TotalCartAmount
            paymentHandler={paymentHandler}
            ></TotalCartAmount>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
