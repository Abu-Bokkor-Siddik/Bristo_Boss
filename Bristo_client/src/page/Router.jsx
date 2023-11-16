import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import Manu from "./Manu";
import Order from "./Order";
import Login from "./Login";
import SignIn from "./signin/SignIn";
import Contact from "./Contact";
import Privet from "./privet/Privet";
import Dashboard from "./layout/Dashboard";
import Card from "./layout/Card";
import Allusers from "./layout/Allusers";

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
      {
        path:'/contact',
        element:<Privet><Contact></Contact></Privet>
     
      },
      
    ]
    
    
    
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'card',
        element:<Card></Card>
      },
      {
        path:'allusers',
        element:<Allusers></Allusers>
      },
    ]
  }


]);
export default router;
