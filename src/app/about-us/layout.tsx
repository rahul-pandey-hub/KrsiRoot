import { Metadata } from 'next';
import { ReactNode } from 'react';

interface AboutLayoutProps {
  children: ReactNode;
}
export const metadata: Metadata = {
    title: "About Us | rsiRoots",
    description:
      "About rsiRoots",
  };
  

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  );
}
