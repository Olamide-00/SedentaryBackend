const express = require("express");
const UserController = require("../controller/userController")

// express router function
const UserRouter = express.Router();



UserRouter.post("/signUp", UserController.SignUp);
UserRouter.post("/login", UserController.Login);
UserRouter.get("/userInfo/:name", UserController.UserDetails);


module.exports = UserRouter