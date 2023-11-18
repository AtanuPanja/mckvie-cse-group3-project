import Image from "next/image";

export default function RatingSection() {
  return (
    <>
      <section className="bg-gray-100 text-gray-600 body-font">
        <h3 className="text-3xl text-black text-center">Testimonials</h3>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center flex-wrap -m-4">

            {/*  */}
            <div className="lg:w-1/2 lg:mb-0 mb-6 p-10">
              <div className="h-full text-center">
                <figure>
                  <Image
                    alt="George Bluth"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://reqres.in/img/faces/1-image.jpg"
                    width={200}
                    height={200}
                  />
                  <figcaption className="leading-relaxed">has successfully harnessed the transformative power of blockchain to create a supply chain solution that addresses critical pain points in the industry. Its commitment to transparency, efficiency, and traceability sets a new standard for supply chain management. As a blockchain enthusiast, I am excited to witness the positive impact [Project Name] will undoubtedly have on the future of supply chains, paving the way for a more secure, transparent, and efficient global trade ecosystem.</figcaption>
                </figure>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  GEORGE BLUTH
                </h2>
                <p className="text-gray-500">Blockchain enthusiast</p>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="lg:w-1/2 lg:mb-0 mb-6 p-10">
              <div className="h-full text-center">
                <figure>
                  <Image
                    alt="Janet Weaver"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://reqres.in/img/faces/2-image.jpg"
                    width={200}
                    height={200}
                  />
                  <figcaption className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                    ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                    adaptogen squid fanny pack vaporware.
                  </figcaption>
                </figure>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  JANET WEAVER
                </h2>
                <p className="text-gray-500">Senior Sales Manager</p>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="lg:w-1/2 lg:mb-0 p-10">
              <div className="h-full text-center">
                <figure>  
                  <Image
                    alt="Emma Wong"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://reqres.in/img/faces/3-image.jpg"
                    width={200}
                    height={200}
                  />
                  <figcaption className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                    ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                    adaptogen squid fanny pack vaporware.
                  </figcaption>
                </figure>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  EMMA WONG
                </h2>
                <p className="text-gray-500">Shopper CEO</p>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="lg:w-1/2 lg:mb-0 p-10">
              <div className="h-full text-center">
                <figure>  
                  <Image
                    alt="Eve Holt"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://reqres.in/img/faces/4-image.jpg"
                    width={200}
                    height={200}
                  />
                  <figcaption className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                    ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                    adaptogen squid fanny pack vaporware.
                  </figcaption>
                </figure>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  EVE HOLT
                </h2>
                <p className="text-gray-500">Supply Chain researcher</p>
              </div>
            </div>
            {/*  */}

          </div>
        </div>
      </section>
    </>
  );
}
