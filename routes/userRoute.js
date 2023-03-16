const express = require("express");
const { addUser, getUser, editUser, updateUser, deleteUser, register, login } = require("../controller/userController");

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/allusers", getUser)
router.post("/adduser", addUser)
router.get("/:id", editUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router;