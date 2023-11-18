import Image from "next/image";
export default function CustomerSection() {
  return (
      <section className="bg-gray-100 py-10 body-font">
        <div className="container mx-auto">
          <h2 className="title-font text-2xl my-2 font-medium text-center sm:text-3xl">
            Our Customers
          </h2>
          <div className=" flex justify-around px-5 pt-5 flex-wrap rounded-lg">
            <figure className="m-10">
              <Image src="/shopping-bag.png" width="100" height="100" />
              <figcaption className="text-center">Shopper</figcaption>
            </figure>
            <figure className="m-10">
              <Image src="/online-store.png" width="100" height="100" />
              <figcaption className="text-center">EStore</figcaption>
            </figure>
            <figure className="m-10">
              <Image src="/mall.png" width="100" height="100" />
              <figcaption className="text-center">GenZ mall</figcaption>
            </figure>
          </div>
        </div>
      </section>
  );
}
