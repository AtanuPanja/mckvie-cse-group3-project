import React, { useState, useEffect } from "react";
import "./About.css"; // Import your CSS file
import Link from "next/link";
const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("Overview");

  const menuItems = ["Overview", "Technology in use", "Future Goals", "FAQs"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    "https://www.projectmanager.com/wp-content/uploads/2019/06/190625_Blog_Feature_Change_Management.jpg",
    "https://m.foolcdn.com/media/dubs/images/original_imageshttpsg.foolcdn.comeditorialimag.width-880_6e7qpmQ.jpg",
    "https://www.yondu.com/wp-content/uploads/2021/04/creative-abstract-background-technology-blockchain-ultraviolet-background-scaled.jpg",
    "https://img.freepik.com/free-vector/logistics-hub-abstract-concept-vector-illustration-global-logistics-center-commercial-warehouse-distribution-hub-supply-chain-management-transportation-cost-optimization-abstract-metaphor_335657-1791.jpg",
    "https://media.licdn.com/dms/image/C5612AQE77qsyHOTUDQ/article-cover_image-shrink_720_1280/0/1520127752904?e=2147483647&v=beta&t=dvLSDTwjZzbIFY8tXE9WxUN074BTA_-dRkQ-8-_9VCM",
    "https://blog.vantagecircle.com/content/images/2023/01/10-Smart-Ways-to-Better-Team-Collaboration-1.png",
    "https://th.bing.com/th/id/OIG.i5rETr4oiOtZjNnxfcSe?pid=ImgGn",
    "https://th.bing.com/th/id/OIG.zgCSA0f2qNbQzSrED7HD?w=1024&h=1024&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIG.6fS2DHpq4qbERWzRwdtq?w=1024&h=1024&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIG.q8s5FcKc0HYH10w2syMo?pid=ImgGn",
    "https://th.bing.com/th/id/OIG.vmcag8CzXF1aCK5JUpNP?pid=ImgGn",
    "https://th.bing.com/th/id/OIG.LKfr_.1IqANlZqT7mQwC?w=1024&h=1024&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIG.jkjeL5medO_pTO0nT1pT?w=1024&h=1024&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIG.5YsCpXDQDQGvU82px5rs?pid=ImgGn",
  ];
  const changeImage = (direction) => {
    if (!isTransitioning) {
      setIsTransitioning(true);

      setCurrentImageIndex((prevIndex) => {
        if (direction === "left") {
          return (prevIndex - 1 + images.length) % images.length;
        } else {
          return (prevIndex + 1) % images.length;
        }
      });

      setTimeout(() => {
        setIsTransitioning(false);
      }, 4000); // Adjust the time based on your transition duration
    }
  };
  const menuClickHandler = (menu) => {
    setSelectedMenu(menu);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      changeImage("right"); // Auto-rotate to the next image every 3 seconds
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="app-container">
      <h1 className="heading">This is What We've Brought to Life!</h1>
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
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden relative">
                  <button
                    onClick={() => changeImage("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
                  >
                    {"<"}
                  </button>
                  <img
                    alt="feature"
                    className={`object-cover object-center h-full w-full transition-opacity duration-500 ease-in-out ${
                      isTransitioning ? "opacity-5" : "opacity-100"
                    }`}
                    src={images[currentImageIndex]}
                  />
                  <button
                    onClick={() => changeImage("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
                  >
                    {">"}
                  </button>
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
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M17,24H4V10H28v5h2V10a2.0023,2.0023,0,0,0-2-2H22V4a2.0023,2.0023,0,0,0-2-2H12a2.002,2.002,0,0,0-2,2V8H4a2.002,2.002,0,0,0-2,2V24a2.0023,2.0023,0,0,0,2,2H17ZM12,4h8V8H12Z"
                        />
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Efficient Inventory Management
                      </h2>
                      <p class="leading-relaxed text-base">
                        Streamline inventory levels and reduce carrying costs by
                        implementing real-time tracking and automation, ensuring
                        optimal stock levels at each stage of the supply chain.
                      </p>
                      <a
                        href="https://www.projectline.ca/blog/5-inventory-management-strategies"
                        target="_blank"
                        class="mt-3 text-indigo-500 inline-flex items-center"
                      >
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
                        <path d="M16.8,16.19c1.36-1.51,2.2-3.5,2.2-5.69C19,5.81,15.19,2,10.5,2C5.81,2,2,5.81,2,10.5c0,4.69,3.81,8.5,8.5,8.5 c1.77,0,3.41-0.54,4.78-1.47l5.08,4.24C20.55,21.92,20.77,22,21,22c0.29,0,0.57-0.12,0.77-0.36c0.35-0.42,0.3-1.06-0.13-1.41 L16.8,16.19z M4,10.5C4,6.92,6.92,4,10.5,4S17,6.92,17,10.5S14.08,17,10.5,17S4,14.08,4,10.5z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Enhanced Visibility and Transparency
                      </h2>
                      <p class="leading-relaxed text-base">
                        Improve end-to-end visibility across the supply chain,
                        providing stakeholders with real-time insights into the
                        movement of goods, inventory levels, and production
                        status for better decision-making.
                      </p>
                      <a
                        target="_blank"
                        href="https://www.qimaone.com/resource-hub/benefits-of-supply-chain-transparency#:~:text=Supply%20chain%20visibility%20is%20the,Corrective%20and%20preventive%20actions"
                        class="mt-3 text-indigo-500 inline-flex items-center"
                      >
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
                        {/*<circle cx="12" cy="7" r="4"></circle>*/}
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24 7.4051V13C24 14.1046 23.1046 15 22 15H21.9646C21.7219 16.6961 20.2632 18 18.5 18C16.7368 18 15.2781 16.6961 15.0354 15H9.96456C9.72194 16.6961 8.26324 18 6.5 18C4.73676 18 3.27806 16.6961 3.03544 15H2C0.89543 15 0 14.1046 0 13V2C0 0.89543 0.89543 0 2 0H15C16.1046 0 17 0.89543 17 2V3H19.3139C20.0157 3 20.6953 3.24605 21.2344 3.69534L22.9206 5.10046C23.6045 5.67044 24 6.51479 24 7.4051zM22 8V7.4051C22 7.1083 21.8682 6.8269 21.6402 6.6369L19.954 5.23178C19.7743 5.08202 19.5478 5 19.3139 5H17V8H22zM6.5 16C7.32843 16 8 15.3284 8 14.5C8 13.6716 7.32843 13 6.5 13C5.67157 13 5 13.6716 5 14.5C5 15.3284 5.67157 16 6.5 16zM18.5 16C19.3284 16 20 15.3284 20 14.5C20 13.6716 19.3284 13 18.5 13C17.6716 13 17 13.6716 17 14.5C17 15.3284 17.6716 16 18.5 16z"
                        />{" "}
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Optimized Logistics & Distribution
                      </h2>
                      <p class="leading-relaxed text-base">
                        Optimize transportation routes, minimize lead times, and
                        enhance overall distribution efficiency by leveraging
                        advanced analytics, route planning, and technology
                        integration within the supply chain network.
                      </p>

                      <a
                        href="https://fulltiltlogistics.com/what-is-logistics-and-distribution/#:~:text=While%20the%20two%20are%20both,such%20goods%20using%20thoughtful%20strategies."
                        target="_blank"
                        class="mt-3 text-indigo-500 inline-flex items-center"
                      >
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
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden relative">
                  <button
                    onClick={() => changeImage("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
                  >
                    {"<"}
                  </button>
                  <img
                    alt="feature"
                    className={`object-cover object-center h-full w-full transition-opacity duration-500 ease-in-out ${
                      isTransitioning ? "opacity-5" : "opacity-100"
                    }`}
                    src={images[currentImageIndex]}
                  />
                  <button
                    onClick={() => changeImage("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
                  >
                    {">"}
                  </button>
                </div>
                <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                  <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <rect
                            x="3"
                            y="3"
                            width="6"
                            height="6"
                            rx="1.5"
                            fill="currentColor"
                          ></rect>
                          <rect
                            x="3"
                            y="15"
                            width="6"
                            height="6"
                            rx="1.5"
                            fill="currentColor"
                          ></rect>
                          <rect
                            x="15"
                            y="3"
                            width="6"
                            height="6"
                            rx="1.5"
                            fill="currentColor"
                          ></rect>
                          <rect
                            x="15"
                            y="15"
                            width="6"
                            height="6"
                            rx="1.5"
                            fill="currentColor"
                          ></rect>
                          <rect
                            x="9"
                            y="9"
                            width="6"
                            height="6"
                            rx="1.5"
                            fill="currentColor"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Block Chain
                      </h2>
                      <p class="leading-relaxed text-base">
                        Leveraging the decentralized and secure nature of
                        blockchain to ensure transparent and tamper-resistant
                        transactions across the supply chain.
                      </p>
                      <a
                        href="https://www.bitstamp.net/learn/blockchain/the-role-of-blockchain-technology-in-supply-chain-management/"
                        target="blank_"
                        class="mt-3 text-indigo-500 inline-flex items-center"
                      >
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
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12" y2="8" />
                        <line x1="16" y1="12" x2="16" y2="16" />
                        <line x1="8" y1="12" x2="8" y2="16" />
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Smart Contracts
                      </h2>
                      <p class="leading-relaxed text-base">
                        Implementation of self-executing smart contracts on the
                        Ethereum blockchain, automating and enforcing
                        contractual agreements to streamline processes.
                      </p>
                      <a
                        href="https://www.gep.com/blog/mind/guide-to-smart-contracts-for-supply-chain"
                        target="blank_"
                        class="mt-3 text-indigo-500 inline-flex items-center"
                      >
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
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M21 2H3a2 2 0 00-2 2v16a2 2 0 002 2h18a2 2 0 002-2V4a2 2 0 00-2-2zM16 20v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6" />
                        <line x1="14" y1="12" x2="10" y2="12" />
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Decentralized Applications(DApps)
                      </h2>
                      <p class="leading-relaxed text-base">
                        Utilizing decentralized applications built on Ethereum
                        to provide an intuitive and user-friendly interface,
                        enhancing accessibility and user engagement in the
                        supply chain ecosystem.
                      </p>
                      <a
                        href="https://www.investopedia.com/terms/d/decentralized-applications-dapps.asp"
                        target="blank_"
                        class="mt-3 text-indigo-500 inline-flex items-center"
                      >
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
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden relative">
                  <button
                    onClick={() => changeImage("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
                  >
                    {"<"}
                  </button>
                  <img
                    alt="feature"
                    className={`object-cover object-center h-full w-full transition-opacity duration-500 ease-in-out ${
                      isTransitioning ? "opacity-5" : "opacity-100"
                    }`}
                    src={images[currentImageIndex]}
                  />
                  <button
                    onClick={() => changeImage("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
                  >
                    {">"}
                  </button>
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
                        Ensure Efficiency
                      </h2>
                      <p class="leading-relaxed text-base">
                        Efficiency is a fundamental aspect of supply chain
                        management and refers to fulfilling orders timely by
                        using the least amount of inventory.
                      </p>
                      <a
                        href="https://packagex.io/blog/goals-of-supply-chain-management "
                        target="blank_"
                        class="mt-3 text-indigo-500 inline-flex items-center"
                      >
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
                        {/*<circle cx="12" cy="7" r="4"></circle>*/}
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24 7.4051V13C24 14.1046 23.1046 15 22 15H21.9646C21.7219 16.6961 20.2632 18 18.5 18C16.7368 18 15.2781 16.6961 15.0354 15H9.96456C9.72194 16.6961 8.26324 18 6.5 18C4.73676 18 3.27806 16.6961 3.03544 15H2C0.89543 15 0 14.1046 0 13V2C0 0.89543 0.89543 0 2 0H15C16.1046 0 17 0.89543 17 2V3H19.3139C20.0157 3 20.6953 3.24605 21.2344 3.69534L22.9206 5.10046C23.6045 5.67044 24 6.51479 24 7.4051zM22 8V7.4051C22 7.1083 21.8682 6.8269 21.6402 6.6369L19.954 5.23178C19.7743 5.08202 19.5478 5 19.3139 5H17V8H22zM6.5 16C7.32843 16 8 15.3284 8 14.5C8 13.6716 7.32843 13 6.5 13C5.67157 13 5 13.6716 5 14.5C5 15.3284 5.67157 16 6.5 16zM18.5 16C19.3284 16 20 15.3284 20 14.5C20 13.6716 19.3284 13 18.5 13C17.6716 13 17 13.6716 17 14.5C17 15.3284 17.6716 16 18.5 16z"
                        />{" "}
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Optimize and standardize logistics
                      </h2>
                      <p class="leading-relaxed text-base">
                        Another key goal of supply chain management is
                        optimizing logistics. There are various ways to optimize
                        your logistics, and deploying modern technology is the
                        best way to do it.
                      </p>
                      <a
                        href="https://packagex.io/blog/goals-of-supply-chain-management "
                        target="blank_"
                        class="mt-3 text-indigo-500 inline-flex items-center"
                      >
                        {" "}
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
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="5" x2="12" y2="9" />
                        <line x1="12" y1="15" x2="12" y2="19" />
                        <line x1="7" y1="12" x2="9" y2="12" />
                        <line x1="15" y1="12" x2="17" y2="12" />
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Focus on improving quality
                      </h2>
                      <p class="leading-relaxed text-base">
                        The main goal of supply chain management is to
                        manufacture products and deliver them to the end
                        consumers. However, providing the product is not the
                        only goal; the quality of that product also matters.
                      </p>
                      <a
                        href="https://packagex.io/blog/goals-of-supply-chain-management "
                        target="blank_"
                        class="mt-3 text-indigo-500 inline-flex items-center"
                      >
                        {" "}
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
                      #FAQ1
                    </span>
                    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                      How does blockchain technology enhance supply chain
                      transparency?
                    </h2>
                    <p class="leading-relaxed mb-8">
                      Blockchain ensures transparency by recording and securing
                      every transaction in an immutable ledger. This enables
                      stakeholders to trace the journey of products from origin
                      to destination, providing a transparent view of the entire
                      supply chain.
                    </p>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                      <a
                        href="https://timesofindia.indiatimes.com/blogs/voices/how-can-blockchain-drive-transparency-in-supply-chain/"
                        target="blank_"
                        class="text-indigo-500 inline-flex items-center"
                      >
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4IN__u1kj8pcV9Ex5DPER-pNoCItSQUJyQ&usqp=CAU"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">
                          By Sourav Chandra
                        </span>
                        <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                          UI DEVELOPER
                        </span>
                      </span>
                    </a>
                  </div>
                  <div class="p-12 md:w-1/2 flex flex-col items-start">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                      #FAQ2
                    </span>
                    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                      What role do smart contracts play in supply chain
                      processes?
                    </h2>
                    <p class="leading-relaxed mb-8">
                      Smart contracts automate and enforce predefined rules
                      within the supply chain, facilitating seamless
                      transactions. They help reduce delays, eliminate
                      intermediaries, and ensure that contractual agreements are
                      executed automatically when conditions are met.
                    </p>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                      <a
                        href="https://www.sparkouttech.com/smart-contracts-revolutionary-role-supply-chain-management/#:~:text=Smart%20contracts%20provide%20Enhanced%20security,against%20tampering%20and%20hacking%20attempts."
                        target="blank_"
                        class="text-indigo-500 inline-flex items-center"
                      >
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
                        src="data:image/jpeg;base64,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"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">
                          By Ishika Ghosh
                        </span>
                        <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                          DESIGNER
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-12">
                  <div class="p-12 md:w-1/2 flex flex-col items-start">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                      #FAQ3
                    </span>
                    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                      How does blockchain mitigate the risk of counterfeit
                      products in the supply chain?
                    </h2>
                    <p class="leading-relaxed mb-8">
                      Blockchain's immutable ledger ensures that every product
                      and its associated information are recorded securely. This
                      prevents tampering and counterfeiting, as stakeholders can
                      verify the authenticity of products by accessing the
                      transparent and unchangeable records on the blockchain.
                    </p>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                      <a
                        href="https://intellectual-property-helpdesk.ec.europa.eu/news-events/news/use-blockchain-protect-against-counterfeiting-2022-09-16_en"
                        target="blank_"
                        class="text-indigo-500 inline-flex items-center"
                      >
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
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIYEhIYDw8fDxgYDx8SEhAZJSEnJyUhJCQpLjwzKSw4LSQkNEQ0OEZKTjdNKDFGSkg9SjxCNz8BDAwMDw8QGRIPGDEdGB02Pz8/Pz8/MTQ3Pz8xMTRAMTE/ND8xPzExPzFAPTpAOzQ0MTExMTQ4MTExMTExMTExMf/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBQYEB//EADsQAAIBAgMEBwYFAwQDAAAAAAECAAMRBBIhBTFBUQYTImFxgZEjMqGxwfBCYnLR4QcUM0NzkvFSU7L/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACARAQEBAAICAgMBAAAAAAAAAAABAhExIUEDEiIyUXH/2gAMAwEAAhEDEQA/ALACFBDAcY4M4O7m2k98inu8J10uE4tpn/H+qdNO5A8opHSG+cWaMg+sPLAdAZITugoIbCAQ5wIZcWjZ14wEloTIefKVeP21Soe8dfwqBcmZ7F9M6mnV01UX3ux18hNTNqXUjbFRvjXmBw/TSsrDrKashv7l8w+Mv9ndJKVYlVuG00I1tJc0mpV/CEFDoPCFaRSJg6w2TujqkAGMUJliI0tAAEx7xAQ7WgRMDGVNbmSExAwHijcYoFPSUDW2vfJifpI0HdCgc+1R2KZ/MJPQNwLa6CDtIA00/UJ10SAAALaCD0SUzvPKTKka/wBIV4DkWgN+0cPoY1jppABzp6yo2tjFp0zUdsqg7uLS4rDQ+BmF6bK1SglVSMocZwPvnE7L0qKVd8VWYLxO/iqzS4boeahXPqvO/wAZXdGsMlNAWKq7WJuwB8JusJihYAMDa3GTXyWV0z8Us5vbI7Z6EGivWUmJ33G8TNUHai4FrMpBnsi4imwytUXXgXE84/qFs4U3FRAApItbnLnVvisaxJOY3WzMSlSlTqLqCi2nXnt/EyPQvEVP7emt1K3a41zamaw/tKkHmigR7wHYwCYTSMtIHBjkwAdYztAMxlGsjzHhDpk7+8ShXiheUUCpQx23wAZGzm/pM8gsefZg94+c6qD6DjoJyYwexX9Rv6yaiTYeAlHUX1Nu6FmnPf5iSAwOgGLNukSHhJQIA1Tob8phukVFClT3gSCVXNZLk6G3Obiqlxb6yt2lhA1KoSBcK1pLeFzOWGxOBAtdC7fiNyPTlOrZWGxJWsKWbq0plmzOSVG7T0mgFenlGZAxAHnOnZG1hTNSmaJJcWtp2+4TH257dpn2ymDwgVxem7Oc1yTc35S32zhKy0KqMgNHq1Zbj2iOb7je1hbkN80KFBUBqUspPuFlF7d/fJttKKlMoNbgDfaLomVD0NqdXTp0zb3deYJ5zXE6TFPtCnhq1Om9yeqTMRbQXNrzYUKgdQykEEAqRuI4TpnmzmuOpJeIctCEA3vDWEO4kfDWSMfrIGaA7W+Ua4jDnBtvgTAxwZGrRXlEsUEmKQUxMDLc+UkUiHeTg5R4v/B4PJaZ0HgJHitaLfqEVE6DwmkTjX1ElE5wfpJAYE6mGGkCtDzSKmVoNcBlKncQwPhBUw3TMCN2hueQhYx9emQSCbEE7oWFpsHGtUtcWK2P0ix20EqBGQG9zmuoBI8jvjUdp5NRcETlfxr05t9xoahqFVNQ5gLWutnEqek+1xSwzlTZzlCa2a95w43b9RhYDXmd0xm1sU1WoASWIvbkPKMZutc1j5NfXJzjXqVDVJYkvcFmzMBwBPhPSOimKvTyXFrBl13A8p5hh0IB0udPXlL7Ym1TTdMpsQwB35SJ6rnx4eTOvPl6mTHvOHA1xVQODpxtznWFAnN0GZCYbHvkbCQOG4QSd8WnKK8BgT9mGt4AtDQwCI748EtGlFTGZzutHvFmhlHVDdXUJ3ZVtrxk1H3R4SOs3s6gtJKPujwlIkURwoggxxIqVQBCBEiDS72Vs1WAqVNxsVXmOZlktOXBQRmNlUt4C8skwHsqgcdp0YWP4RLR6qU1NgEQKSbCwAmOpdIzUxYLl6eGCMEUD3mO5n+Php4zVkz5reM29Me2G6tmUm5DuD3a7oRpibDaPR9apetRcPmJIAIKtpwMzVbAvqgDZs1rBe1fdunm3m8vRmxSY+rYWRbkmy8STKvbGyKmDKCpbrHQMdPcvwmxo7NGHqdZV/yLTfqEGpR7dlj3Ayg29iKmINPrmzFSyhz73cD8fWdccZ4l7rl8uftm2emeNYCxILAMdDznehV0sgAJtuPaveVmPolHAQkgrffqefynRgHJZFA7V1G6510nZ5I1mD6SDDo6gNmKpl/EoYj3vn8JstlYvraVNyRmKKWtznDsDoOmIovUYXJ/x5jZW0+Np2YHANhkFFhZkADd/fManDrnn277yNjGDGCbzCnJivGF40A4SGCv7cIt3jpDRyYo2sUCrAvEojKYYmnMNVB1dQ8csemeyvgInHs6n6INM9keAgTXjh4EG8DvwFEVKgB90at4S/OI7RXdYHdM/gHt2r/iAlpsslndjqAoC+O/9pvLUntaLRFRCjA9pbN9ZW7U2IhRygynQrbhaXOHq2ud62Fud+MlNVXBBW1wd+kbzLmz+mdXN8M3gNnMiA06jJexsLEX8CLTtwuAPbNQq1Q72ChWZbcbASegpGZbgZXPmPu/pOpAMxPDKZy+Gy4513HXVvNZja+zkRalSy5srZS17E24nynlO2DUqPZW7AINrBQTbU/TjPZNp0DVWoCCVsQv7/fKY2j0Uq1sSMykIoYliB2uQ0mfj/LV169M65445YF8G75L3BI0I5ffzl10YwN6lamKZdmQpTbIbKxsM1+Fr38p6BS6JCmBUcZyQVC5bKOO7ynXsrB06dZxTQBVylRa3aN7fM+k7+WZidtjglFNEQcAoAlJ0so6pUHFSG+n19JcYcnS/wB985ekNPPRe29MrD43+F5rU5zWeqxhB0F72HOAqWueJtHJOsBXv6CeWujoQyQSFGkqmalQSwzzkQMInSUSBopGDFArFMTmAphETTkTvanUJ4gD1jUj2V8BHJsjgjeDBQGy/pEeliTMflGveMW+kEtMq7kOVE7yTJ9l4ljnpi+rMdPIWnLimso/KFk2wmBquCDbKGUhrWM6xqfry1+Aw5ABc62FgPdWWDKh327pX4fE986lcGdI53muJ6YWrpoGWw03cf3kdZyVyKe2CFY2twuT6GQ7ZxZpFagXMoIL2GoHP0vOfCV0aszAnKQG1P39rPBec6uJ7r0Sc5lvpfYbCAAC3AXnXRw6jUDhOKlihznYlae7OZmST04XnumxdNCpDaC4INtFMyeHWolaohAv15yHeMmUZW9L+c2WbzB3jhMnjmy4l+AVBk7weHrp5SVvF7i+oNaw3xV0zo4P4lYeVrffjOTBOSAOJ+XOWBGk0xfDztjI1Bve3ATqxelSoBuFRwPWRhp5rlqaEghgRkaGDHC8laFaCTHzGFK0UcNFDKoWHeRKZLNsIqzWBOYCwOhNriS0nuqcsiyt2o+XLpe9762nZhfcp/oWL0Tt0kRggJHiIg0EP2h4iRUmMJNwN5BgbExNs/AjKCOVr/xCr87gTjwwXrWI3lCDybUazTpP1aajjCJ1LtBraSnpk2A3WGpO6dq3KWXeRqbWAE1yyfGYt2UglGGvZ1z+U4sA5AIAIIZg1+46H0ktOnvPvW943svrI9n1jeqhUWOcht7XBG48rAzNzbqVr7SR308Uy790tcNjtAbyuwlIVARzVhrz4RsFTL06i/jRiR4cRNeYnitJTxAIBBuDMxtGrnxb66ZEG/da9/nJ8HijldeJUsn6hvHnM9sqqa9eoFuSazKe4b7+kWtZz22+yluDU56J3CWJGkhwyBVAtawFoWovc3320tNuWvLB7QPtqv8AvVPmZCDC2gfbVf8Aeqf/AEYGUzz3tpKrQlMiQQgZBPeIfvIgYaN8jAJYoKtFAqAYZaRAw5tzcO1f9M/ntLHDe4v6BOTGstgGUNrp2rG8lw1e6Lpbsi0Wzgk8uoHS8C/GMKg1EUy0kexvOXC4UmpmvZVuW437pLeSYNvfuLi62+M3PLU144dmG7Tai4B3czLMuoBBsL8DrOKiyKuYqAb6C2+T03qPcqqqOZX71lghrkHmQBoS1x6yv2dUP9y6gHKyld249oc+8cJc0qSC5qkuSALHU+krcNSIrCogI9ohy8hcGaz2b6i32I5zkbxa+msmzdTirnRX38tZX0fZ1QbjRjoDwlttumTTSoDcqeIintW7VbqXZQeyTmQjesXRjDgvUrEEZ3spANjuufXTyM59rVTWppb/ACCw8Zodj4cU6aIDqqKCQts0Ttq3jK1B0Gt4FZ7WhMfOQ4rVfAiac4weKYmpUvv6x7+sBWMWJa9SoR/7Ht6xlOs89VMrGEDIrw0aRUkcd0AmOrSgxFGvFIKTUNlO8d8lUyuwdM537LhTbKXGssV0m3OOXHISadv/ACMlp6Bf0iFWA0530j0kJCn8ok1PC57GIQjBYrTDZwZZYPDjJmO7MbytUawMbt9MJkWorOrEns71ms3yXwuM4ve1+V+E6KeNsdRYfKRbJ25gq47FRb21U2DjyOsu0p0CAVysDu7IJnWQ5iuTE03JHunxsDJkQlSqsaY/MCoPna0nr4NCMy0xoRmFgNPKd2Br9YLFSjAC4MsnlbZ9WbFM5sudbi9tJbGtnpFTqbEb9LiHtXAFu0AQRxtrOBK9lZXykEG/Ak94O+OknlX7Pp5qpHBQSeIvw3zX4YHTQ8OIH0ma2PTsXcWAZjay8B9mabCDTefvwlhq+XRfu+M4tqYrq6btxCNl8eHxk9R7XmU6Q7QzsKanQElvoJNXiMxSpeTqZCpkymcWhAyRRykIElpyArwgIAENT3yggIowaKAi9Opdc4BtpcziqYKov4c45rrMLh8VUqGxqE2ItrqJqMHja1MCzncN5vN/65efTvp0y1+ybgct0CgpAsTe14qu3CV7SjNY6gb42HPYB5i5kWf2pQYQgKIYEy0fIOEyXTV/aU15UySPE/xNcizFdOLjEJbd1CX/AOTS5nlnXTM0KhR86sVYG6lSQy995ptmdOMVR0f2q66lrVPX+Jly3fHtedGZqzp6fgP6iUf9Quh43TNr4i8sl6e4Zmv/AHAB/NTI+k8cNuPMSara53HsiGvvf49uo9O8MdDWonTi+X5yDG9KNnuhYVUV9MqowqOx5AC954i1pd9C9mnEYymASFQ53Nt1jp8bS80m/PT2HB1bWCJm3XJHHjNBhmOW5FvAWlTQwjgALUJGmh0+X7SzS4Bv3b5qNVybXxXV02a+ovbx4TEZiSSdSSSZNtzbH9xi2w6G9OkpLkcX3W8gfW8g6s8DOWuyDElQyJQfCSqJhoQMMNI7xxAlQxwZGDpHBgSCKAbxQPP9lKM50tuvNIu4eUqcGVzsAACDz3y1WWsQzJeWFLcPKcazrXdAmVoYkAvJFMolAMxnTdPa0250QD/yJE2aGZvplQzJTfkzA+f/AEYz2lnhhSOcYToeneQ1Kdp0czMpN+YkZUm/nDSqNzesFnAGh32v6SAQl56r/TTZXV0GrMtnqP2eeQaD43+E8qVidN3lPTNk9IMRhKdGnUprVpqiA6ZKiaaC40Nu8X74+0lnLpid3+PTsKvHlK3pltYYXCVKgNqh7NH9Z3emp8pz7E6W4OvZRU6pyxASpZCx5A3sfC95jP6ibV67EiirXp0rgjgX/EfLQes6GtKvolTJ66o1yxdbsd7HUmaUSm6JrejUJ0vXfh3CXZTvnDXa56K0QaK30jGZbFmhAgyKSXhBZe+MCba6xXiUwolMUe4igeb7JZutuTpY75rE3CKKa0556TIdZ0LFFJ6UV46x4oEyNK/bmG6yhUHFVLDy/i8UUe19MI1PQHxnM68Iop0cnHVH1kdJLkxRSo0/RjYJqsKri1NGFvzsPpNlVwAfQi44xRTy/Jq/Z7Pik+qm6TbOp0uosoBbOSTv0t+8pXtrrqb3O+KKen4/1jzfJ+1a3YtAU6FMDeRmPeTrO0xRTF7bhAxG0UUilaK8UUB7w7xRSLDiKKKB/9k="
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">
                          By Atreyee Kar
                        </span>
                        <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                          UI DEVELOPER
                        </span>
                      </span>
                    </a>
                  </div>
                  <div class="p-12 md:w-1/2 flex flex-col items-start">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                      #FAQ4
                    </span>
                    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                      What benefits does decentralized finance (DeFi) bring to
                      supply chain finance processes?
                    </h2>
                    <p class="leading-relaxed mb-8">
                      DeFi solutions in supply chain management streamline
                      financial transactions by removing the need for
                      traditional intermediaries. This leads to faster and more
                      cost-effective payment processes, improving liquidity and
                      financial efficiency within the supply chain.
                    </p>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                      <a
                        href="https://www.antiersolutions.com/decentralized-finance-a-revolutionary-evolution-in-supply-chain-financing/#:~:text=Decentralized%20Smart%20Contracts,eliminate%20the%20need%20for%20intermediaries."
                        target="blank_"
                        class="text-indigo-500 inline-flex items-center"
                      >
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
                        src="https://media.licdn.com/dms/image/C4E03AQFK_ANyeceFLQ/profile-displayphoto-shrink_800_800/0/1613665356174?e=1705536000&v=beta&t=7cSD7PZQM-7N90Jlv1m25ufKLN2nGrk5KQpiGTeNNAg"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">
                          By Atanu Panja
                        </span>
                        <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                          DESIGNER
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                  <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                      Curious Minds Welcome: Have a Question Beyond the FAQs?
                    </h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                      Let us know, and we'll get back to you with the answers
                      you seek! Feel free to drop us a message or reach out
                      through our contact form below.
                    </p>
                  </div>
                  <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                      <div class="p-2 w-1/2">
                        <div class="relative">
                          <label
                            for="name"
                            class="leading-7 text-sm text-gray-600"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div class="p-2 w-1/2">
                        <div class="relative">
                          <label
                            for="email"
                            class="leading-7 text-sm text-gray-600"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div class="p-2 w-full">
                        <div class="relative">
                          <label
                            for="message"
                            class="leading-7 text-sm text-gray-600"
                          >
                            My Query
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          ></textarea>
                        </div>
                      </div>
                      <div class="p-2 w-full">
                        <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                          Submit
                        </button>
                      </div>
                      <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                        <span class="inline-flex"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
        <h1 className="heading">Transforming Supply Chains in Four Steps</h1>
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
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect
                    x="2"
                    y="2"
                    width="12"
                    height="12"
                    rx="1.5"
                    ry="1.5"
                  ></rect>
                  <path d="M4 6h8M4 8h8M8 2v12"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Conception and Planning:
                </h2>
                <p class="leading-relaxed">
                  Conduct in-depth research on blockchain technology and its
                  potential applications in supply chain management.
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
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect
                      x="3"
                      y="3"
                      width="6"
                      height="6"
                      rx="1.5"
                      fill="currentColor"
                    ></rect>
                    <rect
                      x="3"
                      y="15"
                      width="6"
                      height="6"
                      rx="1.5"
                      fill="currentColor"
                    ></rect>
                    <rect
                      x="15"
                      y="3"
                      width="6"
                      height="6"
                      rx="1.5"
                      fill="currentColor"
                    ></rect>
                    <rect
                      x="15"
                      y="15"
                      width="6"
                      height="6"
                      rx="1.5"
                      fill="currentColor"
                    ></rect>
                    <rect
                      x="9"
                      y="9"
                      width="6"
                      height="6"
                      rx="1.5"
                      fill="currentColor"
                    ></rect>
                  </g>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Blockchain Development
                </h2>
                <p class="leading-relaxed">
                  Technology Selection: Choose the appropriate blockchain
                  platform and technology stack for the supply chain project.
                  Smart Contract Development: Design and deploy smart contracts
                  to automate and secure transactions within the supply chain.
                  Integration: Integrate blockchain seamlessly into existing
                  supply chain processes and systems.
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
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="7" y1="7" x2="17" y2="17"></line>
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Testing and Optimization
                </h2>
                <p class="leading-relaxed">
                  Conduct rigorous testing to ensure the reliability, security,
                  and efficiency of the blockchain-based system
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
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
                  <line x1="6" y1="14" x2="18" y2="14"></line>
                  <line x1="6" y1="18" x2="18" y2="18"></line>
                  <line x1="12" y1="2" x2="12" y2="14"></line>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Deployment and Maintenance
                </h2>
                <p class="leading-relaxed">
                  Establish protocols for continuous monitoring, updates, and
                  improvements to enhance the system's performance over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 className="heading">A-Team Behind the Scenes</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              "Turning Ideas into Reality: Your A-Team Making IT Happen!"
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
                    Navigating the complexities of integrating blockchain into
                    our supply chain, I orchestrated seamless collaboration,
                    ensuring each team member was a vital link in the successful
                    implementation.
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
                    <a
                      href="https://www.linkedin.com/in/arindam-sal-065289194/"
                      target="blank_"
                      class="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>{" "}
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
                    As a blockchain developer, I coded the secure backbone of
                    our supply chain, transforming abstract concepts into a
                    decentralized reality, forging a transparent and resilient
                    system.
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
                    <a
                      href="https://www.linkedin.com/in/atanu-panja-2b081a200/"
                      target="blank_"
                      class="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>{" "}
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
                    Streamlining logistics through blockchain, I witnessed a
                    paradigm shift in efficiency, optimizing routes and reducing
                    lead times, ultimately enhancing the overall distribution
                    network.
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
                    <a
                      href="https://www.linkedin.com/in/atreyee-kar-6535b5215/"
                      target="blank_"
                      class="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>{" "}
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
                    Driving sustainability initiatives in our supply chain, I
                    witnessed a powerful synergy between blockchain and
                    eco-conscious practices, ensuring our impact on the
                    environment was as efficient as our operations.
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
                    <a
                      href="https://www.linkedin.com/in/sourav-chandra-9402751b2/"
                      target="blank_"
                      class="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>{" "}
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
                    Securing our supply chain's digital fortress, I fortified
                    our system with robust encryption and compliance measures,
                    ensuring the trust and privacy of every transaction within
                    the blockchain network.
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
                    <a
                      href="https://www.linkedin.com/in/ishika-ghosh-a6a55b236/"
                      target="blank_"
                      class="ml-2 text-gray-500"
                    >
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
