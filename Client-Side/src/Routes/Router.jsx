import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Orders from "../Order/Orders";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserDashboardLayout from "../Layout/UserDashboardLayout";
import Card from "../Pages/UserDashboard/Card";
import AllUsers from "../Pages/UserDashboard/Admin/AllUsers";
import AddItems from "../Pages/UserDashboard/Admin/AddItems";
import ManageItems from "../Pages/UserDashboard/Admin/ManageItems";
import UpdateItems from "../Pages/UserDashboard/Admin/UpdateItems";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/shop",
          element:<Orders></Orders>
        },{
          path:"/login",
          element:<Login></Login>
        },{
          path:"/register",
          element:<Register></Register>
        }
      ]
    },{
      path:"/dashboard",
      element:<UserDashboardLayout></UserDashboardLayout>,
      children:[
        {
          path:"my-card",
          element:<Card></Card>
        },{
          path:"all-users",
          element:<AllUsers></AllUsers>
        },{
          path:"add-item",
          element:<AddItems></AddItems>
        },{
          path:"manage-item",
          element:<ManageItems></ManageItems>
        },{
          path:"update-items/:id",
          element:<UpdateItems></UpdateItems>,
          loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/menus/${params.id}`)
        }
      ]
    }
    
  ]);
  