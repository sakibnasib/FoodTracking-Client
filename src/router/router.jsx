import { createBrowserRouter } from "react-router";
import RootLayOut from "../layout/RootLayout";
import Home from "../Pages/Home/Home";
import AllFood from "../Pages/AllFood/AllFood";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoute from "../Provider/PrivateRouter";
import MyAddFood from "../Pages/MyAddFood/MyAddFood";
import axios from "axios";
import FoodDetails from "../Pages/Deatils/FoodDeatils";


export const router = createBrowserRouter([
{path:'/',Component:RootLayOut,
    children:[
        {index:true, Component:Home},
        {path:'allfood',Component:AllFood},
        {path:'about',Component:About},
        {path:'contactUs',Component:ContactUs},
        {path:'login',Component:Login},
        {path:'register',Component:Register},
        {path:'addfood',Component:AddFood},
        {path:'myaddfood',element:<PrivateRoute>
            <MyAddFood/>
        </PrivateRoute>},
         {
      path:'/food/:id',
      loader:  ({params})=>axios(`http://localhost:3000/food/${params.id}`),
      element:<FoodDetails></FoodDetails>
    },
    ]
}
])