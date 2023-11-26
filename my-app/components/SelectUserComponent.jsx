import React from "react";
import Link from "next/link";
function SelectUserComponent() {
  const containerStyles =
    "min-h-screen sm:bg-cover md:bg-contain lg:bg-cover xl:bg-contain flex justify-center items-center gap-y-4 flex-wrap py-2 md:mx-auto bg-gradient-to-r from-blue-700 via-cyan-800 to-blue-950";

  const userCardStyles =
    "flex flex-col justify-center items-center w-[200px] h-[350px] p-10 relative md:w-[350px] md:h-[450px] rounded-lg";

  const userCardHeadingStyles =
    "font-custom-trebuchet-ms font-bold text-xl md:text-2xl text-center text-slate-200";

  const userCardButtonStyles =
    "mt-4 bg-slate-200 py-2 px-6 rounded-3xl transition hover:bg-transparent outline hover:outline-slate-200 hover:text-slate-200 focus:bg-transparent focus:outline-slate-200 focus:text-slate-200";

  const userCardCSS = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 5)",
    // borderRadius: "8px 0px 0px 8px",
    // top-left top-right bottom-right bottom-left
  };

  return (
    <div className={containerStyles}>
      <section
        style={userCardCSS}
        className={userCardStyles + " bg-violet-900"}
      >
        <img
          src="./Manufacturer.png"
          alt="Manufacturer"
          width={100}
          height={100}
        />
        <h1 className={userCardHeadingStyles}>MANUFACTURER</h1>
        <Link href="manufacturer-login" className={userCardButtonStyles + " text-violet-900"}>
          More Options
        </Link>
      </section>

      <section
        style={userCardCSS}
        className={userCardStyles + " bg-violet-800"}
      >
        <img src="./Supplier.png" alt="Supplier" width={100} height={100} />
        <h1 className={userCardHeadingStyles}>SUPPLIER</h1>
        <Link href="supplier-login" className={userCardButtonStyles + " text-violet-800"}>
          More Options
        </Link>
      </section>

      <section
        className={userCardStyles + " bg-violet-700"}
        style={userCardCSS}
      >
        <img src="./Retailer.png" alt="Retailer" width={100} height={100} />
        <h1 className={userCardHeadingStyles}>RETAILER</h1>
        <Link href="retailer-login" className={userCardButtonStyles + " text-violet-700"}>
          More Options
        </Link>
      </section>
    </div>
  );
}

export default SelectUserComponent;
