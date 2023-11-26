/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
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
            component="img"
            height="240"
            image={propertyImg}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
