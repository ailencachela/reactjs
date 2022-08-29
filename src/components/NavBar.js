import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Box,
} from "@mui/material";

export default function NavBar() {
  const items = ["Inicio", "Productos", "Contáctanos", "Carrito"];
  return (
    <div>
      <AppBar component="nav">
        <Toolbar>
          <IconButton>
            <Typography variant="h4" color="white">
              JANA
            </Typography>
          </IconButton>
          {items.map((item) => (
            <MenuItem>
              <Typography textAlign="center">{item}</Typography>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
