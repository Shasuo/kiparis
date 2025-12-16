import { RefObject, useCallback, useEffect } from "react";

export const useClickOutside = <T extends HTMLElement, A>(
  refs: RefObject<T | null> | RefObject<T | null>[] | null,
  callback: () => A
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!refs) return;
      const target = event.target as Node;

      const refArray = Array.isArray(refs) ? refs : [refs];

      if (refArray.some((ref) => ref.current && ref.current.contains(target))) {
        return;
      }

      event.stopPropagation();

      callback();
    },
    [callback, refs]
  );

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [handleClickOutside]);
};
