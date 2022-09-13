import { AppBar, Toolbar, Typography, MenuItem } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  const items = [
    {
      id: "home",
      name: "Inicio",
      url: "/",
    },
    {
      id: "category",
      name: "Categorías",
      url: "/category",
    },
    {
      id: "about-us",
      name: "Sobre nosotros",
      url: "/about-us",
    },
  ];
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" color="white" sx={{ flexGrow: 1 }}>
            JANA
          </Typography>
          {items.map((item) => (
            <MenuItem key={item.id}>
              <NavLink to={`${item.url}`} style={{ textDecoration: "none" }}>
                <Typography style={{ color: "white" }} textAlign="center">
                  {item.name}
                </Typography>
              </NavLink>
            </MenuItem>
          ))}
          <MenuItem key={"cart"}>
            <CartWidget />
          </MenuItem>
        </Toolbar>
      </AppBar>
      <div style={{ height: "80px" }}></div>
    </>
  );
}
