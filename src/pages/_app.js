import { BookingProvider } from "@/store/parkingSlotsData";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <BookingProvider>
    <Component {...pageProps} />
    </BookingProvider>;
}
