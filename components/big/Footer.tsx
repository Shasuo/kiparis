import { mainPhone } from "@/constants/phones";

export const Footer = () => {
  return (
    <footer className="w-full bg-main_aqua box-border pt-10 pb-[150px] flex flex-col gap-6 font-medium text-main_white">
      <img src={"/images/first-screen-logo.svg"} className="mx-auto" />

      <p className="text-base mx-auto max-w-[200px] text-center">
        Новосибирск, Большевиcтская, 177/24
      </p>
      <a
        href={mainPhone.link}
        target="_blank"
        className="text-2xl block w-fit mx-auto underline"
      >
        {mainPhone.title}
      </a>
    </footer>
  );
};
