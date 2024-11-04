
// ..........Yamin's Code.......................
// const TotalCartAmount = ({totalPrice}) => {
//     return (
//         <div className='flex justify-center pt-4 hidden'>
//             <div className='w-3/4'>

//             <h1 className='text-lg font-bold'>Total:</h1>
//             <p className='text-4xl my-4 font-extrabold'>$ {totalPrice}</p>
//             <button className='bg-violet-700 w-full text-white p-4 hover:bg-violet-600'>Buy Now</button>
//             </div>
//         </div>
//     );
// };

// export default TotalCartAmount;
// ..............................................


import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const TotalCartAmount = ({paymentHandler}) => {

    const [cart] = useCart();
    // console.log(cart);
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.coursePrice), 0)
    // console.log(totalPrice);

    return (
        <>
            <div className="fixed top-48 ">
            <div className="p-3 text-xl">
                <p>Total Price : ${" " + totalPrice}</p>
            </div>
            {cart.length?
                <Link to={"/payment"}>
                    <button onClick={paymentHandler} className="border w-52 mx-5 py-2 text-white bg-[#7ea58c] hover:text-black hover:bg-yellow-400 ">pay</button>
                </Link>
                : <button onClick={paymentHandler}  disabled className="border w-52 mx-5 py-2 ">pay</button>
            }
            </div>
        </>

    );
};

export default TotalCartAmount;