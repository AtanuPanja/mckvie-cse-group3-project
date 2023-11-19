import Image from "next/image";

function TestimonialsSection() {
  return (
    <>
      <section className="bg-gray-100 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h3 className="text-3xl text-black text-center font-medium mb-4">
            Testimonials
          </h3>
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
                  <figcaption className="leading-relaxed">
                    [AppName] has successfully harnessed the transformative
                    power of blockchain to create a supply chain solution that
                    addresses critical pain points in the industry. Its
                    commitment to transparency, efficiency, and traceability
                    sets a new standard for supply chain management. As a
                    blockchain enthusiast, I am excited to witness the positive
                    impact [AppName] will undoubtedly have on the future of
                    supply chains, paving the way for a more secure,
                    transparent, and efficient global trade ecosystem.
                  </figcaption>
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
                    [App Name] impresses as a top-tier solution for Senior Sales
                    Managers, seamlessly leveraging blockchain for unparalleled
                    transparency in the supply chain. Smart contracts accelerate
                    operations and reduce errors, empowering sales teams for
                    strategic focus. The app's traceability features communicate
                    product authenticity and compliance effortlessly. With its
                    user-friendly interface and adaptability, [App Name] emerges
                    as a strategic ally, not just for operational efficiency but
                    as a key player in building client trust and driving sales
                    growth in the modern supply chain.
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
                    As CEO of our e-commerce startup, I'm impressed by how [App
                    Name] seamlessly integrates blockchain into our supply
                    chain. This app enhances transparency, building trust with
                    customers through real-time visibility. Smart contracts
                    streamline operations, allowing our team to focus
                    strategically. With a user-friendly interface and
                    traceability features, [App Name] aligns perfectly with our
                    vision for a secure, transparent, and efficient e-commerce
                    experience.
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
                    As a supply chain researcher, I find [App Name] to be a
                    commendable application of blockchain in revolutionizing
                    supply chain dynamics. The app's adept use of blockchain
                    technology ensures a secure and transparent supply chain,
                    addressing critical issues of trust and traceability. Smart
                    contracts streamline processes, promising operational
                    efficiency. [App Name] stands out for its potential to
                    reshape traditional supply chain models, offering valuable
                    insights for researchers and practitioners alike. Its
                    real-time visibility, coupled with traceability features,
                    presents a compelling case for enhancing overall supply
                    chain resilience and reliability.
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

export default TestimonialsSection;