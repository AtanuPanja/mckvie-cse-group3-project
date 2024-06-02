import { useContext } from "react";

import { TrackingContext } from "../Conetxt/TrackingContext";
import MagicButton from "./ui/MagicButton";

export default () => {
  const { currentUser, connectWallet } = useContext(TrackingContext);

  return (
    <nav
      className={`md:text-sm fixed top-0 left-0 w-full bg-black-500 px-auto z-50`}
    >
      <div className="flex md:flex-row items-center mx-20">
        <div className="flex items-center py-3 basis-1/2">
          <img
            src="./images/logo.png"
            alt="logo"
            className="w-10 h-15 cursor-pointer"
          />
          <h1 className="ml-3 font-extrabold text-2xl">
            Spy <span className="font-medium text-gray-300">Chain</span>
          </h1>
        </div>
        <div className={`flex-1 items-center mt-8 md:mt-0 md:flex `}>
          <div className="flex-1 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            {currentUser ? (
              <MagicButton
                title={currentUser.slice(0, 25)}
                handleClick={() => {
                  console.log("click");
                }}
              />
            ) : (
              <MagicButton
                title={"Connect Wallet"}
                handleClick={() => connectWallet()}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
