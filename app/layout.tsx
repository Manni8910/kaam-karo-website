import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KaamKaro - India's Job Marketplace",
  description: "Find jobs or hire workers near you. India's fastest growing job marketplace for blue-collar and skilled workers.",
  keywords: "jobs india, job search, hire workers, blue collar jobs, skilled workers india",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
