import { atom } from "jotai";

export const isMainMenuOpen = atom<boolean>(false);
export const isMainModalFormOpen = atom<boolean>(false);
export const isMainModalFormProcedurePreset = atom<string>("");

export const processLoader = atom<boolean>(false);
export const formSendMessage = atom<null | "sucess" | "error">(null);

export const closeAllModals = atom(null, (get, set) => {
  set(isMainMenuOpen, false);
  set(isMainModalFormOpen, false);
});

export const toggleMobileMenu = atom(null, (get, set) => {
  set(closeAllModals);
  set(isMainMenuOpen, !get(isMainMenuOpen));
});

export const openMainModalForm = atom(null, (get, set) => {
  set(closeAllModals);
  set(isMainModalFormOpen, true);
});
