// import React, { useState } from "react";
// import { useContext, useEffect } from "react";
// import { CaptainDataContext } from "../context/captainContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const CaptainProtectWrapper = ({ children }) => {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   const { captains, setCaptain } = useContext(CaptainDataContext);
//   const [isLoading, setIsLoading] = useState(true);

//   console.log("Token in HOC:", token);

//   useEffect(() => {
//     if (!token) {
//       navigate("/captain-login");
//     }
//   }, [token, navigate]);

//   axios
//     .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((response) => {
//       if (response.status === 200) {
//         setCaptain(response.data.captains);
//         setIsLoading(false);
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching captain profile:", error);
//       localStorage.removeItem("token");
//       setIsLoading(false);
//       navigate("/captain-login");
//     });
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return <>{children}</>;
// };

// export default CaptainProtectWrapper;

import React, { useState, useContext, useEffect } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 🚫 No token → redirect
    if (!token) {
      navigate("/captain-login");
      return;
    }

    // ✅ Fetch profile
    const fetchCaptain = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (res.status === 200) {
          setCaptain(res.data.captain); // ✅ singular
        }
      } catch (err) {
        console.error("Error fetching captain profile:", err);
        localStorage.removeItem("token");
        navigate("/captain-login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptain();
  }, [token, navigate, setCaptain]);

  // ⏳ Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // ✅ Render protected content
  return <>{children}</>;
};

export default CaptainProtectWrapper;
