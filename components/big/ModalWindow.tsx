import { useClickOutside } from "@/hooks/useOnClickOutside";
import classNames from "classnames";
import { ReactNode, useRef } from "react";

interface ModalWindowProps {
  children: ReactNode;
  isActive: boolean;
  onClose: () => void;
}

export const ModalWindow = ({
  children,
  isActive,
  onClose,
}: ModalWindowProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      className={classNames(
        "fixed top-0 left-0 w-full h-full z-20 overflow-auto",
        "transition-opacity duration-300 ease-in-out",
        "bg-main_black/20 backdrop-blur-[6px]",
        "box-border px-4",
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className="absolute w-full h-full" onClick={onClose} />
      <div
        ref={contentRef}
        className={classNames(
          "bg-main_white box-border p-6 rounded-base_border_radius relative z-10",
          "mx-auto mt-[100px] lg:max-w-[500px] w-full"
        )}
      >
        {children}
      </div>
      <div
        className={classNames(
          "text-base font-light text-center bg-secondary mt-6 cursor-pointer relative z-10",
          "py-4 px-6 box-border rounded-base_border_radius lg:max-w-[500px] mx-auto",
          "hover:opacity-88 active:opacity-60"
        )}
        onClick={onClose}
      >
        Закрыть
      </div>
    </section>
  );
};
