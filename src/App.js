import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo={"Bienvenidos a JANA Cosmética Natural"} />
    </>
  );
}

export default App;
