import { AppBar, Toolbar, Typography, MenuItem } from "@mui/material";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartWidget from "./CartWidget";

export default function NavBar() {
  const cartContext = useContext(CartContext);
  const items = [
    {
      id: "home",
      name: "Inicio",
      url: "/",
    },
    {
      id: "categories",
      name: "Categorías",
      url: "/categories",
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
          {cartContext.products.length > 0 ? (
            <MenuItem key={"cart"}>
              <NavLink to="/cart" style={{ color: "white" }}>
                <CartWidget />
              </NavLink>
            </MenuItem>
          ) : null}
        </Toolbar>
      </AppBar>
      <div style={{ height: "80px" }}></div>
    </>
  );
}
