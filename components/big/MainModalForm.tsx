import { useAtom } from "jotai";
import { BasicInput } from "../basic/BasicInput";
import { ContactButton } from "../basic/ContactButton";
import { SectionHeadline } from "../basic/SectionHeadline";
import { ModalWindow } from "./ModalWindow";
import {
  formSendMessage,
  isMainModalFormOpen,
  isMainModalFormProcedurePreset,
  processLoader,
} from "@/Jotay/atoms";
import { useEffect, useState } from "react";
import { sendFeedback } from "@/utils/sendFeedback";

export const MainModalForm = () => {
  const [isActive, setIsActive] = useAtom(isMainModalFormOpen);
  const [initialProcedure, setInitialProcedure] = useAtom(
    isMainModalFormProcedurePreset
  );
  const [, setLoader] = useAtom(processLoader);
  const [, setMessage] = useAtom<null | "sucess" | "error">(
    formSendMessage
  );

  const [phoneNumber, setPhoneNumber] = useState("");
  const [procedure, setProcedure] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);

    const result = await sendFeedback({
      phoneNumber,
      procedure,
    });

    if (result.success) {
      setLoader(false);
      setIsActive(false);
      setMessage("sucess");
      setPhoneNumber("")
    } else {
      setLoader(false);
      setMessage("error");
    }
  };

  const handleClose = () => {
    setIsActive(false);
    setInitialProcedure("");
    setProcedure("");
  };

  useEffect(() => {
    initialProcedure &&
      initialProcedure !== "" &&
      setProcedure(initialProcedure);
  }, [initialProcedure]);

  return (
    <ModalWindow isActive={isActive} onClose={handleClose}>
      <div className="text-center flex flex-col gap-1">
        <SectionHeadline text="Оставьте номер телефона" />
        <div className="text-sm">и мы обязательно свяжемся с вами!</div>
      </div>
      <form className="mt-6 flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <BasicInput
            placeholder="+7 ("
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <BasicInput
            placeholder="Процедура*"
            type="text"
            value={procedure}
            onChange={(e) => setProcedure(e.target.value)}
          />
        </div>
        <ContactButton text="Отправить заявку" fullWidth />
      </form>
    </ModalWindow>
  );
};
