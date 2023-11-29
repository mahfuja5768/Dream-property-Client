import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllProperties from "../pages/AllProperties/AllProperties";
import PrivateRoute from "./PrivateRoute";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import { getDetails, getOfferPropertyPrice } from "../api/propertyDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import UserProfilePage from "../pages/Dashboard/User/UserProfilePage";
import Wishlists from "../pages/Dashboard/User/Wishlists";
import PropertyBrought from "../pages/Dashboard/User/PropertyBrought";
import MyReviews from "../pages/Dashboard/User/MyReviews";
import AddedProperties from "../pages/Dashboard/Agent/AddedProperties";
import AgentRoute from "./AgentRoute";
import SoldProperties from "../pages/Dashboard/Agent/SoldProperties";
import RequestedProperties from "../pages/Dashboard/Agent/RequestedProperties";
import AdminRoute from "./AdminRoute";
import ManageProperties from "../pages/Dashboard/Admin/ManageProperties";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageReviews from "./../pages/Dashboard/Admin/ManageReviews";
import Payment from "../pages/Dashboard/Payment/Payment";
import MakeOffer from "../pages/Dashboard/User/MakeOffer";
import AddNewProperty from "../pages/Dashboard/Agent/AddNewProperty";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UpdateProperty from "../pages/Dashboard/Agent/UpdateProperty";
import { updateProperty } from "../api/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
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
      {
        path: "make-offer/:id",
        element: <MakeOffer></MakeOffer>,
        loader: ({ params }) => getDetails(params.id),
      },
      {
        path: "payment/:id",
        loader: ({ params }) => getOfferPropertyPrice(params.id),
        element: <Payment></Payment>,
      },
      {
        path: "addedProperties",
        element: (
          <AgentRoute>
            <AddedProperties></AddedProperties>
          </AgentRoute>
        ),
      },
      {
        path: "updateProperty/:id",
        element: (
          <AgentRoute>
            <UpdateProperty></UpdateProperty>
          </AgentRoute>
        ),
        loader: ({ params }) => updateProperty(params.id),
      },
      {
        path: "addNewProperty",
        element: (
          <AgentRoute>
            <AddNewProperty></AddNewProperty>
          </AgentRoute>
        ),
      },
      {
        path: "soldProperties",
        element: (
          <AgentRoute>
            <SoldProperties></SoldProperties>
          </AgentRoute>
        ),
      },
      {
        path: "requestedProperties",
        element: (
          <AgentRoute>
            <RequestedProperties></RequestedProperties>
          </AgentRoute>
        ),
      },
      {
        path: "manageProperties",
        element: (
          <AdminRoute>
            <ManageProperties></ManageProperties>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageReviews",
        element: (
          <AdminRoute>
            <ManageReviews></ManageReviews>
          </AdminRoute>
        ),
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
