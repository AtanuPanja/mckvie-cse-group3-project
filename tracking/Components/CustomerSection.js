import Image from "next/image";
export default function CustomerSection() {
  return (
    <section className="text-white py-10 body-font">
      <div className="container mx-auto">
        <h2 className="title-font text-2xl my-2 font-medium text-center sm:text-3xl">
          Our Customers
        </h2>
        <div className=" flex justify-around px-5 pt-5 flex-wrap rounded-lg">
          <figure className="m-10">
            <Image
              src="/images/shopping-bag.png"
              alt="Shopper"
              title="Shopper"
              width="100"
              height="100"
            />
            <figcaption className="text-center">Shopper</figcaption>
          </figure>
          <figure className="m-10">
            <Image
              src="/images/online-store.png"
              alt="EStore"
              title="EStore"
              width="100"
              height="100"
            />
            <figcaption className="text-center">EStore</figcaption>
          </figure>
          <figure className="m-10">
            <Image
              src="/images/mall.png"
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
  );
}
