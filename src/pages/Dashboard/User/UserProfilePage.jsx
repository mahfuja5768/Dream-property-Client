import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Container from "../../../shared/Container/Container";
import axiosSecure from "../../../api";
import useGetRole from "../../../hooks/useGetRole";
import CustomButton from "../../../hooks/CustomButton";

/* ----- */
 /* eslint-disable react/prop-types */
 import * as React from "react";
 import Box from "@mui/material/Box";
 import Typography from "@mui/material/Typography";
 import Modal from "@mui/material/Modal";
 import TextField from "@mui/material/TextField";
 import Swal from "sweetalert2";

const UserProfilePage = () => {
    const { user } = useAuth();
   const [userRole, refetch] = useGetRole()
  console.log(userRole)

  const [loading, setLoading] = React.useState(false);
  const [review, setReview] = React.useState(" ");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      console.log(review);
      const reviewBody = {
        reviewDetail: review,
        email: user?.email,
        reviewerName: user?.displayName,
      };
      // console.log(reviewBody);
    //   const data = await addReviews(reviewBody);

      setReview("");
      handleClose();
      refetch()
      Swal.fire({
        title: "Success!",
        text: "Review added successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      setLoading(false);
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
    <Container >
      <div className="card mx-auto w-96 bg-secondary shadow-xl">
        <figure className="-mt-12" >
          <img
            src={user?.photoURL} 
            alt="Shoes"
            className=" w-40 h-40 rounded-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Your name: {user?.displayName}</h2>
          <p className="text-lg font-medium">Role: {userRole}</p>
          <div className="card-actions">
            <span onClick={handleOpen}><CustomButton buttonText={'Edit Profile'}></CustomButton></span>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update your profile
          </Typography>
          <TextField
            onChange={handleReviewChange}
            value={review}
            style={{ margin: "20px 0" }}
            id="outlined-multiline-flexible"
            label="Your Name"
            multiline
            maxRows={4}
          />
          <TextField
            onChange={handleReviewChange}
            value={review}
            style={{ margin: "20px 0" }}
            id="outlined-multiline-flexible"
            label="Your Name"
            multiline
            maxRows={4}
          />
          <div className=" my-6 flex justify-between">
            <span onClick={handleSubmit}>
              {" "}
              <CustomButton buttonText="Submit"></CustomButton>
            </span>

            <span onClick={handleClose}>
              {" "}
              <CustomButton buttonText="Cancel"></CustomButton>
            </span>
          </div>
        </Box>
      </Modal>
    </Container>
  );
};

export default UserProfilePage;
