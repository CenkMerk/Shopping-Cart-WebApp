import Button from "@mui/material/Button";
import ProductItem from "./ProductItem";
import ProductItemsData from "../constant";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const AddToBagButton = styled(Button)({
  borderRadius: "10px 10px 0px 0px",
  width: "200px",
  backgroundColor: "#B3261E",
  "&:hover": {
    backgroundColor: "#386a20",
  },
});

const ProductsList = () => {
  return (
    <Grid container spacing={2}>
      {ProductItemsData.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={index}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <AddToBagButton
            variant="contained"
            onClick={() => console.log(item.title)}
          >
            ADD TO BAG
          </AddToBagButton>
          <ProductItem
            id={item.id}
            img1={item.img1}
            img2={item.img2}
            price={item.price}
            title={item.title}
            quantity={item.quantity}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
