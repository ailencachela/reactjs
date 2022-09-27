import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function Category({ productsAvailable }) {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    let prods = productsAvailable.filter(
      (prod) => prod.category === categoryId
    );
    setCategoryProducts(prods);
  }, []);

  return (
    <>
      <ItemList items={categoryProducts} />
    </>
  );
}
