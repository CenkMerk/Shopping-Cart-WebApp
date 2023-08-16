import { useState } from "react";
import { CloseButton, CustomDrawer, DrawerButton } from "../style";
import CartItemList from "./CartItemList";

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
        <CloseButton variant="contained">KEEP SHOPPİNG</CloseButton>
        <CartItemList />
      </CustomDrawer>
    </>
  );
};

export default CartDrawer;
