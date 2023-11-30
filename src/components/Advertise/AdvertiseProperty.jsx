/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea, CardActions, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../../shared/CustomButton/customButton";

export default function AdvertiseProperty({ property }) {
  const {
    propertyId,
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
              Price: ({priceRange.min} - {priceRange.max})$
            </Typography>
            Agent Info:
            <CardHeader
              avatar={<Avatar alt={agentName} src={agentImg} />}
              title={agentName}
            />
            <div className="flex justify-between items-center">
              <Typography gutterBottom variant="h6" component="div">
                Status: <span className="text-green-600">{status}</span>
              </Typography>
              <CardActions>
                <Link to={`/details/${propertyId}`}>
                  <CustomButton buttonText="See Details"></CustomButton>
                </Link>
              </CardActions>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}