import { useState } from "react";
import { ProductImageProps } from "../types";

const ProductImage = ({ img1, img2 }: ProductImageProps) => {
  const [imgValue, setImgValue] = useState<string>(img1);

  return (
    <img
      src={`${imgValue}`}
      alt="foto"
      width="200px"
      loading="lazy"
      onMouseEnter={() => setImgValue(img2)}
      onMouseLeave={() => setImgValue(img1)}
      style={{cursor:"pointer"}}
    />
  );
};

export default ProductImage;
