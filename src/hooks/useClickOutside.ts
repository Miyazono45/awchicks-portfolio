import { useEffect, useRef } from "react";

export const useClickOutside = (callback: Function) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const clickerOutside = (event: MouseEvent) => {
      // if outer component is clicked
      if (!ref.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", clickerOutside, true);
    return () => {
      document.removeEventListener("click", clickerOutside, true);
    };
  }, [ref, callback]);
};
