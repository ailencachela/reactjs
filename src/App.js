import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Box } from "@mui/material";

const stock = Number.parseInt(prompt("Cuánto hay de stock?"));
if (stock <= 0) {
  alert("Debes ingresar un número mayor a 0");
}

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        stock={stock}
        saludo={"Bienvenidos a JANA Cosmética Natural"}
      />
    </>
  );
}

export default App;
