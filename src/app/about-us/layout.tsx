import { Metadata } from 'next';
import { ReactNode } from 'react';

interface AboutLayoutProps {
  children: ReactNode;
}
export const metadata: Metadata = {
    title: "About Us | KrsiRoots",
    description:
      "About KrsiRoots",
  };
  

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  );
}
