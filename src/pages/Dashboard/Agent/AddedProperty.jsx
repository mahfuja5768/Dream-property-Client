/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea, CardActions, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import CustomButton from "../../../hooks/customButton";

export default function AddedProperty({refetch, property }) {
  const {
    propertyImg,
    agentImg,
    agentName,
    location,
    priceRange,
    status,
    title,
    _id,
  } = property || {};
  console.log(property);

   const handleDelete = async (_id) => {
     console.log(_id)
     try {
       const addedProperty = await axiosSecure.delete(`/agent-properties/${_id}`);
       // console.log(review);
       Swal.fire({
         title: "Success!",
         text: "Property deleted successfully !",
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
    <div>
      <Card elevation={20}>
        <CardActionArea>
          <CardMedia
            style={{
              height: "250px",
              overflow: "hidden",
              transition: "transform 0.3s",
            }}
            component="img"
            height="240"
            image={propertyImg}
            alt="property img"
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Location: {location}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              Price: ({priceRange?.min} - {priceRange?.max})$
            </Typography>
            Agent Info:
            <CardHeader
              avatar={<Avatar alt={agentName} src={agentImg} />}
              title={agentName}
            />
            <Typography gutterBottom variant="h6" component="div">
              Status: <span className="text-green-600">{status}</span>
            </Typography>
            <div className="flex justify-between items-center">
              {status === "rejected" && (
                ""
              ) } {
                status === 'verified'? <CardActions>
                  <Link to={`/dashboard/updateProperty/${_id}`}>
                    <CustomButton buttonText="Update Now"></CustomButton>
                  </Link>
                </CardActions> : 'It is not verify'
              }
              <CardActions>
                <span onClick={()=>handleDelete(_id)}>
                  <CustomButton buttonText="Delete"></CustomButton>
                </span>
              </CardActions>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
