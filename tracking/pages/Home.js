import Image from "next/image";

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

const HeroSection = () => {
  const testimonialCardStyles = "lg:w-1/3 m-10 p-5 rounded-lg shadow-inner shadow-indigo-600";
  return (
    <>
    <section
      id="home"
      className={`flex md:flex-row flex-col gap-2 sm:py-0 sm:px-2 xl:px-10 px-2 py-2 mt-2`}
    >
      <div
        className={`flex-2 flex justify-center items-start flex-col xl:px-5 sm:px-16 px-0 overflow-hidden pt-24`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold sm:text-[30px] xl:text-[52px] text-white sm:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text_gradient">Generation</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[52px] text-[35px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Supply Chain management system
        </h1>
        <p
          className={`font-normal text-white text-[15px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div
        className={`flex-1 flex justify-center items-center md:my-1 my-5 relative`}
      >
        <img
          src={"./images/final_pro.png"}
          alt=""
          className="w-auto h-[80%] relative z-[5]"
        />
      </div>

    </section>
      <section className="text-white py-10 body-font">
        <div className="container mx-auto">
          <h2 className="title-font text-2xl my-2 font-medium text-center sm:text-3xl">
            Our Customers
          </h2>
          <div className=" flex justify-around px-5 pt-5 flex-wrap rounded-lg">
            <figure className="m-10">
              <Image
                src="/shopping-bag.png"
                alt="Shopper"
                title="Shopper"
                width="100"
                height="100"
              />
              <figcaption className="text-center">Shopper</figcaption>
            </figure>
            <figure className="m-10">
              <Image
                src="/online-store.png"
                alt="EStore"
                title="EStore"
                width="100"
                height="100"
              />
              <figcaption className="text-center">EStore</figcaption>
            </figure>
            <figure className="m-10">
              <Image
                src="/mall.png"
                alt="GenZ mall"
                title="GenZ mall"
                width="100"
                height="100"
              />
              <figcaption className="text-center">GenZ mall</figcaption>
            </figure>
          </div>
        </div>
      </section>
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
            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Find out more
            </button>
        </div>
      </section>

      <section className=" text-slate-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h3 className="text-3xl text-slate-200 text-center font-medium mb-4">
            Testimonials
          </h3>
          <div className="flex justify-center flex-wrap">
            {/*  */}
            <div className={testimonialCardStyles}>
              <div className="h-1/2 text-center">
                <figure className="flex flex-col items-center">
                  <img
                    alt="George Bluth"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={"./images/1-image.jpg"}
                    width={100}
                    height={100}
                  />
                  <figcaption className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam repellat magni at expedita! Impedit temporibus minima
                    sunt, quas magnam rerum praesentium. Dolor nisi beatae
                    doloremque?
                  </figcaption>
                </figure>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-slate-100 font-medium title-font tracking-wider text-sm">
                  GEORGE BLUTH
                </h2>
                <p className="text-slate-500">Blockchain enthusiast</p>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className={testimonialCardStyles}>
              <div className="h-full text-center">
                <figure>
                  <img
                    alt="Janet Weaver"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={"./images/2-image.jpg"}
                    width={100}
                    height={100}
                  />
                  <figcaption className={"leading-relaxed"}>
                    Veritatis reiciendis optio recusandae? Cum vitae, aliquam
                    blanditiis earum tempore excepturi perferendis accusamus
                    repellat itaque esse sint, iusto similique accusantium
                    ipsam. Necessitatibus laudantium debitis magnam.
                  </figcaption>
                </figure>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-slate-100 font-medium title-font tracking-wider text-sm">
                  JANET WEAVER
                </h2>
                <p className="text-slate-500">Senior Sales Manager</p>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className={testimonialCardStyles}>
              <div className="h-full text-center">
                <figure>
                  <img
                    alt="Emma Wong"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={"./images/3-image.jpg"}
                    width={100}
                    height={100}
                  />
                  <figcaption className={"leading-relaxed"}>
                    Eaque earum voluptas repudiandae error? Optio sit rerum
                    maxime debitis velit id dicta corrupti libero suscipit
                    asperiores consequuntur ex tenetur, aspernatur, eos iusto
                    unde? Dolorum?
                  </figcaption>
                </figure>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-slate-100 font-medium title-font tracking-wider text-sm">
                  EMMA WONG
                </h2>
                <p className="text-slate-500">Shopper CEO</p>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className={testimonialCardStyles}>
              <div className="h-full text-center">
                <figure>
                  <img
                    alt="Eve Holt"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={"./images/4-image.jpg"}
                    width={100}
                    height={100}
                  />
                  <figcaption className={"leading-relaxed"}>
                    Officia amet cumque recusandae aliquam labore aut commodi
                    odio veniam! Nihil in sunt provident alias expedita
                    aspernatur, quisquam, cum laborum consequatur quas culpa
                    ipsum reiciendis.
                  </figcaption>
                </figure>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  EVE HOLT
                </h2>
                <p className="text-slate-500">Supply Chain researcher</p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>



    </>
  );
};


export default HeroSection;
