import { useState } from "react";
//style
import { CloseButton, CustomDrawer, DrawerButton } from "../style";
//components
import CartItemsList from "./CartItemsList";
import PaymentComp from "./PaymentComp";
//icon
import { IoMdArrowRoundBack } from "react-icons/io";


const CartDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DrawerButton
        onClick={() => setOpen(true)}
        variant="contained"
        color="success"
      >
        BAG
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
