import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../../shared/Container/Container";
import axiosSecure from "../../../api";
import Empty from "../../../components/Empty/Empty";
import Swal from "sweetalert2";
import CustomButton from "../../../shared/CustomButton/customButton";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const { data: users, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    try {
      const user = await axiosSecure.delete(`/users/${id}`);
      Swal.fire({
        title: "Success!",
        text: "User deleted successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  const handleAdmin = async (id) => {
    try {
      await axiosSecure.patch(`/users/make-admin/${id}`);
      Swal.fire({
        title: "Success!",
        text: "Made admin successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  const handleAgent = async (id) => {
    try {
      await axiosSecure.put(`/users/make-agent/${id}`);
      Swal.fire({
        title: "Success!",
        text: "User made agent successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  const handleFraud = async (id) => {
    try {
      await axiosSecure.patch(`/users/mark-fraud/${id}`);
      Swal.fire({
        title: "Success!",
        text: "User marked as fraud successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Dream-Property | Manage Users</title>
      </Helmet>
      <SectionTitle heading={"Manage Users"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table text-lg">
          {/* head */}
          <thead>
            <tr className="text-lg  text-primary  border-y-4 border-[#276597] bg-secondary">
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th>Make Agent</th>
              <th>Make as Fraud</th>
              <th>Delete User</th>
            </tr>
          </thead>
          {users?.length > 0 ? (
            <tbody>
              {users?.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <th>{item.name}</th>
                  <td>{item.email}</td>
                  <td>
                    {item?.role !== "admin" ? (
                      <span onClick={() => handleAdmin(item._id)}>
                        <CustomButton buttonText={"Make Admin"}></CustomButton>
                      </span>
                    ) : (
                      <p className="text-red-700 text-lg">Already admin</p>
                    )}
                  </td>
                  <td>
                    {item?.role !== "agent" ? (
                      <span onClick={() => handleAgent(item._id)}>
                        <CustomButton buttonText={"Make Agent"}></CustomButton>
                      </span>
                    ) : (
                      <p className="text-red-700 text-lg">Already agent</p>
                    )}
                  </td>
                  <td>
                    {item?.role === "agent" && (
                      <span onClick={() => handleFraud(item._id)}>
                        <CustomButton
                          buttonText={"Make as Fraud"}
                        ></CustomButton>
                      </span>
                    )}
                    {item?.role === "fraud" && (
                      <p className="text-red-700 text-lg">Already fraud</p>
                    )}
                  </td>
                  <td>
                    <span onClick={() => handleDelete(item._id)}>
                      <CustomButton buttonText={"Delete"}></CustomButton>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <Empty text={"This"}></Empty>
          )}
        </table>
      </div>
    </Container>
  );
};

export default ManageUsers;
