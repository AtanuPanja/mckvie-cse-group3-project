import Image from "next/image";
export default function Hero() {
  return (
    <div>
      <section className="bg-indigo-600 text-white body-font">
        <div className="container mx-auto flex px-5 py-24 flex-col items-center md:flex-row">
          <div className="flex flex-col mb-16 items-center text-center lg:flex-grow lg:pr-24  md:items-start md:text-left md:mb-0 md:w-1/2 md:pr-16 ">
            <h1 className="title-font text-3xl mb-4 font-medium sm:text-4xl">
              Heading
              <br className="hidden lg:inline-block" /> extended heading
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              fugit iste molestias sapiente, optio dolores animi ea praesentium
              sit ipsum dicta adipisci facere veniam consectetur possimus!
              Eveniet dicta labore, repellendus aliquid esse officiis debitis
              natus?
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">
                Primary
              </button>
              <button className="ml-4 inline-flex text-indigo-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-200 hover:text-indigo-900 rounded text-lg">
                Secondary
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="./business_deal.svg"
              width="720"
              height="600"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
