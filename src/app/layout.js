import "./styles/app.scss";
import { Inter } from "next/font/google";
import Header from "./ui/layout/Header";
import Footer from "./ui/layout/Footer";
import Script from "next/script";

// import Chat from "./ui/chat/Chat";

import { Suspense } from "react";

const WEBHOOK_N8N_CHAT_STATUS =
  process.env.NEXT_PUBLIC_WEBHOOK_N8N_CHAT_STATUS === "true";

// thin:        100
// extra light: 200
// light:       300
// regular:     400
// medium:      500
// semi bold:   600
// bold:        700
// black:       800
// ultra black: 900

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "400", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://riocuarto.gob.ar";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  openGraph: {
    title: "Gobierno ",
    description:
      "Portal oficial del Emos  Río Cuarto. Encuentra noticias, trámites, programas y más.",
    images: ["images/og-image.png"],
  },
  title: {
    default: "Emos Río Cuarto | Portal Oficial",
    template: "%s | Emos Río Cuarto", // %s se reemplazará por el título de cada página
  },
  description:
    "Portal oficial del Emos Río Cuarto. Encuentra noticias, trámites, programas y más.",
  keywords: [
    "gobierno",
    "emos",
    "municipalidad",
    "trámites",
    "noticias",
    "programas",
    "eventos",
    "servicios",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js" />

      <body className={`${inter.variable}`}>
        <Header />
        {children}
        <Footer />
        {/* <Chat /> */}
        <Suspense> </Suspense>
      </body>
    </html>
  );
}
