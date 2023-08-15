import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { ProductImageProps } from "../types";

const ProductImage = ({ img1, img2 }: ProductImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgValue, setImgValue] = useState<string>(img1);

  return (
    <>
      {!imageLoaded && (
        <Skeleton animation="wave" variant="rounded" width={200} height={300} />
      )}
      <img
        src={`${imgValue}`}
        alt="foto"
        width="200px"
        loading="lazy"
        style={{ display: imageLoaded ? "block" : "none", cursor:"pointer" }}
        onLoad={() => setImageLoaded(true)}
        onMouseEnter={() => setImgValue(img2)}
        onMouseLeave={() => setImgValue(img1)}
        
      />
    </>
  );
};

export default ProductImage;
