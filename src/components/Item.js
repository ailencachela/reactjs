import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Item({ id, title, description, price, pictureUrl }) {
  return (
    <Card sx={{ maxWidth: "250px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: "140px", width: "100%" }}
          image={pictureUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
          <NavLink to={`/item/${id}`}>
            <Typography>Abrir página del producto</Typography>
          </NavLink>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
