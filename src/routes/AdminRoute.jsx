/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useGetRole from "../hooks/useGetRole";
import Loading from "../shared/Loading/Loading";
const AdminRoute = ({ children }) => {
  const [userRole, isLoading] = useGetRole();
  if (isLoading) {
    return <Loading />;
  }
  if (userRole === "admin") {
    return children;
  }
  return <Navigate to="/dashboard"></Navigate>;
};

export default AdminRoute;
