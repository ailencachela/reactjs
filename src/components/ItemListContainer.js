import { useState } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer({ mockItems }) {
  const [items, setItems] = useState([]);

  setTimeout(() => {
    setItems(mockItems);
  }, 2000);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}
