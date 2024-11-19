import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/navbarComponent";
import Banner from "@/components/bannerComponent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
    </div>
  );
}
