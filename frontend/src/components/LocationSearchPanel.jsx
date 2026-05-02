import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);
  const location = [
    "2B-38 Near Sardar Petrol Pump Bhopal MP Nagar Market",
    "Navjeevan Colony Bavla D-Block(403) Room No.",
    "Narmada Puram Near Kargil Petrol Pump Bhopal  Market",
    "Science City Ahmedabad Bhadaj Circle Nagar Market",
  ];
  return (
    <div>
      {/* Location Search Panel */}
      {location.map((elem, index) => (
        <div
          key={index}
          onClick={() => {
            props.setPanelOpen(false);
            props.setVehiclePanel(true);
          }}
          className="flex gap-3 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer hover:border-black transition"
        >
          <h2 className="bg-[#eeee] h-8 w-10 flex items-center justify-center p-2 rounded-full">
            <i className="ri-map-pin-line"></i>
          </h2>
          <h1>{elem}</h1>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
