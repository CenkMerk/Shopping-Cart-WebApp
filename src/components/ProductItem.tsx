import Typography from "@mui/material/Typography";
import { ProductItemProps } from "../types";
import Box from "@mui/material/Box";
import ProductImage from "./ProductImage";

const ProductItem = ({ img1, img2, price, title }: ProductItemProps) => {
  return (
    <Box boxShadow={3}>
      <ProductImage img1={img1} img2={img2} />
      <Typography
        variant="subtitle1"
        paddingX="10px"
        color="#386a20"
        fontWeight={600}
      >
        {title}
      </Typography>
      <Typography variant="h6" gutterBottom paddingX="10px" color="#386a20">
        ${price}
      </Typography>
    </Box>
  );
};

export default ProductItem;
