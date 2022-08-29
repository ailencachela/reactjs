import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
} from "@mui/material";
import CartWidget from "./CartWidget";

export default function NavBar() {
  const items = ["Inicio", "Productos", "Contáctanos"];
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" color="white" sx={{ flexGrow: 1 }}>
            JANA
          </Typography>
          {items.map((item) => (
            <MenuItem>
              <Typography textAlign="center">{item}</Typography>
            </MenuItem>
          ))}
          <MenuItem>
            <CartWidget />
          </MenuItem>
        </Toolbar>
      </AppBar>

      <Toolbar />
    </>
  );
}
