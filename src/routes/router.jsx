import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllProperties from "../pages/AllProperties/AllProperties";
import PrivateRoute from "./PrivateRoute";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import { getDetails } from "../api/propertyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allProperties",
        element: <PrivateRoute><AllProperties></AllProperties></PrivateRoute>
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
        loader: ({ params }) => getDetails(params.id),
      },
    ],
},
{
    path: "/login",
    element: <Login></Login>
  },
{
    path: "/signUp",
    element: <SignUp></SignUp>
  },
]);
