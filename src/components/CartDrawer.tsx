import { useState } from "react";
import { CustomDrawer, DrawerButton } from "../style";

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
        <div onClick={() => setOpen(false)}>
          <h2>Drawer Content</h2>
          <p>This is the content of the drawer.</p>
        </div>
      </CustomDrawer>
    </>
  );
};

export default CartDrawer;
