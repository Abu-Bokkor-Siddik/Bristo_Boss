import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import Manu from "./Manu";
import Order from "./Order";
import Login from "./Login";
import SignIn from "./signin/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Manu></Manu>,
      },
      {
        path: "/order/:category",
       
        element: <Order></Order>,
      },
      {
        path:'/login',
        element:<Login></Login>
     
      },
      {
        path:'/regi',
        element:<SignIn></SignIn>
     
      },
      
    ],
    
    
  },


]);
export default router;
