import { useState } from "react";
//style
import { CloseButton, CustomDrawer, DrawerButton } from "../style";
//components
import CartItemsList from "./CartItemsList";
import PaymentComp from "./PaymentComp";
//icon
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
//material ui
import Badge from "@mui/material/Badge";
//redux
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const CartDrawer = () => {
  const quantity = useSelector((state: RootState) => state.cart.quantity);
  const [open, setOpen] = useState(false);

  return (
    <>
      <DrawerButton
        onClick={() => setOpen(true)}
        variant="contained"
        color="success"
      >
        <Badge badgeContent={quantity} color="warning">
          <AiOutlineShoppingCart size={28} />
        </Badge>
      </DrawerButton>
      <CustomDrawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <CloseButton
          variant="contained"
          onClick={() => setOpen(false)}
          startIcon={<IoMdArrowRoundBack />}
        >
          KEEP SHOPPİNG
        </CloseButton>
        <CartItemsList />
        <PaymentComp />
      </CustomDrawer>
    </>
  );
};

export default CartDrawer;
