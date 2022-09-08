import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { mockItems } from "./MockItems";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer mockItems={mockItems} />}
          />
          <Route
            exact
            path="/category"
            element={<ItemListContainer mockItems={mockItems} />}
          />
          <Route
            exact
            path="/item/:itemId"
            element={<ItemDetailContainer mockItems={mockItems} />}
          />
          <Route exact path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
