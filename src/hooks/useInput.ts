import { SetStateAction, Dispatch, useCallback } from "react";
import { ChangeEvent } from "react";
import { useState } from "react";

//* 입력창 (태스크추가, 태스크 수정)에 사용되는 입력 커스텀훅
type ReturnType<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>
];
export const useInput = <T>(initialText: T): ReturnType<T> => {
  const [value, setValue] = useState(initialText);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);

  return [value, onChange, setValue];
};
