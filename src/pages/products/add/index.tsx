import { ChangeEvent, useState } from "react";
import UploadProduct from "./style";
import useInput, { ReturnType } from "../../../hooks/useInput";
import { Category, UploadReturnObj } from "../../../types/type";
import fileUpload from "../../../utils/upload";

export interface UploadProductProps {
  category: ReturnType;
  name: ReturnType;
  quantity: ReturnType;
  description: (value: string) => void;
  price: ReturnType;
  discount: ReturnType;
  shipping: ReturnType;
  images: UploadReturnObj[] | [];
  handleImage: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadProductContainer() {
  const category = useInput<Category>("beauty");
  const name = useInput("");
  const quantity = useInput(0);
  const [contents, setContents] = useState("");

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

  const handleContents = (value: string) => {
    setContents(value);
  };

  return (
    <UploadProduct
      category={category}
      name={name}
      quantity={quantity}
      description={handleContents}
      price={price}
      discount={discount}
      shipping={shipping}
      images={images}
      handleImage={handleImage}
    />
  );
}
