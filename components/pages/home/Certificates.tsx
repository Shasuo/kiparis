import { BasicInput } from "@/components/basic/BasicInput";
import { ContactButton } from "@/components/basic/ContactButton";
import { SectionHeadline } from "@/components/basic/SectionHeadline";
import { formSendMessage, processLoader } from "@/Jotay/atoms";
import { sendCertificate } from "@/utils/sendCertificate";
import { useAtom } from "jotai";
import { useState } from "react";

export const Certificates = () => {
  const [, setLoader] = useAtom(processLoader);
  const [, setMessage] = useAtom<null | "sucess" | "error">(formSendMessage);

  const [procedure, setProcedure] = useState<string>("");
  const [toWhom, setToWhom] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleRestFields = () => {
    setPhoneNumber("");
    setProcedure("");
    setToWhom("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);

    const result = await sendCertificate({
      phoneNumber,
      procedure,
      toWhom,
    });

    if (result.success) {
      setLoader(false);
      setMessage("sucess");
      handleRestFields();
    } else {
      setLoader(false);
      setMessage("error");
    }
  };
  return (
    <section className="flex flex-col gap-6">
      <div className="text-center">
        <SectionHeadline text="Сертефикаты" />
      </div>
      <div
        style={{
          backgroundImage: "url('/images/cert-back.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="mx-auto flex flex-col gap-6 p-8 rounded-base_border_radius"
      >
        <img
          src="/images/certificate.webp"
          alt="Сертефикат"
          className="mx-auto max-w-[400px] w-full"
        />

        <form
          className="max-w-[360px] w-full flex flex-col gap-6 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-3">
            <BasicInput
              placeholder="На услугу / сумму"
              type="text"
              required
              value={procedure}
              onChange={(e) => setProcedure(e.target.value)}
            />
            <BasicInput
              placeholder="Кому"
              type="text"
              required
              value={toWhom}
              onChange={(e) => setToWhom(e.target.value)}
            />
            <BasicInput
              placeholder="+7 ("
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <ContactButton text="Отправить заявку" fullWidth />
        </form>
      </div>
    </section>
  );
};
