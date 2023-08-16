import { Drawer, Button } from "@mui/material";
import { styled } from "@mui/system";

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
}));

export const DrawerButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: 50,
  right: 60,
  [theme.breakpoints.down("md")]: {
    top: 5,
    right: 5,
  },
}));

export const AddToBagButton = styled(Button)({
  borderRadius: "10px 10px 0px 0px",
  width: "200px",
  backgroundColor: "#B3261E",
  "&:hover": {
    backgroundColor: "#386a20",
  },
});
