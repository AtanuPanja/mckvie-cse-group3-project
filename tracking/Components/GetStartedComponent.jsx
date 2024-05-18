import React from "react";

function GetStartedComponent() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-800 via-blue-500 to-blue-900">
      <article className="flex flex-col justify-center items-center w-[300px] px-10 py-20 bg-blue-800 rounded-lg shadow-lg shadow-black/20">
        <img
          src="./Initial.png"
          alt="Initial"
          width={80}
          height={80}
          className="m-0 mx-auto"
        />
        <h5 className="font-custom-trebuchet-ms font-extrabold text-4xl text-center text-stone-200 mt-6 mb-10 border-4 border-violet-700 border-t-slate-800 border-l-slate-800">
          IDENTIFY YOURSELF
        </h5>
        <a
          href="/select-user"
          s
          className="flex justify-center items-center p-7 pt-4 rounded-full bg-stone-200 outline-none text-indigo-800 hover:bg-indigo-800 hover:text-stone-200 focus:outline-none focus:bg-indigo-800 focus:text-stone-200 transition border-2 border-slate-500 border-t-slate-800 border-l-slate-800"
        >
          <span className="text-6xl leading-none">&#8594;</span>
        </a>
      </article>
    </div>
  );
}

export default GetStartedComponent;
