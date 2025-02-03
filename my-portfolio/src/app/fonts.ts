import localFont from "next/font/local";

export const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
});

export const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

export const novaMono = localFont({
  src: "../../public/fonts/NovaMono-Regular.ttf",
  variable: "--font-nova-mono",
  weight: "100 900",
  display: 'swap',
}); 