import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata = {
  title: "Smart Mídia | Comunicação Visual em Foz do Iguaçu",
  description:
    "Smart Mídia: comunicação visual em Foz do Iguaçu. Transformamos ideias em presença com criatividade, design e soluções personalizadas para sua marca. Solicite um orçamento.",
  applicationName: "Smart Mídia Comunicação Visual",
  authors: [{ name: "Smart Mídia Comunicação Visual" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Smart Mídia Comunicação Visual",
    title: "Smart Mídia — Ideias que ganham forma. Marcas que ganham presença.",
    description:
      "Comunicação visual criativa e personalizada em Foz do Iguaçu. Conte sua ideia para a Smart Mídia.",
  },
  twitter: {
    card: "summary",
    title: "Smart Mídia — Ideias que ganham forma. Marcas que ganham presença.",
    description:
      "Comunicação visual criativa e personalizada em Foz do Iguaçu. Conte sua ideia para a Smart Mídia.",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/assets/favicons/favicon.ico" },
      { url: "/assets/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/assets/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#130913",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/images/hero/universo-smart-escuro.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
