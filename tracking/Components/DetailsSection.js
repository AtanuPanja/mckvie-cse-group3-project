import Link from "next/link";

function TickMarkIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4 pt-1 pr-1 rounded-full shadow-md shadow-indigo-600"
      viewBox="0 0 24 24"
    >
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
  );
}

function DetailsSection() {
  return (
    <section className=" text-slate-100 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-slate-200 mb-4">
            Unleashing Supply Chain Brilliance
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Empower your supply chain with our innovative features, driving
            efficiency and excellence in every step. Unleash the power of
            next-gen features for a seamless supply chain experience.
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:w-3/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className=" rounded flex p-4 h-full items-center">
              <TickMarkIcon />
              <span className="title-font font-medium">
                Improved Traceability
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className=" rounded flex p-4 h-full items-center">
              <TickMarkIcon />
              <span className="title-font font-medium">Increased Security</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className=" rounded flex p-4 h-full items-center">
              <TickMarkIcon />
              <span className="title-font font-medium">
                Customization and Scalability
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className=" rounded flex p-4 h-full items-center">
              <TickMarkIcon />
              <span className="title-font font-medium">
                Cost Savings through Automation
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className=" rounded flex p-4 h-full items-center">
              <TickMarkIcon />
              <span className="title-font font-medium">
                Sustainable and Ethical Practices
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className=" rounded flex p-4 h-full items-center">
              <TickMarkIcon />
              <span className="title-font font-medium">
                Improved Supplier Collaboration
              </span>
            </div>
          </div>
        </div>
        <Link href="/about" className="mr-5 ">
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Find out more
          </button>
        </Link>
      </div>
    </section>
  );
}

export default DetailsSection;
