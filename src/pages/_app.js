import { BookingProvider } from "@/store/parkingSlotsData";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return <div>
    <Head>
        <title>Wallet Parking</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Explore our wallet parking app for easy and fast parking solutions." />
      </Head><BookingProvider>
    <Component {...pageProps} />
    </BookingProvider></div>;
}
