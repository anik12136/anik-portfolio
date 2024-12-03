import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import LoginPage from "../Auth/LoginPage";
import SignupPage from "../Auth/SignupPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // element:<LoginPage></LoginPage> ,
    children: [
      {
        path: "/home",
        element:<Home></Home>
        
      },
      {
        path: "/",
        element:<LoginPage></LoginPage>
        
      },
      {
        path: "/signUp",
        element:<SignupPage></SignupPage>
        
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <Root></Root>,
  //   // element:<LoginPage></LoginPage> ,
  //   children: [
  //     {
  //       path: "/",
  //       element:<LoginPage></LoginPage>
        
  //     },
  //     {
  //       path: "/signUp",
  //       element:<SignupPage></SignupPage>
        
  //     },
  //   ],
  // },
]);

export default router;