import "../styles/globals.css";

//INTERNAL IMPORT
import { Footer, Banner } from "../Components";
import { TrackingProvider } from "../Conetxt/TrackingContext";
import NavBar from "./../Components/NavBar";

export default function app({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <NavBar />
        <Component {...pageProps} />
      </TrackingProvider>
      <Footer />
    </>
  );
}
