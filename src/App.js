import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import { CartContextProvider } from "./components/CartContext";
import Category from "./components/Category";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  limit,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Categories from "./components/Categories";

function App() {
  const db = getFirestore();
  const [productsAvailable, setProductsAvailable] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, "items"), limit(6));
    getDocs(q).then((snapshot) => {
      setLoading(false);
      setProductsAvailable(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);
  return (
    <>
      <CartContextProvider value={{ defaultValue: [] }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {loading ? (
                    <Typography
                      style={{
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      Cargando...
                    </Typography>
                  ) : null}
                  <ItemListContainer productsAvailable={productsAvailable} />
                </>
              }
            />
            <Route
              exact
              path="/categories"
              element={<Categories productsAvailable={productsAvailable} />}
            />

            <Route
              exact
              path="/categories/:categoryId"
              element={<Category productsAvailable={productsAvailable} />}
            />

            <Route
              exact
              path="/item/:itemId"
              element={
                <ItemDetailContainer productsAvailable={productsAvailable} />
              }
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
