import { ChangeEvent, useState } from "react";
import UploadProduct from "./style";
import useInput, { ReturnType } from "../../../hooks/useInput";
import { Category, UploadReturnObj } from "../../../types/type";
import fileUpload from "../../../utils/upload";

export interface UploadProductProps {
  category: Category;
  name: ReturnType;
  quantity: ReturnType;
  description: ReturnType;
  price: ReturnType;
  discount: ReturnType;
  shipping: ReturnType;
  images: UploadReturnObj[] | [];
  handleImage: (ev: ChangeEvent<HTMLInputElement>) => void;
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
  const [images, setImages] = useState<Array<UploadReturnObj>>([]);

  const handleImage = async (ev: ChangeEvent<HTMLInputElement>) => {
    const target = ev.target;
    const files = target.files! as FileList;
    const image = await fileUpload(files);

    setImages((images) => [...images, image]);
  };

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
      handleImage={handleImage}
    />
  );
}
