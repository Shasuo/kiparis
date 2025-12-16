import { ContactButton } from "@/components/basic/ContactButton";
import { mainMenuButtons } from "@/components/big/Header";
import { mainPhone } from "@/constants/phones";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { isMainModalFormOpen } from "@/Jotay/atoms";
import { useAtom } from "jotai";

export const FirstScreen = () => {
  const openMainModalForm = useAtom(isMainModalFormOpen)[1];
  const scrollToSection = useScrollToSection();

  const handleCityClick = () => {
    scrollToSection(mainMenuButtons[3].id, { offset: 200 });
  };

  return (
    <section
      className="w-full rounded-base_border_radius box-border p-8"
      style={{
        backgroundImage: "url('/images/main-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <img src={"/images/first-screen-logo.svg"} className="mx-auto" />
      <div className="font-normal text-[26px] lg:text-[56px] text-main_white uppercase leading-7 lg:leading-16 text-center mt-10">
        Методики
        <br className="lg:hidden" /> коррекции фигуры <br /> мирового уровня
      </div>
      <div></div>
      <div className="mt-10 lg:max-w-[400px] mx-auto">
        <ContactButton
          text="Оставить заявку"
          fullWidth
          onClick={() => openMainModalForm(true)}
        />
      </div>
      <div className="mt-6 w-full flex flex-col gap-2 lg:flex-row max-w-fit mx-auto lg:max-w-[unset] lg:flex items-center justify-between lg:text-2xl text-[20px] font-normal text-main_white underline">
        <a
          href={mainPhone.link}
          target="_blank"
          className="block hover:opacity-88 active:opacity-60"
        >
          {mainPhone.title}
        </a>
        <div
          onClick={handleCityClick}
          className="flex items-center gap-1 hover:opacity-88 active:opacity-60 cursor-pointer"
        >
          <img src="/images/pin.svg" />
          Новосибирск
        </div>
      </div>
    </section>
  );
};
