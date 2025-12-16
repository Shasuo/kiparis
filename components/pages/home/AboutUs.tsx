import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import { SectionHeadline } from "@/components/basic/SectionHeadline";
import { ContactButton } from "@/components/basic/ContactButton";
import { useAtom } from "jotai";
import { isMainModalFormOpen } from "@/Jotay/atoms";

const imagesNames = ["1", "2", "3", "4", "5"];

export const AboutUs = () => {
  const openMainModalForm = useAtom(isMainModalFormOpen)[1];
  return (
    <section className="text-center flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <SectionHeadline text="О нас" />
        <div className="text-sm font-normal max-w-[260px] mx-auto">
          "КИПАРИС" - это место, где заботятся о здоровье и молодости вашего
          тела.
        </div>
      </div>

      <Swiper
        spaceBetween={24}
        slidesPerView={"auto"}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        grabCursor
        modules={[Autoplay]}
      >
        {imagesNames.map((name, index) => (
          <SwiperSlide key={index} className="max-w-[270px]">
            <img
              src={`/images/slider/${name}.webp`}
              alt={name}
              className="rounded-base_border_radius"
            />
          </SwiperSlide>
        ))}
        <SwiperSlide className="max-w-[270px]">
          <img
            src={`/images/slider/3.webp`}
            alt={"name"}
            className="rounded-base_border_radius"
          />
        </SwiperSlide>
      </Swiper>
      <div className="text-sm font-normal flex flex-col gap-1 max-w-[400px] mx-auto">
        <p>
          Наша главная задача - через совершенствование внешнее, поддерживать
          внутреннюю женскую гармонию.
        </p>
        <p>
          Мы используем аппаратные массажные методики мирового уровня, дающие
          высокие результаты уже с первых процедур.
        </p>
      </div>

      <ContactButton
        text="Оставить заявку"
        onClick={() => openMainModalForm(true)}
      />
    </section>
  );
};
