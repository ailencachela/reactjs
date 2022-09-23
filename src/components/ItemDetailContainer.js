import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const db = getFirestore();
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const itemCollection = collection(db, "items");
    const prodRef = doc(itemCollection, itemId);
    getDoc(prodRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: itemId, ...snapshot.data() });
      }
    });
  }, [itemId]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
}
