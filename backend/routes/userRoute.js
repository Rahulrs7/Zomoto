const express = require("express");
const { loginUser, registerUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/auth/register", registerUser);
userRouter.post("/auth/login", loginUser);


module.exports = userRouter;
