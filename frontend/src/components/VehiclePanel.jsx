import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center top-0 w-[93%] absolute "
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5"> Choose a ride </h3>
      <div
        onClick={() => {
          props.setConfirmRideOpen(true);
        }}
        className="flex border-2 active:border-black mb-2  rounded-xl  w-full p-3  items-center justify-between"
      >
        <img
          className="h-10"
          src="https://staging.svgrepo.com/show/408291/car-white.svg"
          alt=""
        />
        <div className="  w-1/2 ">
          <h4 className="font-medium text-sm">
            UberGo
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-base">5 min way</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹200.30</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRideOpen(true);
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3  items-center justify-between"
      >
        <img
          className="h-10"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MjAwMTg5YS03MWMwLTRmNmQtYTlkZS0xYjZhODUyMzkwNzkucG5n"
          alt=""
        />
        <div className=" w-1/2 ">
          <h4 className="font-medium text-sm">
            Bike
            <span>
              <i className="ri-user-3-fill">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-base">2 min way</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹105</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRideOpen(true);
        }}
        className="flex border-2 mb-2  active:border-black rounded-xl w-full p-3  items-center justify-between"
      >
        <img
          className="h-10"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mYzEwMWZmOC04MWExLTQ2YzMtOTk1YS02N2I0YmJkMmYyYmYuanBn"
          alt=""
        />
        <div className="  w-1/2 ">
          <h4 className="font-medium text-sm">
            Auto
            <span>
              <i className="ri-user-3-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-base">10 min way</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable Auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹165</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
