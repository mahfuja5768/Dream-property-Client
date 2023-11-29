/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useGetRole from "../hooks/useGetRole";
import Loading from "../shared/Loading/Loading";
const AdminRoute = ({ children }) => {
  const { user,loading } = useAuth();
  const [userRole] = useGetRole();
  if (loading) {
    return (
      <Loading/>
    );
  }
  if (userRole === "admin") {
    return children;
  }
  return <Navigate to="/dashboard"></Navigate>;
};

export default AdminRoute;
