import React from "react";

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center top-0 w-[53%] absolute"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      ></h5>

      {/* 🔽 reduce margin-bottom */}
      <h3 className="text-2xl font-semibold mb-2">
        <b>Looking for a driver...</b>
      </h3>

      {/* 🔽 reduce gap */}
      <div className="flex gap-1 justify-between flex-col items-center">
        {/* 🔽 reduce image size + margin */}
        <img
          className="h-34 "
          src="https://staging.svgrepo.com/show/408291/car-white.svg"
          alt=""
        />

        {/* 🔽 reduce top margin */}
        <div className="w-full ">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">543/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Bada Talab Bhopal</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">543/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Bada Talab Bhopal</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3">
            <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹150</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
