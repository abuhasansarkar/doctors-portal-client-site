import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Appointment from "../../pages/Appointment/Appointment";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyAppointments from "../../pages/Dashboard/MyAppointments/MyAppointments";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardMain from "../../pages/Dashboard/DashboardLayout/DashboardMain";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import Contactus from "../../pages/Contact/Contactus";
import About from "../../pages/About/About";
import Reviews from "../../pages/Reviews/Reviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
           path: '/about',
           element: <About></About>
      },
      {
           path: '/contactus',
           element: <Contactus></Contactus>
      },
      {
           path: '/reviews',
           element: <Reviews></Reviews>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/appointment",
        element: <PrivateRoute><Appointment></Appointment></PrivateRoute>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: "/dashboard/myappointments",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "/dashboard/allusers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
    ],
  },
]);
