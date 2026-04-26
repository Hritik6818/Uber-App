// import { createContext, useState, useContext } from "react";

// export const CaptainDataContext = createContext();

// const CaptainContext = ({ children }) => {
//   const [captain, setCaptain] = useState(null);
//   const [isLoading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const updateCaptain = (captainData) => {
//     setCaptain(captainData);
//   };

//   const value = {
//     captain,
//     setCaptain,
//     isLoading,
//     setLoading,
//     error,
//     setError,
//     updateCaptain,
//   };
//   return (
//     <CaptainDataContext.Provider value={value}>
//       {children}
//     </CaptainDataContext.Provider>
//   );
// };

// export default CaptainContext;

import { createContext, useState } from "react";

export const CaptainDataContext = createContext(null);

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  return (
    <CaptainDataContext.Provider
      value={{
        captain, // ✅ singular
        setCaptain,
        isLoading,
        setLoading,
        error,
        setError,
        updateCaptain,
      }}
    >
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
