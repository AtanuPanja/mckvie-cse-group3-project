import React from "react";

function LoginLayout(props) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.username);
    console.log(event.target.password);
  }

  const containerStyles =
    "min-h-screen sm:bg-cover md:bg-contain lg:bg-cover xl:bg-contain flex justify-center items-center flex-wrap py-2 md:mx-auto bg-gradient-to-r from-blue-700 via-cyan-800 to-blue-950 font-custom-trebuchet-ms";

  const loginCardStyles =
    "flex flex-col justify-center items-center bg-slate-200 p-5 rounded-lg w-[400px]";

  const loginFormStyles = "flex flex-col justify-center";

  const loginCardHeadingStyles =
    "text-center text-violet-900 font-bold text-3xl my-6";

  const formLabelStyles = "block mb-1 font-bold text-xl text-violet-900 ";

  const formInputStyles =
    "block rounded-sm border-2 border-slate-600 border-t-black border-l-black py-2 px-4 w-full focus:outline-indigo-600";

  const loginCardCSS = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  };
  return (
    <div className={containerStyles}>
      <article className={loginCardStyles} style={loginCardCSS}>
        <img src={props.image} alt="Logo" width={50} height={50} />
        <h2 className={loginCardHeadingStyles}>Login to your Account</h2>
        <form
          className={loginFormStyles}
          onSubmit={(event) => handleSubmit(event)}
        >
          <section className="mb-4">
            <label className={formLabelStyles} htmlFor="username">
              Username
            </label>
            <input
              className={formInputStyles}
              type="text"
              id="username"
              name="username"
              placeholder="johndoe"
              required
            />
          </section>
          <section className="mb-4">
            <label className={formLabelStyles} htmlFor="password">
              Password
            </label>
            <input
              className={formInputStyles}
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
            />
          </section>
          <section className="flex flex-wrap justify-center items-center gap-10 mt-5">
            <label className="inline-block cursor-pointer text-violet-900 font-semibold text-lg">
              <input
                type="checkbox"
                name="forgot-password"
                className="cursor-pointer focus:outline-indigo-600"
              />{" "}
              Remember me
            </label>
            <a className="inline-block underline text-blue-800 hover:no-underline focus:no-underline focus:outline-none" href="#">
              Forgot password?
            </a>
          </section>
          <button
            className="mt-8 text-lg py-3 px-9 rounded-full text-slate-200 border-none bg-indigo-600 hover:bg-indigo-800 focus:bg-indigo-800 focus:outline-none"
            type="submit"
          >
            Login
          </button>
        </form>
      </article>
    </div>
  );
}

export default LoginLayout;
