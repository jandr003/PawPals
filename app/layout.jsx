import "./global.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata = {
  title: "PawPals",
  description: "A pet adoption website where you can browse and adopt pets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className="m-0 p-0">{children}</body>
    </html>
  );
}