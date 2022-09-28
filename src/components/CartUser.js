import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function CartUser({ buyItems }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  function createBuyerAndBuyItems() {
    if (!areFieldsValid()) return;
    const buyer = {
      name: name,
      phone: phone,
      email: email,
    };
    buyItems(buyer);
  }

  function areFieldsValid() {
    if (name === "") {
      alert("Tienes que ingresar tu nombre");
      return false;
    }

    if (phone === "") {
      alert("Tienes que ingresar tu teléfono");
      return false;
    }

    if (email === "") {
      alert("Tienes que ingresar tu email");
      return false;
    }

    if (confirmEmail === "") {
      alert("Tienes que ingresar por segunda vez tu email");
      return false;
    }

    if (email !== confirmEmail) {
      alert("Los emails ingresados no coinciden");
      return false;
    }
    return true;
  }

  return (
    <>
      <Box style={{ textAlign: "center", marginTop: "32px" }}>
        <TextField
          id="filled-basic"
          label="Nombre completo"
          variant="filled"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Teléfono"
          variant="filled"
          style={{ marginLeft: "32px", marginRight: "32px" }}
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          style={{ marginRight: "32px" }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Confirma tu Email"
          variant="filled"
          onChange={(event) => setConfirmEmail(event.target.value)}
        />
        <Button
          onClick={createBuyerAndBuyItems}
          style={{ width: "100%", marginTop: "32px" }}
        >
          <Typography>Finalizar Compra</Typography>
        </Button>
      </Box>
    </>
  );
}
