import { BlockPointTitle } from "@/components/basic/BlockPointTitle";
import { SectionHeadline } from "@/components/basic/SectionHeadline";
import { mainPhone } from "@/constants/phones";
import classNames from "classnames";

export const Contacts = () => {
  return (
    <section className={classNames("flex flex-col gap-6")}>
      <div className="text-center">
        <SectionHeadline text="Контакты" />
      </div>
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className="bg-secondary rounded-base_border_radius max-w-[800px] mx-auto box-border p-6 w-full flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4 text-center">
          <div className="flex flex-col gap-2">
            <BlockPointTitle text={"Адрес:"} bg="white" />
            <BlockPointTitle
              text={"Новосибирск, Большевиcтская, 177/24"}
              bg="aqua"
            />
          </div>
          <div className="flex flex-col gap-2">
            <BlockPointTitle text={"Номер / номер WhatsApp"} bg="white" />
            <a
              href={mainPhone.link}
              target="_blank"
              className="underline text-main_white hover:opacity-88"
            >
              <BlockPointTitle text={mainPhone.title} bg="aqua" />
            </a>
          </div>
        </div>

        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=82.973869%2C54.993785&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNTk4MzMzMTk0ElXQoNC-0YHRgdC40Y8sINCd0L7QstC-0YHQuNCx0LjRgNGB0LosINCR0L7Qu9GM0YjQtdCy0LjRgdGC0YHQutCw0Y8g0YPQu9C40YbQsCwgMTc3LzI0IgoN6vOlQhU3-VtC&z=15.84"
          height="400"
          //@ts-ignore
          frameBorder="1"
          //@ts-ignore
          allowFullScreen
          style={{ position: "relative" }}
          className="mx-auto rounded-base_border_radius w-full"
        ></iframe>
      </div>
    </section>
  );
};
