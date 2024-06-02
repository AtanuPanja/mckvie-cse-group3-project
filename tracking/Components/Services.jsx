import MagicCard from "./ui/MagicCard";

export default ({ setCompleteModal, setGetModel, setStartModal }) => {
  const team = [
    "Complete Shipment",
    "Get Shipment",
    "start Shipment",
    "Send Shipment",
  ];

  const openModelBox = (text) => {
    if (text === 1) {
      setCompleteModal(true);
    } else if (text === 2) {
      setGetModel(true);
    } else if (text === 3) {
      setStartModal(true);
    } else {
      console.log("hello");
    }
    // else if (text === 4) {
    //   setOpenProfile(true);
    // }
  };
  return (
    <section className="py-0 pb-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-12">
          <ul className="pt-5">
            {team.map((item, i) => (
              <li key={i} className="my-5">
                <MagicCard
                  title={item}
                  handleClick={() => openModelBox(i + 1)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
