import useAuth from "../../../hooks/useAuth";
import Container from "../../../shared/Container/Container";
import useGetRole from "../../../hooks/useGetRole";

/* ----- */
/* eslint-disable react/prop-types */
import * as React from "react";
import { Input } from "@mui/material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import CustomButton from "../../../shared/CustomButton/customButton";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const UserProfilePage = () => {
  const { user, updateUserProfile } = useAuth();
  const [userRole, refetch] = useGetRole();
  console.log(userRole);

  const [loading, setLoading] = useState(false);
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

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleImage = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async () => {
    // console.log("Name:", name);
    // console.log("Image:", image);
    try {
      setLoading(true);

      const imageData = await imageUpload(image);
      await updateUserProfile(name, imageData?.data?.display_url);

      handleClose();

      Swal.fire({
        title: "Success!",
        text: "Successfully profile updated!",
        icon: "success",
        confirmButtonText: "Done",
      });

      setName("");
      setImage("");
      setLoading(false);
      refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
      setName("");
      setImage("");
      setLoading(false);
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Dream-Property | Profile</title>
      </Helmet>
      <SectionTitle heading={'Your Profile'}></SectionTitle>
      <div className="mt-24 card mx-auto md:w-96 bg-secondary shadow-xl">
        <figure className="-mt-12">
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
            <span onClick={handleOpen}>
              <CustomButton buttonText={"Edit Profile"}></CustomButton>
            </span>
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
            onChange={handleName}
            value={name}
            defaultValue={`${user?.displayName}`}
            style={{ margin: "20px 0" }}
            id="outlined-multiline-flexible"
            label="Set your name"
            multiline
            maxRows={4}
          />
          <Input
            onChange={handleImage}
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full file-input-warning"
            placeholder="Choose an image file"
            required
          />
          <div className="my-6 flex justify-between">
            <span onClick={handleSubmit}>
              <CustomButton buttonText={"Submit"}></CustomButton>
            </span>
            <span onClick={handleClose}>
              <CustomButton buttonText={"Cancel"}></CustomButton>
            </span>
          </div>
        </Box>
      </Modal>
    </Container>
  );
};

export default UserProfilePage;
