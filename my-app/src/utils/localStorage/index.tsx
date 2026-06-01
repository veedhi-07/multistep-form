import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialValue: unknown) {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      return savedValue !== null ? JSON.parse(savedValue) : initialValue;
    } catch (error) {
      console.log("Error", key, error);
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error", key, error);
    }
  }, [key, value]);

  return [value, setValue];
}
// export function getItem(key: string) {
//   try {
//     const item = window.localStorage.getItem(key);
//     return item ? JSON.parse(item) : null;
//   } catch (error) {
//     console.log(error);
//   }
// }
