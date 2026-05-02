// import React from "react";

// const ConfirmRide = (props) => {
//   return (
//     <div>
//       <h5
//         className="p-1 text-center top-0 w-[93%] absolute "
//         onClick={() => {
//           props.setVehiclePanelOpen(false);
//         }}
//       >
//         {/* <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i> */}
//       </h5>
//       <h3 className="text-2xl font-semibold mb-5"> Confirm your ride </h3>

//       <div className="flex gap-2 justify-between flex-col items-center">
//         <img
//           className="h-30"
//           src="https://staging.svgrepo.com/show/408291/car-white.svg"
//           alt=""
//         />

//         <div className="w-full mt-5">
//           <div className="flex items-center gap-5 p-3 border-b-2">
//             <i class="ri-map-pin-fill"></i>
//             <div>
//               <h3 className="text-lg font-medium">543/11-A</h3>
//               <p className="text-sm -mt-1 text-gray-600">Bada Talab Bhopal</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-5 p-3 border-b-2">
//             <i class="ri-map-pin-user-fill"></i>
//             <div>
//               <h3 className="text-lg font-medium">543/11-A</h3>
//               <p className="text-sm -mt-1 text-gray-600">Bada Talab Bhopal</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-5 p-3">
//             <i class="ri-money-rupee-circle-fill"></i>
//             <div>
//               <h3 className="text-lg font-medium">₹150</h3>
//             </div>
//           </div>
//         </div>

//         <button className="w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg">
//           Confirm Ride
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ConfirmRide;

import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center top-0 w-[53%] absolute"
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      ></h5>

      {/* 🔽 reduce margin-bottom */}
      <h3 className="text-2xl font-semibold mb-2">Confirm Your Ride</h3>

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

        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRideOpen(false);
          }}
          className="w-full mt-4 bg-green-500 text-white font-semibold p-2 rounded-lg"
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
