"use client";

import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";
import ContactDialog from "./contact-dialog";

const ContactDialogContext = createContext({
  openContactDialog: () => {},
});

export const useContactDialog = () => {
  return useContext(ContactDialogContext);
};

export function ContactDialogProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactDialog = () => {
    setIsOpen(true);
  };

  return (
    <ContactDialogContext.Provider value={{ openContactDialog }}>
      {children}
      <ContactDialog isOpen={isOpen} onOpenChange={setIsOpen} />
    </ContactDialogContext.Provider>
  );
}
