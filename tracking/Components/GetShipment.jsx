import { useState } from "react";
import { SubmitButton } from "./ui/SubmitButton";

import { Cross } from "./SVG/SvgProvider";

export default ({ getModel, setGetModel, getShipment }) => {
  const [index, setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState(null);

  const getshipmentData = async () => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    console.log(getData);
  };
  console.log(singleShipmentData);

  const converTime = (time) => {
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dataTime;
  };

  return getModel ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setGetModel(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-black rounded-md shadow-lg border-[0.5px] border-white">
          <div className="flex justify-end">
            <button
              className="text-gray-100 rounded-md"
              onClick={() => setGetModel(false)}
            >
              <Cross />
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-100">
              Product Tracting Details
            </h4>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative my-3">
                <input
                  type="number"
                  placeholder="Id"
                  className="w-full pl-5 pr-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
                  onChange={(e) => setIndex(e.target.value)}
                />
              </div>

              <SubmitButton
                title={"Get Details"}
                handleClick={() => getshipmentData()}
              />
            </form>

            {singleShipmentData && (
              <div className="text-left">
                <p>Sender: {singleShipmentData.sender.slice(0, 25)}...</p>
                <p>Recevier: {singleShipmentData.receiver.slice(0, 25)}...</p>
                <p>PickupTime: {converTime(singleShipmentData.pickupTime)}</p>
                <p>
                  DeliveryTime: {converTime(singleShipmentData.deliveryTime)}
                </p>
                <p>Distance: {singleShipmentData.distance}</p>
                <p>Price: {singleShipmentData.price}</p>
                <p>Status: {singleShipmentData.status}</p>
                <p>
                  Paid:{" "}
                  {singleShipmentData.isPaid ? "Complete" : "Not Complete"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
