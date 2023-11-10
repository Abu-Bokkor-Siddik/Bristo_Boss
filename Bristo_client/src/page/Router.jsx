import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import Manu from "./Manu";
import Order from "./Order";

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
        // path: "/order/:category",
        path: "/order",
        element: <Order></Order>,
      },
    ],
  },
]);
export default router;
