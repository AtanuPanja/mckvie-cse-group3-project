import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
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
          <div className="gradient-bg-welcome text-slate-100">
            <Navbar />
            <BackToTop />
            <div className="lg:px-20">
              {children}
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
