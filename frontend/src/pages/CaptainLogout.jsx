import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem("token");

      try {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        // ✅ Always clear token
        localStorage.removeItem("token");

        // ✅ Redirect to login
        navigate("/captain-login");
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
