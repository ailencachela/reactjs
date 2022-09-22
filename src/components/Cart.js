import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemDetail from "./ItemDetail";

export default function Cart() {
  const cartContext = useContext(CartContext);
  return (
    <>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cartContext.products.map((el) => (
            <Grid item xs={2} sm={4} md={4} key={el.id}>
              <ItemDetail item={el} hideCount={true} />
            </Grid>
          ))}
        </Grid>
        <Button onClick={cartContext.clear} style={{ width: "100%" }}>
          <Typography>BORRAR TODOS LOS PRODUCTOS</Typography>
        </Button>
      </Box>
    </>
  );
}
