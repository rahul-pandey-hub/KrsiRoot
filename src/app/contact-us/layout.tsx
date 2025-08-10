import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us",
};

const ContactUsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ContactUsLayout;
