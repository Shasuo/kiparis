import classNames from "classnames";

interface ContactButtonProps {
  text: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const ContactButton = ({
  text,
  fullWidth,
  onClick,
}: ContactButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "px-[46px] py-3.5 rounded-base_border_radius",
        "relative overflow-hidden w-fit mx-auto select-none cursor-pointer",
        "font-normal text-base text-main_white",
        fullWidth && "w-full text-center",
        "hover:opacity-88 active:opacity-60"
      )}
      style={{
        backgroundImage: "url('/images/contact-button-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="w-full h-full bg-main_aqua/50 absolute z-1 left-0 top-0" />
      <div className="relative z-2">{text}</div>
    </button>
  );
};
