import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

type ReturnType = [
  any,
  (ev: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<any>>
];

export default function useInput<T>(intialValue: T): ReturnType {
  const [value, setValue] = useState(intialValue);
  const handler = <R extends HTMLInputElement>(ev: ChangeEvent<R>) => {
    setValue(ev.target.value as unknown as T);
  };

  return [value, handler, setValue];
}
