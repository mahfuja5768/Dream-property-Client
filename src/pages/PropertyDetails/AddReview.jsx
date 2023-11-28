/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CustomButton from "../../hooks/CustomButton";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { addReviews } from "../../api/auth";
import useReviews from "../../hooks/useReviews";

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

export default function AddReview({ propertyId, agentName, title }) {
  // console.log(propertyId, agentName, title);
  const [allReviews,refetch] = useReviews();

  const { user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [review, setReview] = React.useState(" ");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const date = new Date()

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      console.log(review);
      const reviewBody = {
        propertyId: propertyId,
        agentName: agentName,
        title: title,
        date: date,
        reviewDetail: review,
        email: user?.email,
        reviewerName: user?.displayName,
        reviewerImg: user?.photoURL,
      };
      // console.log(reviewBody);
      const data = await addReviews(reviewBody);

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
    <div className="text-center bg-secondary py-5 rounded-2xl my-12">
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ fontWeight: "bold" }}
      >
        You can add your review
      </Typography>
      <span onClick={handleOpen}>
        {" "}
        <CustomButton buttonText="Add Review"></CustomButton>
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Give your review here.
          </Typography>
          <TextField
            onChange={handleReviewChange}
            value={review}
            style={{ margin: "20px 0" }}
            id="outlined-multiline-flexible"
            label="Review"
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
    </div>
  );
}
