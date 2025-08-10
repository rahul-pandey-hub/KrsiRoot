import { Metadata } from 'next';
import { ReactNode } from 'react';

interface ServicesLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "KrsiRoots | Our Services",
  description:
    "Our Services",
};

const ServicesLayout = ({ children }: ServicesLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  );
};

export default ServicesLayout;