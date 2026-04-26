// import { useState } from "react";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { UserDataContext as UserData } from "../context/userContext";

// const UsersSignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [userData, setUserData] = useState({});

//   const { user, setUser } = React.useContext(UserData);

//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();

//     // setUserData({
//     //   username: {
//     //     firstName: firstName,
//     //     lastName: lastName,
//     //   },
//     //   email: email,
//     //   password: password,
//     // });
//     // console.log(userData);

//     const newUser = {
//       email: email,
//       password: password,
//       fullname: {
//         firstname: firstName,
//         lastname: lastName,
//       },
//     };
//     const response = axios.post(
//       `${import.meta.env.VITE_BASE_URL}/users/register`,
//       newUser,
//     );

//     if (response.status === 201) {
//       const data = response.data;
//       setUser(data.user);
//       navigate("/home");
//     }
//     setUserData(userData);
//     console.log(newUser); // ✅ correct

//     setEmail("");
//     setPassword("");
//     setFirstName("");
//     setLastName("");
//   };

//   return (
//     <div className="p-7 h-screen flex flex-col justify-between">
//       <div>
//         <img
//           className="w-16 mb-10"
//           src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
//           alt=""
//         />
//         <form onSubmit={(e) => submitHandler(e)}>
//           <h3 className="text-lg font-medium mb-2"> What's your name</h3>

//           <div className="flex  gap-2 mb-6">
//             <input
//               className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//               placeholder="First Name"
//             />

//             <input
//               className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               required
//               placeholder="Last Name"
//             />
//           </div>
//           <h3 className="text-lg font-medium mb-2"> What's your email</h3>
//           <input
//             className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="email@example.com"
//           />

//           <h3 className="text-lg font-medium mb-2">Enter your password</h3>
//           <input
//             className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//             placeholder="password"
//           />

//           <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
//             Create Account
//           </button>
//         </form>

//         <p className="text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600">
//             {" "}
//             Login here
//           </Link>
//         </p>
//       </div>

//       <div>
//         <p className="text-[10px] leading-tight">
//           Only authorized users/guests in the app can ride; drivers cannot have
//           others in the car. <span className="underline">Passengers must</span>
//           verify the vehicle and driver in the app before entering.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default UsersSignUp;

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UsersSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
      fullName: {
        firstName,
        lastName,
      },
    };

    try {
      console.log("ENV:", import.meta.env);
      console.log("BASE:", import.meta.env.VITE_BASE_URL);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/registration`,
        newUser,
      );

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
    }

    // Reset form
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>

          <div className="flex gap-2 mb-6">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First Name"
            />

            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter your password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            Create Account
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          Only authorized users/guests in the app can ride; drivers cannot have
          others in the car. <span className="underline">Passengers must</span>{" "}
          verify the vehicle and driver in the app before entering.
        </p>
      </div>
    </div>
  );
};

export default UsersSignUp;
