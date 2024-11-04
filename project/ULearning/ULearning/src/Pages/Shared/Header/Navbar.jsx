import { Link } from "react-router-dom";
// Using icon from hero icon
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import Themes from "../../../Components/Themes/Themes";

// Css file for this page
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import UserProfile from "../../../Components/UserProfile/UserProfile";
import useCart from "../../../Hooks/useCart";

// The component starts from here
const Navbar = () => {
  const user = useContext(AuthContext);
  // console.log(user)
  const [cart] = useCart();
  // console.log (cart.length);
  return (
    <div className="sticky top-0  bg-[#7ea58c] bg-opacity-75 dark:bg-black dark:bg-opacity-50 z-50 text-white ">
      <div className="flex justify-between py-5 mx-8 items-center">
        {/* Child flex-1 */}
        <div className="flex gap-5 items-center ">
          <Link className="text-4xl font-bold" to="/">
            <h2 className="dark:text-white cursor-pointer hover:text-yellow-400"><span className="text-yellow-400   hover:text-white ">U</span>Learning</h2>
          </Link>
          {/* <button className="cursor-pointer dark:text-white">Categories</button> */}

          {/* to do */}
          <label className="search-field relative hidden">
            <input
              className="w-80 border-2 border-black rounded-full h-12 ps-10 focus:outline-none"
              type="text"
              placeholder="Search your favorite courses"
            />
            <MagnifyingGlassIcon className="w-6 h-6 absolute bottom-1/4 left-2 cursor-pointer" />
          </label>
        </div>

        {/* Child flex -2 */}

        <div className="flex gap-5 items-center">
          <Link to="/community" className="dark:text-white hover:text-yellow-400">
            Community
          </Link>
          
          {
            user ? 
            <Link to="/courseRequest" className="dark:text-white hover:text-yellow-400">
            Course Request
          </Link>
          :
          <Link to="/login" className="dark:text-white hover:text-yellow-400">
            Course Request
          </Link>
          }

          {
            user ? <Link to="instructor" className="dark:text-white hover:text-yellow-400">
              Instructor
            </Link>
              :
              <Link to="login" className="dark:text-white hover:text-yellow-400">
                Instructor
              </Link>

          }
          <Link to="myLearning" className="dark:text-white hover:text-yellow-400">
            My Learning
          </Link>

          <Themes></Themes>
          <LanguageIcon className="w-6 h-6 cursor-pointer dark:text-white hidden"></LanguageIcon>



          {/* cart and bookmark */}

          <Link to={"/cart"} className="flex hover:text-yellow-400">
            <p className="text-yellow-400  ">{cart?.length || 0}</p>   
            <ShoppingCartIcon className=" w-6 h-6 cursor-pointer dark:text-white"></ShoppingCartIcon>
          </Link>
          <Link to="/bookMarks">
            <BookmarkIcon className="w-6 hover:text-yellow-400 h-6 cursor-pointer dark:text-white"></BookmarkIcon>
          </Link>

          {/* <Link to={"underConstruction"} className="flex hover:text-yellow-400">
            <p className="text-yellow-400  ">0</p>
            <ShoppingCartIcon className=" w-6 h-6 cursor-pointer dark:text-white"></ShoppingCartIcon>
          </Link>
          <Link to="underConstruction">
            <BookmarkIcon className="w-6 h-6 cursor-pointer dark:text-white hover:text-yellow-400"></BookmarkIcon>
          </Link> */}




          <BellIcon className="w-6 h-6 cursor-pointer dark:text-white hidden"></BellIcon>

          {user ? (
            <>
              <button>
                <UserProfile></UserProfile>
              </button>
            </>
          ) : (
            <>
              <Link to="login">
                <button className="border-2 rounded-md  border-yellow-400 dark:border-white dark:text-white w-auto h-auto px-6 py-3 font-bold hover:text-yellow-500 dark:hover:text-black hover:bg-black dark:hover:bg-white ease-in duration-100">
                  Log In
                </button>

              </Link>
            </>
          )}
          {/* <Link to="login">
            <button className="border-2 border-black dark:border-white dark:text-white w-auto h-auto px-6 py-3 font-bold hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white ease-in duration-100">
              Log In
            </button>
          </Link> */}
        </div>

        {/* <Link to="page1">
          <h2>Page 1</h2>
        </Link>
        <Link to="page2">
          <h2>Page 2</h2>
        </Link> */}

        {/* <Link to="signUp"><h2>Page 2</h2></Link> */}
      </div>
    </div>
  );
};

export default Navbar;
