import { Oswald, Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

export const metadata = {
  title: "Tarahara Run",
  description:
    "Tarahara Run is the non-profit organization based in Itahari, Nepal. It organizes running event to the local youths.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
