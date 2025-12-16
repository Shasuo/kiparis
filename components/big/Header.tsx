import classNames from "classnames";
import { useEffect, useState } from "react";
import { ContactButton } from "../basic/ContactButton";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useAtom } from "jotai";
import {
  isMainMenuOpen,
  openMainModalForm,
  openMobileMenu,
} from "@/Jotay/atoms";

interface HeaderButtonProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const HeaderButton = ({ text, onClick, isActive }: HeaderButtonProps) => {
  return (
    <div
      className={classNames(
        "px-9 py-3 rounded-base_border_radius cursor-pointer whitespace-nowrap",
        "hover:bg-main_white/20",
        isActive && "bg-main_white! text-main_black"
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

const HeaderMobileButton = ({ text, onClick, isActive }: HeaderButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "rounded-base_border_radius py-4 px-6 box-border text-center w-full",
        "hover:bg-main_black/5 active:bg-main_black/5 bg-main_white"
      )}
    >
      {text}
    </div>
  );
};

export const mainMenuButtons = [
  { id: "catalog", name: "Каталог" },
  { id: "certificates", name: "Сертификаты" },
  { id: "about-us", name: "О нас" },
  { id: "contacts", name: "Контакты" },
];

export const Header = () => {
  const [, setOpenModal] = useAtom(openMainModalForm);

  const [activeButton, setActiveButton] = useState<string | null>(
    mainMenuButtons[0].name
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useAtom(isMainMenuOpen);

  const [, setOpenMobileMenu] = useAtom(openMobileMenu);

  const activeSection = useActiveSection(mainMenuButtons);
  const scrollToSection = useScrollToSection();

  const handleMenuButtonClick = (id: string) => {
    scrollToSection(id, { offset: 200 });
  };

  const handleMobileMenuButtonClick = (id: string) => {
    setIsMobileMenuOpen(false);
    handleMenuButtonClick(id);
  };

  const handleBurgerClick = () =>
    isMobileMenuOpen ? setIsMobileMenuOpen(false) : setOpenMobileMenu();

  useEffect(() => setActiveButton(activeSection), [activeSection]);

  return (
    <>
      <header
        className={classNames(
          "w-full max-w-fit fixed z-30 top-2 lg:top-6 lg:-translate-x-1/2 lg:left-1/2 lg:right-[unset] right-2",
          "lg:bg-main_black/7 backdrop-blur-xl font-light select-none",
          "lg:rounded-base_border_radius box-border rounded-full p-5 lg:p-1.5 text-sm",
          "flex items-center",
          isMobileMenuOpen ? "bg-main_aqua" : "bg-main_black/5"
        )}
      >
        <div
          className="absolute w-full h-full lg:hidden"
          onClick={handleBurgerClick}
        />
        {!isMobileMenuOpen && (
          <img
            src="/images/burger-icon.svg"
            alt="Главное меню"
            className="lg:hidden"
          />
        )}
        {isMobileMenuOpen && (
          <img
            src="/images/close.svg"
            alt="Закрыть меню"
            className="lg:hidden"
          />
        )}

        <div className="hidden lg:flex lg:items-center">
          {mainMenuButtons.map((button, index) => (
            <HeaderButton
              key={index}
              text={button.name}
              isActive={activeButton === button.name}
              onClick={() => handleMenuButtonClick(button.id)}
            />
          ))}
        </div>
      </header>

      <section
        className={classNames(
          "fixed w-full h-full z-20 overflow-auto flex flex-col gap-3 lg:hidden",
          "transition-opacity duration-300 ease-in-out",
          "bg-main_black/20 backdrop-blur-[6px]",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute w-full h-full"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={classNames(
            "mt-[100px] bg-secondary p-6 box-border rounded-base_border_radius mx-auto max-w-[calc(100vw-20px)]",
            "w-full flex flex-col gap-3 mt-auto relative z-2"
          )}
        >
          {mainMenuButtons.map((button, index) => (
            <HeaderMobileButton
              key={index}
              text={button.name}
              isActive={activeButton === button.name}
              onClick={() => handleMobileMenuButtonClick(button.id)}
            />
          ))}
        </div>
        <div className="px-2 mb-10">
          <ContactButton
            text="Оставить заявку"
            fullWidth
            onClick={setOpenModal}
          />
        </div>
      </section>
    </>
  );
};
