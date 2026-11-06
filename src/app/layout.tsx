import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "School + Hostel ERP",
  description: "Bilingual school and hostel management dashboard",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
