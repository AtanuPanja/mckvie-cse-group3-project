import React, { useState } from "react";
import "./About.css"; // Import your CSS file

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("Overview");

  const menuItems = ["Overview", "Technology in use", "Future Goals", "FAQs"];

  const menuClickHandler = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="app-container">
      <h1 className="heading">This is what we have Implemented</h1>
      <ul className="menu">
        {menuItems.map((menu) => (
          <li
            key={menu}
            className={menu === selectedMenu ? "active" : ""}
            onClick={() => menuClickHandler(menu)}
          >
            {menu}
          </li>
        ))}
      </ul>
      <div className="content-container">
        {/*<div className="left-panel">*/}
        <div className="content">
          {selectedMenu === "Overview" && (
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                  <img
                    alt="feature"
                    class="object-cover object-center h-full w-full"
                    src="https://www.projectmanager.com/wp-content/uploads/2019/06/190625_Blog_Feature_Change_Management.jpg"
                  />
                </div>
                <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                  <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Shooting Stars
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        The Catalyzer
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Neptune
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {selectedMenu === "Technology in use" && (
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                  <img
                    alt="feature"
                    class="object-cover object-center h-full w-full"
                    src="https://www.yondu.com/wp-content/uploads/2021/04/creative-abstract-background-technology-blockchain-ultraviolet-background-scaled.jpg"
                  />
                </div>
                <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                  <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Shooting Stars
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        The Catalyzer
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Neptune
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {selectedMenu === "Future Goals" && (
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                  <img
                    alt="feature"
                    class="object-cover object-center h-full w-full"
                    src="https://media.licdn.com/dms/image/C5612AQE77qsyHOTUDQ/article-cover_image-shrink_720_1280/0/1520127752904?e=2147483647&v=beta&t=dvLSDTwjZzbIFY8tXE9WxUN074BTA_-dRkQ-8-_9VCM"
                  />
                </div>
                <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                  <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Shooting Stars
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        The Catalyzer
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Neptune
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {selectedMenu === "FAQs" && (
            <section class="text-gray-600 body-font overflow-hidden">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-12">
                  <div class="p-12 md:w-1/2 flex flex-col items-start">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                      CATEGORY
                    </span>
                    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                      Roof party normcore before they sold out, cornhole vape
                    </h2>
                    <p class="leading-relaxed mb-8">
                      Live-edge letterpress cliche, salvia fanny pack humblebrag
                      narwhal portland. VHS man braid palo santo hoodie brunch
                      trust fund. Bitters hashtag waistcoat fashion axe chia
                      unicorn. Plaid fixie chambray 90's, slow-carb etsy
                      tumeric. Cray pug you probably haven't heard of them
                      hexagon kickstarter craft beer pork chic.
                    </p>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                      <a class="text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                    <a class="inline-flex items-center">
                      <img
                        alt="blog"
                        src="https://dummyimage.com/104x104"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">
                          Holden Caulfield
                        </span>
                        <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                          UI DEVELOPER
                        </span>
                      </span>
                    </a>
                  </div>
                  <div class="p-12 md:w-1/2 flex flex-col items-start">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                      CATEGORY
                    </span>
                    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                      Pinterest DIY dreamcatcher gentrify single-origin coffee
                    </h2>
                    <p class="leading-relaxed mb-8">
                      Live-edge letterpress cliche, salvia fanny pack humblebrag
                      narwhal portland. VHS man braid palo santo hoodie brunch
                      trust fund. Bitters hashtag waistcoat fashion axe chia
                      unicorn. Plaid fixie chambray 90's, slow-carb etsy
                      tumeric.
                    </p>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                      <a class="text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                    <a class="inline-flex items-center">
                      <img
                        alt="blog"
                        src="https://dummyimage.com/103x103"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">
                          Alper Kamu
                        </span>
                        <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                          DESIGNER
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}
          {/*</div>*/}
        </div>
        {/*
        <div className="right-panel">
          <div className="content">
            {selectedMenu === "Overview" && (
              <div>
                <img
                  src="https://cdn.ttgtmedia.com/rms/onlineImages/erp-supply_chain_management_mobile.png"
                  alt="Overview"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 20)",
                    transition: "transform 3s ease-in-out",
                  }}
                />
              </div>
            )}
            {selectedMenu === "Technology in use" && (
              <div>
                <img
                  src="https://www.yondu.com/wp-content/uploads/2021/04/creative-abstract-background-technology-blockchain-ultraviolet-background-scaled.jpg"
                  alt="Technology in use"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 20)",
                    transition: "transform 3s ease-in-out",
                  }}
                />
              </div>
            )}
            {selectedMenu === "Future Goals" && (
              <div>
                <img
                  src="https://www.selecthub.com/wp-content/uploads/2022/08/SCM-Trends.jpg"
                  alt="Future Goals"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 20)",
                    transition: "transform 3s ease-in-out",
                  }}
                />
              </div>
            )}
            {selectedMenu === "FAQs" && <div></div>}
          </div>
                </div>*/}
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  The Catalyzer
                </h2>
                <p class="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  The 400 Blows
                </h2>
                <p class="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Neptune
                </h2>
                <p class="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
              OUR TEAM
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://media.licdn.com/dms/image/D4D03AQHpUjPqXRX2zg/profile-displayphoto-shrink_800_800/0/1690040456311?e=1705536000&v=beta&t=gNf3SejrKMN_mJ9ZFA10UAtkTXdfnxiDRRpmu9QfwDI"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Hi, I'm Arindam
                  </h2>
                  <h3 class="text-gray-500 mb-3">UI Developer</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://media.licdn.com/dms/image/C4E03AQFK_ANyeceFLQ/profile-displayphoto-shrink_800_800/0/1613665356174?e=1705536000&v=beta&t=7cSD7PZQM-7N90Jlv1m25ufKLN2nGrk5KQpiGTeNNAg"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Hii, I'm Atanua
                  </h2>
                  <h3 class="text-gray-500 mb-3">UI Developer</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://media.licdn.com/dms/image/C4D03AQGHVrAe88VgqQ/profile-displayphoto-shrink_800_800/0/1655873529140?e=1705536000&v=beta&t=OsC39fjDPc9CCoMcQNU31T5A0qBoqWDIjz7nwMB1tug"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Hi, I'm Atreyee
                  </h2>
                  <h3 class="text-gray-500 mb-3">UI Developer</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://media.licdn.com/dms/image/D5603AQHA2vDzUyjK4Q/profile-displayphoto-shrink_800_800/0/1686147964747?e=2147483647&v=beta&t=r_JBP6HFgMiGKhwTja_BV3SC7SGB3FT3CJdP20GtaDQ"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Hi, I'm Sourav
                  </h2>
                  <h3 class="text-gray-500 mb-3">UI Developer</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="data:image/jpeg;base64,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"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Hi, I'm Ishika
                  </h2>
                  <h3 class="text-gray-500 mb-3">UI Developer</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
