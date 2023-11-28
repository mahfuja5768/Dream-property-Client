/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useGetRole from "../hooks/useGetRole";
const AdminRoute = ({ children }) => {
  const { user,loading } = useAuth();
  const [userRole] = useGetRole();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-infinity loading-lg "></span>
      </div>
    );
  }
  if (userRole === "admin") {
    return children;
  }
  return <Navigate to="/dashboard"></Navigate>;
};

export default AdminRoute;
