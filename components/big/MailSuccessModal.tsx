import { formSendMessage } from "@/Jotay/atoms";
import classNames from "classnames";
import { useAtom } from "jotai";

export const MailSuccessModal = () => {
  const [modalState, setModalState] = useAtom<null | "sucess" | "error">(
    formSendMessage
  );

  return (
    <section
      onClick={() => setModalState(null)}
      className={classNames(
        "fixed left-0 top-0 w-full h-full bg-main_white/70 flex items-center justify-center z-40",
        "transition-opacity duration-300 ease-in-out text-center text-2xl",
        modalState
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      {modalState === "sucess" && (
        <div>
          <img
            src="/images/success.svg"
            alt="Успех"
            className="mx-auto w-[60px]"
          />
          Заявка отправлена
        </div>
      )}
      {modalState === "error" && (
        <div>
          <img
            src="/images/error.svg"
            alt="Ошибка"
            className="mx-auto w-[60px]"
          />
          Ошибка отправки
        </div>
      )}
    </section>
  );
};
