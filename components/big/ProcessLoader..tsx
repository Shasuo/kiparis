import { processLoader } from "@/Jotay/atoms";
import classNames from "classnames";
import { useAtom } from "jotai";

export const ProcessLoader = () => {
  const [isActive] = useAtom(processLoader);
  return (
    <section
      className={classNames(
        "fixed left-0 top-0 w-full h-full bg-main_white/70 flex items-center justify-center z-40",
        "transition-opacity duration-300 ease-in-out",
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <span className="loader"></span>
    </section>
  );
};
