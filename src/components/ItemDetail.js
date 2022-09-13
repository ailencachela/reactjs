import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const [selectedCount, setSelectedCount] = useState(null);

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
                <ItemCount
                  selectedCount={selectedCount}
                  setSelectedCount={setSelectedCount}
                />
              </CardContent>
            </CardActionArea>
          </Card>
        ) : null}
      </div>
    </>
  );
}
