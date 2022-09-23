import { useState } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer({ productsAvailable }) {
  return (
    <>
      <ItemList items={productsAvailable} />
    </>
  );
}
