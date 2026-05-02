import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);

  const panelCloseRef = useRef(null);
  const panelRef = useRef(null);
  const confirmRideRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [confirmRideOpen, setConfirmRideOpen] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          // padding: 24,
          opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen],
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0%)",
          opacity: 1,
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
          opacity: 0,
        });
      }
    },
    [vehiclePanelOpen],
  );

  useGSAP(
    function () {
      if (confirmRideOpen) {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(0%)",
          opacity: 1,
        });
      } else {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(100%)",
          opacity: 0,
        });
      }
    },
    [confirmRideOpen],
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0%)",
          opacity: 1,
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
          opacity: 0,
        });
      }
    },
    [vehicleFound],
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0%)",
          opacity: 1,
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
          opacity: 0,
        });
      }
    },
    [waitingForDriver],
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-17 absolute top-4 left-4"
        src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        alt=""
      />

      <div className="h-screen w-screen">
        {/* This is temporary img */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0  w-full  ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-800"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a destination"
            />
          </form>
        </div>

        <div ref={panelRef} className=" bg-white h-[0%]">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanelOpen}
          />
        </div>

        <div
          ref={vehiclePanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-10 pt-12"
        >
          <VehiclePanel
            setConfirmRideOpen={setConfirmRideOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>

        <div
          ref={confirmRideRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 pt-12"
        >
          <ConfirmRide
            setConfirmRideOpen={setConfirmRideOpen}
            setVehicleFound={setVehicleFound}
          />
        </div>

        <div
          ref={vehicleFoundRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 pt-12"
        >
          <LookingForDriver setVehicleFound={setVehicleFound} />
        </div>

        <div
          ref={waitingForDriverRef}
          className="fixed w-full z-10 bottom-0 bg-white p-3 py-6 pt-12"
        >
          <WaitingForDriver waitingForDriver={waitingForDriver} />
        </div>
      </div>
    </div>
  );
};

export default Home;
