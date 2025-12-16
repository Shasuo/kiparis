import { mainMenuButtons } from "@/components/big/Header";
import { AboutUs } from "@/components/pages/home/AboutUs";
import { Catalog } from "@/components/pages/home/Catalog";
import { Certificates } from "@/components/pages/home/Certificates";
import { Contacts } from "@/components/pages/home/Contacts";
import { FirstScreen } from "@/components/pages/home/FirstScreen";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 w-full max-w-[600px] lg:max-w-[1280px] box-border px-4 lg:px-0 pt-4 lg:pt-[100px]">
      <FirstScreen />
      <div id={mainMenuButtons[0].id}>
        <Catalog />
      </div>
      <div id={mainMenuButtons[1].id}>
        <Certificates />
      </div>
      <div id={mainMenuButtons[2].id}>
        <AboutUs />
      </div>
      <div id={mainMenuButtons[3].id}>
        <Contacts />
      </div>
    </main>
  );
}
