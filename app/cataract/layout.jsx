import { ContactDialogProvider } from "@/components/cataract/contact-dialog-provider";

export const metadata = {
  title: "Cataract Surgery - Netram Eye Hospital - Best Eye Hospital in Delhi NCR",
  description: "Regain clear vision with advanced Cataract Surgery at Netram Eye Hospital. Trusted by 1L+ patients, led by Dr. Anchal Gupta, 19+ years expertise."
};

export default function CataractLayout({ children }) {
  return (
    <ContactDialogProvider>
      {children}
    </ContactDialogProvider>
  );
}