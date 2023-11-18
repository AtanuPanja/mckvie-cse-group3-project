import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-indigo-600 text-white body-font sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="./logo.svg" alt="logo" width={25} height={25} />
          <span className="ml-3 text-white text-xl">AppName</span>
        </a>
        <nav className="flex flex-wrap items-center text-base justify-center md:ml-auto">
          <Link href="/" className="mr-5 hover:underline">
            Home
          </Link>
          <Link href="/about" className="mr-5 hover:underline">
            About
          </Link>
          <Link href="/services" className="mr-5 hover:underline">
            Services
          </Link>
          <Link href="contact" className="mr-5 hover:underline">
            Contact
          </Link>
        </nav>
        <button className="inline-flex items-center bg-violet-950 border-0 py-1 px-4 focus:outline-none hover:bg-white hover:text-violet-950 rounded-full text-base mt-4 md:mt-0">Get Started
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
