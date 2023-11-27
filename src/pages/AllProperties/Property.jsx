/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea, CardActions, CardHeader } from "@mui/material";
import CustomButton from "../../hooks/customButton";
import { Link } from "react-router-dom";

export default function Property({ property }) {
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
  return (
    <div>
      <Card elevation={20} sx={{ maxWidth: 460 }}>
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
              Price: {priceRange.min} - {priceRange.max}
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
                <Link to={`/details/${_id}`}>
                  <CustomButton
                    buttonText="See Details"
                  ></CustomButton>
                </Link>
              </CardActions>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
