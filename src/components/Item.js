import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Item({ title, description, price, pictureUrl }) {
  return (
    <Card sx={{ maxWidth: "250px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: "140px", width: "140px" }}
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
