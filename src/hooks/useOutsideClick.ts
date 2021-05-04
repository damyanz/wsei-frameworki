import { useRef, useEffect } from "react";

const useOutsideClick = <T extends HTMLElement>(callback: () => any) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent): void => {
      if (ref.current?.contains(e.target as Node | null)) {
        return;
      }
      callback();
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);

  return { ref };
};

export default useOutsideClick;
