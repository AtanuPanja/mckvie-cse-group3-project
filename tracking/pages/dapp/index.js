import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import {
  Table,
  AboutCom,
  Form,
  Services,
  CompleteShipment,
  GetShipment,
  StartShipment,
} from "../../Components";
import NavBar from "../../Components/NavBar";

import { TrackingContext } from "../../Conetxt/TrackingContext";
import { BackgroundBeam } from "./../../Components/ui/BackgroundBeam";

const index = () => {
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentsCount,
  } = useContext(TrackingContext);

  //STATE VARIABLE
  const [createShipmentModel, setCreateShipmentModel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModel, setGetModel] = useState(false);
  //DATA STATE VARIABLE
  const [allShipmentsdata, setallShipmentsdata] = useState([]);

  useEffect(() => {
    const getCampaignsData = getAllShipment();

    return async () => {
      const allData = await getCampaignsData;
      setallShipmentsdata(allData);
    };
  }, []);

  return (
    <>
      <div className="">
        <BackgroundBeam className="z-1" />
        <NavBar />
        <div className="flex w-full h-screen mt-15 absolute top-0 left-0">
          <div className="basis-1/5 w-full overflow-hidden pt-5">
            <Services
              setOpenProfile={setOpenProfile}
              setCompleteModal={setCompleteModal}
              setGetModel={setGetModel}
              setStartModal={setStartModal}
            />
          </div>
          <div className="basis-4/5 w-full">
            <Table
              setCreateShipmentModel={setCreateShipmentModel}
              allShipmentsdata={allShipmentsdata}
              currentUser={currentUser}
            />
          </div>
        </div>

        <Form
          createShipmentModel={createShipmentModel}
          createShipment={createShipment}
          setCreateShipmentModel={setCreateShipmentModel}
        />

        <CompleteShipment
          completeModal={completeModal}
          setCompleteModal={setCompleteModal}
          completeShipment={completeShipment}
        />
        <GetShipment
          getModel={getModel}
          setGetModel={setGetModel}
          getShipment={getShipment}
        />
        <StartShipment
          startModal={startModal}
          setStartModal={setStartModal}
          startShipment={startShipment}
        />
      </div>
    </>
  );
};

export default index;
