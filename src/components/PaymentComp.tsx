import { Stack, Typography } from "@mui/material";
import { PaymentButton } from "../style";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/cartSlice";

const PaymentComp = () => {
  const dispatch = useDispatch();
  const total = useSelector((state: RootState) => state.cart.total);

  const HandleClick = () => {
    dispatch(clearCart());
    alert(`Ödenen Tutar: ${total} TL`);
  };

  return (
    <Stack marginTop="auto">
      <Typography
        variant="h6"
        fontWeight={600}
        padding="10px"
        sx={{ backgroundColor: "#F0F3E8" }}
      >
        Total Amount : ${total}
      </Typography>
      <PaymentButton variant="contained" onClick={HandleClick} disabled={total === 0}>
        Complete Payment
      </PaymentButton>
    </Stack>
  );
};

export default PaymentComp;
