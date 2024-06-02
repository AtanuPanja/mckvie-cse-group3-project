import { useState } from "react";
import { Str1 } from "../Components/index";
import { Cross } from "./SVG/SvgProvider";
import { SubmitButton } from "./ui/SubmitButton";

export default ({ startModal, setStartModal, startShipment }) => {
  const [getProduct, setGetProduct] = useState({
    reveiver: "",
    index: "",
  });

  const startShipping = () => {
    startShipment(getProduct);
  };
  return startModal ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setStartModal(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-black rounded-md shadow-lg border-[0.5px] border-white">
          <div className="flex justify-end">
            <button
              className="text-gray-200 mr-2"
              onClick={() => setStartModal(false)}
            >
              <Cross />
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-100">
              Start The Shipping
            </h4>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="receiver"
                  className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onChange={(e) =>
                    setGetProduct({
                      ...getProduct,
                      reveiver: e.target.value,
                    })
                  }
                />
              </div>
              <div className="relative my-3">
                <input
                  type="text"
                  placeholder="Id"
                  className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onChange={(e) =>
                    setGetProduct({
                      ...getProduct,
                      index: e.target.value,
                    })
                  }
                />
              </div>

              <SubmitButton
                title={"Start shipment"}
                handleClick={() => startShipping()}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
