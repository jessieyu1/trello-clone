const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controllers");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;