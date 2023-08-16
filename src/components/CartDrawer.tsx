import { useState } from "react";
import { CloseButton, CustomDrawer, DrawerButton } from "../style";
import CartItemsList from "./CartItemsList";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Typography } from "@mui/material";

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
      </CustomDrawer>
    </>
  );
};

export default CartDrawer;
