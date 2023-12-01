import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AppName",
  description:
    "Our product uses the powers of blockchain to make supply chain traceable and trackable, empowering businesses and customers with an authentic and safe product chain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <Navbar />
            {/* back to top link */}
            <a
              href="#"
              className="inline-block rounded-full px-5 py-3  fixed bottom-8 right-5 bg-indigo-800 text-white z-50 focus:outline focus:outline-gray-100"
            >
              &uarr;
            </a>
            {children}
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
