import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header class="bg-indigo-600 text-white body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="./logo.svg" alt="logo" width={25} height={25}/>
          <span class="ml-3 text-white text-xl">AppName</span>
        </a>
        <nav class="flex flex-wrap items-center text-base justify-center md:ml-auto">
          <Link href="/" class="mr-5 hover:underline">Home</Link>
          <Link href="/about" class="mr-5 hover:underline">About</Link>
          <Link href="/services" class="mr-5 hover:underline">Services</Link>
          <Link href="contact" class="mr-5 hover:underline">Contact</Link>
        </nav>
        <button class="inline-flex items-center bg-violet-950 border-0 py-1 px-4 focus:outline-none hover:bg-white hover:text-violet-950 rounded-full text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
