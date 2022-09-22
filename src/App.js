import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { mockItems } from "./MockItems";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import { CartContextProvider } from "./components/CartContext";

function App() {
  return (
    <>
      <CartContextProvider value={{ defaultValue: [] }}>
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
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
