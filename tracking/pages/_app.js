import "../styles/globals.css";

//INTERNAL IMPORT
import { Footer, Banner } from "../Components";
import { TrackingProvider } from "../Conetxt/TrackingContext";
import BackToTop from "./../Components/BackToTop";

export default function app({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <Component {...pageProps} />
        <BackToTop />
      </TrackingProvider>
    </>
  );
}
