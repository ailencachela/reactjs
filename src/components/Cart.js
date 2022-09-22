import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import ItemDetail from "./ItemDetail";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let currentTotal = 0;
    cartContext.products.map((prod) => {
      currentTotal = currentTotal + prod.price * prod.count;
    });
    setTotal(currentTotal);
  }, []);

  function clear() {
    setTotal(0);
    cartContext.clear();
  }

  function removeItem(item) {
    cartContext.removeItem(item);
    recalculateTotal();
  }

  function recalculateTotal() {
    let newTotal = 0;
    cartContext.products.map((el) => {
      newTotal = newTotal + el.price * el.count;
    });
    setTotal(newTotal);
  }

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
              <ItemDetail item={el} hideCount={true} removeItem={removeItem} />
            </Grid>
          ))}
        </Grid>
        <Typography
          style={{ textAlign: "center", marginTop: "34px" }}
          variant="h5"
        >
          Total ${total}
        </Typography>
        <Button onClick={clear} style={{ width: "100%" }}>
          <Typography>BORRAR TODOS LOS PRODUCTOS</Typography>
        </Button>
        {total === 0 ? (
          <>
            <Button style={{ width: "100%" }}>
              <NavLink to="/">Ir al inicio</NavLink>
            </Button>
          </>
        ) : null}
      </Box>
    </>
  );
}
