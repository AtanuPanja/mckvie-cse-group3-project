import Image from "next/image";

export default function RatingSection() {
  return (
    <>
      <section className="bg-indigo-200 py-5 body-font">
        <h2 className="my-2 title-font text-2xl font-medium text-gray-700 text-center">Overall Rating</h2>
        <div  className="flex flex-wrap justify-center items-center">
          <Image 
            src="/chart.svg"
            width="300"
            height="300"
            />
          <h2 className="title-font text-2xl font-bold text-gray-800 text-center sm:text-3xl"><span className="text-indigo-700">3.6</span> out of 5</h2>
        </div>
      </section>
    </>
  );
}
