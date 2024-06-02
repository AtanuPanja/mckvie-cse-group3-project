import MagicButton from "./ui/MagicButton";
import { MovingCard } from "./ui/MovingCard";
import { CopyIcon, PieChart, User } from "./SVG/SvgProvider";

export default ({ setCreateShipmentModel, allShipmentsdata, currentUser }) => {
  const converTime = (time) => {
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dataTime;
  };

  return (
    <div className="w-full mx-auto px-4 md:px-8 mt-20">
      <div className="w-full mb-10 flex items-center">
        {currentUser && (
          <MovingCard containerClassName={"w-[30%]"}>
            <div className="w-full bg-black rounded-3xl px-5 py-3 flex items-center gap-3 h-full">
              <User />
              <div className="h-full self-start py-2 ml-2">
                <h3 className="font-bold text-lg">Welcome Trader</h3>
                <h5 className="font-medium text-md text-white flex">
                  {currentUser.slice(0, 20)}...
                  <CopyIcon
                    handleClick={() =>
                      navigator.clipboard.writeText(currentUser)
                    }
                  />
                </h5>
                <h3 className="font-light text-sm">
                  Shipment Count: {allShipmentsdata.length}
                </h3>
              </div>
            </div>
          </MovingCard>
        )}
      </div>
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-100 text-xl font-bold sm:text-2xl">
            Create Tracking
          </h3>
          <p className="text-gray-200 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <MagicButton
            title={"Add Tracking"}
            handleClick={() => setCreateShipmentModel(true)}
            className={"text-lg p-1"}
          />
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Sender</th>
              <th className="py-3 px-6">Recevier</th>
              <th className="py-3 px-6">PickupTime</th>
              <th className="py-3 px-6">Distance</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Delivery Time</th>
              <th className="py-3 px-6">Paid</th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-200 divide-y">
            {allShipmentsdata === undefined
              ? ""
              : allShipmentsdata?.map((shipment, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {shipment.sender.slice(0, 15)}...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {shipment.receiver.slice(0, 15)}...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {converTime(shipment.pickupTime)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {shipment.distance} Km
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {shipment.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {shipment.deliveryTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {shipment.isPaid ? " Completed" : "Not Complete"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {shipment.status == 0
                        ? "Pending"
                        : shipment.status == 1
                        ? "IN_TRANSIT"
                        : "Delivered"}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
