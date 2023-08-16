import { Stack, Typography } from "@mui/material";
import { PaymentButton } from "../style";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const PaymentComp = () => {
  const total = useSelector((state: RootState) => state.cart.total);

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
      <PaymentButton variant="contained">Complete Payment</PaymentButton>
    </Stack>
  );
};

export default PaymentComp;
