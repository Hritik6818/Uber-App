const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

//Validation for registration and login
router.post(
  "/registration",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First Name Should be 3 character"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password length should be 6 character long"),
  ],
  userController.registerUser,
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password length should be 6 character long"),
  ],
  userController.loginUser,
);

module.exports = router;
