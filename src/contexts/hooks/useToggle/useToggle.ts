import { useReducer } from "react";

export function useToggle<T extends validValues = validValues>(
  key: string,
  defaultVal: T,
  otherVal: T
) {
  const storedVal = localStorage.getItem(key);
  const initVal = storedVal ? (JSON.parse(storedVal) as T) : defaultVal;

  const toggleAndSave = (state: T) => {
    const newVal = state === defaultVal ? otherVal : defaultVal;
    localStorage.setItem(key, JSON.stringify(newVal));
    return newVal;
  };

  const [curr, toggleCurr] = useReducer<T, []>(toggleAndSave, initVal);

  return [curr, toggleCurr] as const;
}

type validValues = string | boolean;
