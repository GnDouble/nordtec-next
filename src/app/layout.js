import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "NORDTEC – Experten für Elektrotechnik",
  description: "NORDTEC ist dein zuverlässiger Partner für Elektroinstallationen, Smart Home, Gerätewartung und Sicherheitsprüfungen. Professionelle Planung und moderne Technik für dein Zuhause oder Unternehmen.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="font-sans">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
