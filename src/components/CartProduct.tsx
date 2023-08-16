//types
import { CartItem } from "../types";
//material ui
import { Stack, Typography, Box, IconButton } from "@mui/material";
//icons
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
//redux
import { useDispatch } from "react-redux";
import { increase, descrease,removeItem } from "../Redux/cartSlice";

const CartProduct = ({ id, img1, price, quantity, title }: CartItem) => {
  const dispatch = useDispatch();

  return (
    <Box
      boxShadow={3}
      margin={2}
      flexDirection="row"
      display="flex"
      borderRadius={2}
      alignItems="center"
    >
      <img src={`${img1}`} alt="product" width="80px" />
      <Stack>
        <Typography variant="subtitle1" paddingX="10px" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="h6" gutterBottom paddingX="10px">
          ${price}
        </Typography>
      </Stack>
      <Stack alignItems="center" marginLeft="auto" marginRight="20px">
        <IconButton
          onClick={() => {
            dispatch(increase(id));
          }}
        >
          <AiOutlinePlus />
        </IconButton>
        <Typography>{quantity}</Typography>
        {quantity === 1 ? (
          <IconButton
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            <AiOutlineDelete />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              dispatch(descrease(id));
            }}
          >
            <AiOutlineMinus />
          </IconButton>
        )}
      </Stack>
    </Box>
  );
};

export default CartProduct;
