import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import NavBarPadding from "./NavBarPadding";

export default function ItemDetailContainer({ mockItems }) {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const itemToLoad = mockItems.filter((element) => element.id === itemId)[0];
    setItem(itemToLoad);
  }, [itemId]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
}
