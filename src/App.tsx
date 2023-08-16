import CartDrawer from "./components/CartDrawer";
import ProductsList from "./components/ProductsList";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./Redux/cartSlice";
import { RootState } from "./Redux/store";

function App() {
  const selectItem = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [selectItem]);

  return (
    <Stack
      minHeight="100vh"
      justifyContent="center"
      sx={{ backgroundColor: "#F0F3E8" }}
      position="relative"
    >
      <CartDrawer />
      <ProductsList />
    </Stack>
  );
}

export default App;
