import Image from "next/image";

function TestimonialsSection() {

  const testimonialCardStyles = "lg:w-1/3 m-10 p-5 rounded-lg shadow-inner shadow-indigo-600";

  return (
    <>
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
                  <Image
                    alt="George Bluth"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://reqres.in/img/faces/1-image.jpg"
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
                  <Image
                    alt="Janet Weaver"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://reqres.in/img/faces/2-image.jpg"
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
                  <Image
                    alt="Emma Wong"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://reqres.in/img/faces/3-image.jpg"
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
                  <Image
                    alt="Eve Holt"
                    className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://reqres.in/img/faces/4-image.jpg"
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
}

export default TestimonialsSection;
