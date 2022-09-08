import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ItemDetail({ item }) {
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {item ? (
          <Card sx={{ maxWidth: "250px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: "140px", width: "100%" }}
                image={item.pictureUrl}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ) : null}
      </div>
    </>
  );
}
