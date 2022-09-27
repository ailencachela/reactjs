import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories({ productsAvailable }) {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const catgs = [];
    productsAvailable.map((prod) => {
      if (!catgs.map((cat) => cat.id).includes(prod.category)) {
        switch (prod.category) {
          case "capilar":
            catgs.push({ id: prod.category, name: "Cuidado Capilar" });
            break;
          case "combo":
            catgs.push({ id: prod.category, name: "Combo de productos" });
            break;
          case "corporal":
            catgs.push({ id: prod.category, name: "Cuidado Corporal" });
            break;
          case "cabello":
            catgs.push({ id: prod.category, name: "Para tu cabello" });
            break;
        }
      }
    });
    setCategories(catgs);
  }, []);

  return (
    <>
      <Box style={{ width: "100%", textAlign: "center" }}>
        {categories.map((cat) => (
          <Button onClick={() => navigate(`/categories/${cat.id}`)}>
            <Typography>{cat.name}</Typography>
          </Button>
        ))}
      </Box>
    </>
  );
}
