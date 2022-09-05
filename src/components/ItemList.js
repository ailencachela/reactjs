import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items, selectItem }) {
  const [id, setId] = useState(null);
  return (
    <Box sx={{ flexGrow: 1, margin: "32px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {items.map((item, index) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            key={item.id}
            onClick={(event) => {
              if (id !== item.id) {
                setId(item.id);
                selectItem(item.id);
              } else {
                setId(null);
                selectItem(null);
              }
            }}
          >
            <Item
              title={item.title}
              description={item.description}
              price={item.price}
              pictureUrl={item.pictureUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
