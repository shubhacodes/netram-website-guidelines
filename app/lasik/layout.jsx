import { ContactDialogProvider } from "@/components/lasik/contact-dialog-provider";

export const metadata = {
  title: "LASIK Surgery - Netram Eye Hospital - Best Eye Hospital in Delhi NCR",
  description: "Experience freedom from glasses with Blade-Free & Touchless LASIK at Netram Eye Hospital. Safe, precise, painless vision correction by Dr. Anchal Gupta, 19+ years trusted care."
};

export default function LasikLayout({ children }) {
  return (
    <ContactDialogProvider>
      {children}
    </ContactDialogProvider>
  );
}