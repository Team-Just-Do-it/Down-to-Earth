import React, { useState } from "react";
import UploadProduct from "./styles";
import useInput from "../../../hooks/useInput";

export default function UploadProductContainer() {
  type Category = "beauty" | "bath" | "kitchen" | "etc";

  const [category, setCategory] = useState<Category>("beauty");
  const [name, setName] = useInput("");
  const [quantatity, setQuantity] = useInput(0);
  const [content, setContent] = useInput("");
  const [description, setDescription] = useInput("");

  //price Info
  const [price, setPrice] = useInput(0);
  const [discount, setDiscount] = useInput(0);
  const [shipping, setShipping] = useInput(0);

  //image
  const [images, setImages] = useState<Array<Blob>>([]);

  return <UploadProduct />;
}
