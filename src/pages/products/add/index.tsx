import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import UploadProduct from "./style";
import useInput, { ReturnType } from "../../../hooks/useInput";
import { Category, UploadReturnObj } from "../../../types/type";
import fileUpload from "../../../utils/upload";

export interface UploadProductProps {
  category: (ev: ChangeEvent<HTMLSelectElement>) => void;
  name: ReturnType;
  quantity: ReturnType;
  handleContents: (value: string) => void;
  price: ReturnType;
  discount: ReturnType;
  shipping: ReturnType;
  images: UploadReturnObj[] | [];
  handleImage: (ev: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

export default function UploadProductContainer() {
  const router = useRouter();
  const [category, setCategory] = useState<Category>("beauty");
  const name = useInput("");
  const quantity = useInput(0);
  const [contents, setContents] = useState<string>("");

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

  const handleCategory = (ev: ChangeEvent<HTMLSelectElement>) => {
    const category: Category = ev.target.value as Category;
    setCategory(category);
  };

  const handleClick = async () => {
    try {
      const data = {
        category,
        name: name.value,
        quantity: quantity.value,
        contents,
        price: price.value,
        discount: discount.value,
        shipping: shipping.value,
        images,
      };
      //전송 api 성공 시 page 이동

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UploadProduct
      category={handleCategory}
      name={name}
      quantity={quantity}
      handleContents={handleContents}
      price={price}
      discount={discount}
      shipping={shipping}
      images={images}
      handleImage={handleImage}
      handleClick={handleClick}
    />
  );
}
