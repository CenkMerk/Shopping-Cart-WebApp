import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography";
import { ProductItemProps } from "../types";

const ProductItem = ({
  id,
  img1,
  img2,
  price,
  quantity,
  title,
}: ProductItemProps) => {
  console.log(id, img1, img2, price, quantity, title);
  return (
    <Stack>
      <img src={`${img1}`} alt={`${title}`} width="100%" />
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
    </Stack>
  );
};

export default ProductItem;
