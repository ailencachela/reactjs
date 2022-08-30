import { Add, Remove } from "@mui/icons-material";
import { Button, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function ItemListContainer({ stock }) {
  const [stockAvailable, setStockAvailable] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setStockAvailable(stock);
  }, []);

  function increaseCount() {
    if (stockAvailable === 0) {
      alert("No hay más stock disponible!");
      return;
    }
    if (count >= stockAvailable) {
      alert(`Solo hay ${count} unidades disponibles!`);
    } else {
      setCount(count + 1);
    }
  }

  function decreaseCount() {
    if (count === 0) {
      alert("No puedes seleccionar menos que 0 items");
    } else {
      setCount(count - 1);
    }
  }

  function addToCart() {
    if (count === 0) {
        alert("Tienes que seleccionar al menos una unidad para comprar")
        return
    }
    if (count > stockAvailable) {
      alert(`No hay suficiente stock, solo hay ${stockAvailable} unidades`);
    } else {
      alert(`Has comprado ${count} unidades!`);
      setCount(0);
      setStockAvailable(stockAvailable - count);
    }
  }

  return (
    <>
      {stock > 0 ? (
        <div style={main_div}>
          <Typography variant="h4" style={title}>
            ¡Hay {stockAvailable} unidades disponibles!
          </Typography>
          <div style={outer_box}>
            <div style={counter_box}>
              <div style={number_box}>
                <h3>{count}</h3>
              </div>
              <div>
                <Tooltip title="Aumentar">
                  <Button onClick={increaseCount} style={button}>
                    <Add />
                  </Button>
                </Tooltip>
                <Tooltip title="Disminuir">
                  <Button onClick={decreaseCount} style={button}>
                    <Remove />
                  </Button>
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Agregar al carrito">
                  <Button onClick={addToCart} style={button}>
                    <Typography>Agregar al carrito</Typography>
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

const main_div = {
  paddingTop: "100px",
  textAlign: "center",
  justifyContent: "center",
  background: "floralwhite",
};

const title = {
  marginTop: "100px",
};

const outer_box = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const counter_box = {
  marginBottom: "400px",
  width: "320px",
  height: "320px",
  background: "lightpink",
  boxShadow: "5px 5px 20px -5px",
  borderRadius: "5%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const number_box = {
  width: "100%",
  textAlign: "center",
  color: "white",
  background: "grey",
};

const button = {
  padding: "20px 40px",
};
