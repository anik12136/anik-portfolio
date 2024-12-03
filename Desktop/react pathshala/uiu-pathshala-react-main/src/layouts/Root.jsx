import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Root = () => {
    const user = true;
    return (
        <div>

            {
                user ?
                    <div>
                        < Navbar ></Navbar >
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div >
                    :
                    <div>
                        <Outlet></Outlet>
                    </div>
            }
        </div>


    );
};

export default Root;