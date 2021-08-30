import { SetStateAction, Dispatch } from "react";
import { ChangeEvent } from "react";
import { useState } from "react";

type ReturnType<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>
];
export const useInput = <T>(initialText: T): ReturnType<T> => {
  const [value, setValue] = useState(initialText);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  };

  return [value, onChange, setValue];
};
