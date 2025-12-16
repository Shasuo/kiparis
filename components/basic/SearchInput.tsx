import classNames from "classnames";

interface SearchInputProps {
  width?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ width = 360, value = "", onChange }: SearchInputProps) => {
  return (
    <div className="relative w-full mx-auto" style={{ maxWidth: width }}>
      <input
        type="text"
        className={classNames(
          "box-border bg-secondary rounded-base_border_radius block",
          "p-3 pl-[52px] w-full",
          "text-base font-normal",
          "outline-none"
        )}
        placeholder="Поиск..."
        value={value}
        onChange={onChange}
      />
      <img
        src="/images/search.svg"
        alt="Поиск"
        className="absolute left-3 top-3"
      />
    </div>
  );
};
