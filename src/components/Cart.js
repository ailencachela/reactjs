import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import ItemDetail from "./ItemDetail";
import { NavLink } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import CartUser from "./CartUser";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const db = getFirestore();
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

  function buyProductsInCart(buyer) {
    let total = 0;
    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    cartContext.products.map((prod) => {
      total = total + prod.price * prod.count;
    });
    const order = {
      buyer: buyer,
      items: cartContext.products,
      date: date,
      total: total,
    };
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      alert(
        `Has comprado invertido $${total} en nuestros productos. Muchas gracias! El ID de tu compra es ${id}`
      );
    });
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
        ) : (
          <>
            <CartUser buyItems={buyProductsInCart} />
          </>
        )}
      </Box>
    </>
  );
}
