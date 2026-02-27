import { Inter } from "next/font/google";
import "./globals.css";
import GlobalParticles from "./particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "James Barbour",
  description: "My Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className} text-white`}>
        <GlobalParticles />
        {children}
      </body>
    </html>
  );
}
