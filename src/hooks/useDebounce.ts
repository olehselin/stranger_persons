import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);
  console.log("debounceValue: ", debounceValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
