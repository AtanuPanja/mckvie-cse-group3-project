import Image from "next/image";
function Slide({ heading, content, image }) {
  const imageBoxStyles = {
    maxWidth: "720px",
    height: "420px",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <div>
      <div className="container mx-auto flex px-5 py-20 pb-8 flex-col items-center md:flex-row">
        <div className="flex flex-col mb-16 items-center text-center lg:flex-grow lg:pr-24  md:items-start md:text-left md:mb-0 md:w-1/2 md:pr-16 ">
          <h1 className="title-font text-3xl mb-4 font-medium sm:text-4xl">
            {heading}
          </h1>
          <p className="mb-8 leading-relaxed">{content}</p>
          <div className="">
            <button className="ml-4 inline-flex justify-center items-center text-indigo-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-200 hover:text-indigo-900 rounded text-lg">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          style={imageBoxStyles}
          className="flex items-center justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <Image
            className="object-contain object-center rounded"
            style={imageStyles}
            alt="hero"
            src={image}
            width={"720"}
            height={"600"}
          />
        </div>
      </div>
    </div>
  );
}

export default Slide;