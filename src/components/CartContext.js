import React, { useState } from "react";

const CartContext = React.createContext();

function CartContextProvider({ defaultValue = [], children }) {
  const [products, setProducts] = useState(defaultValue);

  function addToCart(product, count) {
    if (isInCart(product.id)) {
      product.count = product.count + count;
    } else {
      product.count = count;
      setProducts([...products, product]);
    }
  }

  function isInCart(id) {
    const productsWithId = products.filter((prod) => prod.id === id);
    return productsWithId.length > 0;
  }

  function clear() {
    setProducts([]);
  }

  return (
    <CartContext.Provider value={{ products, addToCart, isInCart, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
