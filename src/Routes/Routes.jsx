import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/UpdateProfile/Profile";
import HouseDetails from "../Pages/HouseDetails/HouseDetails";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";


const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
           
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/house/:id',
                element:<PrivateRoute><HouseDetails></HouseDetails></PrivateRoute>,
                loader: ()=> fetch('../../public/estate.json')
            },
        ]
    }
])
export default routes