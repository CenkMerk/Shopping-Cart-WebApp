import CartDrawer from "./components/CartDrawer";
import ProductsList from "./components/ProductsList";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack
      minHeight="100vh"
      justifyContent="center"
      sx={{ backgroundColor: "#F0F3E8"}}
      position="relative"
    >
      <CartDrawer /> 
      <ProductsList />
    </Stack>
  );
}

export default App;
