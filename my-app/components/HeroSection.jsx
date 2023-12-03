const HeroSection = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col gap-2 sm:py-0 sm:px-2 xl:px-20 px-2 py-2`}
    >
      <div
        className={`flex-1 flex justify-center items-start flex-col xl:px-10 sm:px-16 px-0 overflow-hidden pt-24`}
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
        className={`flex-1 flex justify-center items-center md:my-0 my-5 relative`}
      >
        <img
          src={"./images/final_pro.png"}
          alt=""
          className="w-auto h-[80%] relative z-[5]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
