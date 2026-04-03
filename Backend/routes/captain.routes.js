const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const { body } = require("express-validator");

// router.post(
//   "/register",
//   [
//     body("fullName.firstName")
//       .isLength({ min: 3 })
//       .withMessage("First name must be at least 3 characters long"),
//     body("fullName.lastName")
//       .isLength({ min: 2 })
//       .withMessage("Last name must be at least 2 characters long"),
//     body("email").isEmail().withMessage("Please fill a valid email address"),
//     body("password")
//       .isLength({ min: 6 })
//       .withMessage("Password must be at least 6 characters long"),
//     body("vehicle.color")
//       .isLength({ min: 3 })
//       .withMessage("Vehicle color must be at least 3 characters long"),
//     body("vehicle.plate")
//       .isLength({ min: 3 })
//       .withMessage("Vehicle plate must be at least 3 characters long"),
//     body("vehicle.capacity")
//       .isIn({ min: 1 })
//       .withMessage("Vehicle capacity must be at least 1"),
//     body("vehicle.vehicleType")
//       .isIn(["car", "motorcycle", "auto rickshaw"])
//       .withMessage(
//         "Vehicle type must be either car, motorcycle, or auto rickshaw",
//       ),
//   ],
//   captainController.registerCaptain,
// );

router.post(
  "/register",
  [
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),

    body("fullName.lastName")
      .isLength({ min: 2 })
      .withMessage("Last name must be at least 2 characters long"),

    body("email").isEmail().withMessage("Please fill a valid email address"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),

    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Vehicle color must be at least 3 characters long"),

    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Vehicle plate must be at least 3 characters long"),

    body("vehicle.capacity")
      .isInt({ min: 1 }) // ✅ FIXED
      .withMessage("Vehicle capacity must be at least 1"),

    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto rickshaw"])
      .withMessage(
        "Vehicle type must be either car, motorcycle, or auto rickshaw",
      ),
  ],

  captainController.registerCaptain,
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please fill a valid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  captainController.loginCaptain,
);

router.get(
  "/profile",
  authMiddleware.authCaptain,
  captainController.getCaptainProfile,
);

router.get(
  "/logout",
  authMiddleware.authCaptain,
  captainController.logoutCaptain,
);

module.exports = router;
