import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item, hideCount, removeItem }) {
  const cartContext = useContext(CartContext);
  const [selectedCount, setSelectedCount] = useState(null);

  function addToCart(count) {
    setSelectedCount(count);
    cartContext.addToCart(item, count);
  }

  function removeThisItem() {
    removeItem(item);
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
                    <>
                      <Typography>
                        Hay {item.count} elementos en este carrito. Precio
                        individual de ${item.price}. Total de $
                        {item.count * item.price}
                      </Typography>
                      <Button onClick={removeThisItem}>
                        <Typography>Eliminar item</Typography>
                      </Button>
                    </>
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
