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

  function removeItem(item) {
    if (isInCart(item.id)) {
      item.count = item.count - 1;
      if (item.count === 0) {
        const newProds = products.filter((el) => el.id !== item.id);
        setProducts(newProds);
        console.log(newProds);
      }
    }
  }

  return (
    <CartContext.Provider
      value={{ products, addToCart, isInCart, clear, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
