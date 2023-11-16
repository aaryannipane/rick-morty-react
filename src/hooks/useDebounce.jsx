import { useEffect } from "react";
import { useState } from "react";

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
    console.log("debounced call");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return ()=> clearTimeout(timeOut);
  }, [value, delay]);

  return debouncedValue;
};
