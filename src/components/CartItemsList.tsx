import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { Stack } from "@mui/material";
import CartProduct from "./CartProduct";

const CartItemsList = () => {
  const selectItem = useSelector((state: RootState) => state.cart.selectItems);

  return (
    <Stack>
      {selectItem.map((item) => (
        <CartProduct
          id={item.id}
          img1={item.img1}
          price={item.price}
          quantity={item.quantity}
          title={item.title}
          key={item.id}
        />
      ))}
    </Stack>
  );
};

export default CartItemsList;
