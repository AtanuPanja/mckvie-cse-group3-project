import Image from "next/image";
export default function CustomerSection() {
  return (
    <div>
      <section className="my-10 body-font">
        <div className="container mx-auto">
          <h2 className="title-font text-2xl my-2 font-medium text-center sm:text-3xl">
            Our Customers
          </h2>
          <div className="bg-gray-200 flex justify-around px-5 py-5 flex-wrap rounded-lg">
            <div className="m-10">
              <Image src="./logo.svg" width="100" height="100" />
              <p className="text-center">Brand</p>
            </div>
            <div className="m-10">
              <Image src="./logo.svg" width="100" height="100" />
              <p className="text-center">Brand</p>
            </div>
            <div className="m-10">
              <Image src="./logo.svg" width="100" height="100" />
              <p className="text-center">Brand</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
