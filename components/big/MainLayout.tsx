import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MainModalForm } from "./MainModalForm";
import { ProcessLoader } from "./ProcessLoader.";
import { MailSuccessModal } from "./MailSuccessModal";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <MainModalForm/>
      <ProcessLoader/>
      <MailSuccessModal/>
      <Header />
      {children}
      <Footer />
    </section>
  );
};
