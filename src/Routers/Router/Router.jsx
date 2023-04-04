import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Appointment from "../../pages/Appointment/Appointment";

export const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               // {
               //      path: '/about',
               //      element: <About></About>
               // },
               // {
               //      path: '/contactus',
               //      element: <ContactUs></ContactUs>
               // },
               // {
               //      path: '/reviews',
               //      element: <Reviews></Reviews>
               // },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/register',
                    element: <Register></Register>
               },
               {
                    path: '/appointment',
                    element: <Appointment></Appointment>
               },
          ]
     }
])