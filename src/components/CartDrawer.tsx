import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const DrawerButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: 50,
  right: 60,
  [theme.breakpoints.down("md")]: {
    top: 5,
    right: 5,
  },
}));

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
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div onClick={() => setOpen(false)}>
          <h2>Drawer Content</h2>
          <p>This is the content of the drawer.</p>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
