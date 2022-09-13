import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ItemCount({ selectedCount, setSelectedCount }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      {selectedCount ? (
        <Box>
          <NavLink to="/cart">Ir al carrito</NavLink>
        </Box>
      ) : (
        <Box style={{ marginTop: "24px" }}>
          <Typography style={{ width: "100%", textAlign: "center" }}>
            Cantidad seleccionada: {count}
          </Typography>
          <Button style={{ width: "50%" }} onClick={increment}>
            <Typography>+</Typography>
          </Button>
          <Button style={{ width: "50%" }} onClick={decrease}>
            <Typography>-</Typography>
          </Button>
          <Button
            style={{ width: "100%" }}
            onClick={() => {
              setSelectedCount(count);
            }}
          >
            <Typography>Agregar al carrito</Typography>
          </Button>
        </Box>
      )}
    </>
  );
}
