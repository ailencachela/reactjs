import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item, hideCount }) {
  const [selectedCount, setSelectedCount] = useState(null);
  const cartContext = useContext(CartContext);

  function addToCart(count) {
    setSelectedCount(count);
    cartContext.addToCart(item, count);
  }
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {item ? (
          <>
            <Card sx={{ maxWidth: "250px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ height: "140px", width: "100%" }}
                  image={item.pictureUrl}
                  alt={item.title}
                />
                <CardContent>
                  {item.count > 0 && hideCount ? (
                    <Typography>
                      Hay {item.count} elementos en este carrito
                    </Typography>
                  ) : null}
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price}
                  </Typography>
                  {hideCount ? null : (
                    <ItemCount
                      selectedCount={selectedCount}
                      addToCart={addToCart}
                    />
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </>
        ) : null}
      </div>
    </>
  );
}
