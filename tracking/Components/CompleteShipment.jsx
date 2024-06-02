import { useState } from "react";
import ListItem from "./ui/ListItem";
import MagicButton from "./ui/MagicButton";
import { SubmitButton } from "./ui/SubmitButton";
import { Cross } from "./SVG/SvgProvider";

export default ({ completeModal, setCompleteModal, completeShipment }) => {
  const [completeShip, setCompleteShip] = useState({
    recevier: "",
    index: "",
  });

  const changeStatus = async () => {
    completeShipment(completeShip);
  };
  return completeModal ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setCompleteModal(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-black rounded-xl shadow-lg border-white border-[1px]">
          <div className="flex justify-end">
            <button
              className="text-gray-200 rounded-md"
              onClick={() => setCompleteModal(false)}
            >
              <Cross />
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-100">
              Complete Shipment
            </h4>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="recevier"
                  className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-200 shadow-sm rounded-lg"
                  onChange={(e) =>
                    setCompleteShip({
                      ...completeShip,
                      recevier: e.target.value,
                    })
                  }
                />
              </div>
              <div className="relative my-3">
                <input
                  type="number"
                  placeholder="ID"
                  className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-200 shadow-sm rounded-lg"
                  onChange={(e) =>
                    setCompleteShip({
                      ...completeShip,
                      index: e.target.value,
                    })
                  }
                />
              </div>
              <SubmitButton
                title={"Change Status"}
                handleClick={() => changeStatus()}
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
