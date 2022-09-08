import { useState } from "react";
import ItemList from "./ItemList";
import NavBarPadding from "./NavBarPadding";

export default function ItemListContainer({ mockItems }) {
  const [items, setItems] = useState([]);

  setTimeout(() => {
    setItems(mockItems);
  }, 2000);

  return (
    <>
      <NavBarPadding />
      <ItemList items={items} />
    </>
  );
}
