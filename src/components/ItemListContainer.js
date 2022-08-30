import { Typography } from "@mui/material";

export default function ItemListContainer({ saludo }) {
  return (
    <>
      <Typography variant="h3" align="center" sx={{ paddingTop: "60px" }}>
       {saludo}
      </Typography>
    </>
  );
}
