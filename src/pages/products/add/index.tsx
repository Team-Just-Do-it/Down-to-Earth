import { useState } from "react";
import UploadProduct from "./style";
import useInput, { ReturnType } from "../../../hooks/useInput";
import { Category } from "../../../types/type";

export interface UploadProductProps {
  category: Category;
  name: ReturnType;
  quantity: ReturnType;
  description: ReturnType;
  price: ReturnType;
  discount: ReturnType;
  shipping: ReturnType;
  images: Array<Blob>;
}

export default function UploadProductContainer() {
  const [category, setCategory] = useState<Category>("beauty");
  const name = useInput("");
  const quantity = useInput(0);
  const description = useInput("");

  //price Info
  const price = useInput(0);
  const discount = useInput(0);
  const shipping = useInput(0);

  //image
  const [images, setImages] = useState<Array<Blob>>([]);

  return (
    <UploadProduct
      category={category}
      name={name}
      quantity={quantity}
      description={description}
      price={price}
      discount={discount}
      shipping={shipping}
      images={images}
    />
  );
}
