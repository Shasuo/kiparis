import classNames from "classnames";

interface BlockPointTitleProps {
  text: string;
  bg?: "secondary" | "white" | "aqua";
}

export const BlockPointTitle = ({
  text,
  bg = "secondary",
}: BlockPointTitleProps) => {
  return (
    <div
      className={classNames(
        "rounded-base_border_radius px-4 pt-2.5 pb-2 text-base font-normal",
        bg === "secondary" && "bg-secondary",
        bg === "white" && "bg-main_white",
        bg === "aqua" && "bg-main_aqua text-main_white"
      )}
    >
      {text}
    </div>
  );
};
