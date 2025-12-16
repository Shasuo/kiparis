import Inputmask from "inputmask";
import { useEffect, useRef } from "react";

interface BasicInputProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const BasicInput = ({
  placeholder,
  type,
  value,
  onChange,
  required,
}: BasicInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (type === "tel" && inputRef.current) {
      Inputmask({
        mask: "+7 (999) 999-99-99",
        showMaskOnHover: true,
        clearIncomplete: true,
        oncomplete: () => {},
        onincomplete: function () {
          const fakeEvent = {
            target: {
              value: "",
            },
          } as React.ChangeEvent<HTMLInputElement>;

          if (onChange) {
            onChange(fakeEvent);
          }
        },
      }).mask(inputRef.current);
    }
  }, [type]);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      required={required}
      className="rounded-base_border_radius bg-secondary py-4 px-5 font-normal text-base text-main_black outline-none w-full"
    />
  );
};
