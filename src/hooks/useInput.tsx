import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

export type ReturnType = {
  value: any;
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  setValue: Dispatch<SetStateAction<any>>;
};

export default function useInput<T>(intialValue: T): ReturnType {
  const [value, setValue] = useState(intialValue);
  const onChange = <R extends HTMLInputElement>(ev: ChangeEvent<R>) => {
    setValue(ev.target.value as unknown as T);
  };

  return { value, onChange, setValue };
}
