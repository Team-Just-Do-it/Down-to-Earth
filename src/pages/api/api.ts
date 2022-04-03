import { API_ENDPOINT } from "./../../constants/index";
//// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from 'next'

//type Data = {
//  name: string
//}

//export default function handler(
//  req: NextApiRequest,
//  res: NextApiResponse<Data>
//) {
//  res.status(200).json({ name: 'John Doe' })
//}

const UPLOAD_Files: string = `${API_ENDPOINT}/api/upload`;

export const imageUploadAPI = (files: FileList) => {
  const formData = new FormData();
  formData.append("files", files[0]);

  const options = {
    method: "POST",
    body: formData,
  };

  return fetch(UPLOAD_Files, options);
};
