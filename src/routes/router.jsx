import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllProperties from "../pages/AllProperties/AllProperties";
import PrivateRoute from "./PrivateRoute";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import { getDetails } from "../api/propertyDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import UserProfilePage from "../pages/Dashboard/User/UserProfilePage";
import Wishlists from "../pages/Dashboard/User/Wishlists";
import PropertyBrought from "../pages/Dashboard/User/PropertyBrought";
import MyReviews from "../pages/Dashboard/User/MyReviews";

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
        element: (
          <PrivateRoute>
            <AllProperties></AllProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => getDetails(params.id),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myProfile",
        element: <UserProfilePage></UserProfilePage>,
      },
      {
        path: "wishList",
        element: <Wishlists></Wishlists>,
      },
      {
        path: "propertyBrought",
        element: <PropertyBrought></PropertyBrought>,
      },
      {
        path: "reviews",
        element: <MyReviews></MyReviews>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);
