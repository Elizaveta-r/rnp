import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = localFont({
  src: [
    { path: "./fonts/Nunito-ExtraLight.woff2", weight: "200", style: "normal" },
    {
      path: "./fonts/Nunito-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    { path: "./fonts/Nunito-Light.woff2", weight: "300", style: "normal" },
    {
      path: "./fonts/Nunito-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    { path: "./fonts/Nunito-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Nunito-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/Nunito-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Nunito-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./fonts/Nunito-ExtraBold.woff2", weight: "800", style: "normal" },
    {
      path: "./fonts/Nunito-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    { path: "./fonts/Nunito-Black.woff2", weight: "900", style: "normal" },
    {
      path: "./fonts/Nunito-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${nunito.className} antialiased`}>
        <Header />

        <div className="sm:mt-20 mt-18 xl:px-0 sm:px-4 md:px-5 lg:px-6 px-3 xl:max-w-275 mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
