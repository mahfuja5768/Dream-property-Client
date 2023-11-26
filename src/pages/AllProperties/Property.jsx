/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea, CardHeader } from "@mui/material";
import Container from "../../shared/Container/Container";

export default function Property({ property }) {
  const {
    propertyImg,
    agentImg,
    agentName,
    email,
    location,
    priceRange,
    status,
    title,
    _id,
  } = property || {};
  console.log(property);
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
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
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            Status:  {location}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            Status:  {status}
            </Typography>
            Agent Info:
            <CardHeader
              avatar={
                <Avatar alt={property.agentName} src={property.agentImg} />
              }
              title={agentName}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
