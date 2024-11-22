const express = require('express');
const authUserRouter = express.Router();
const AuthController = require("../../src/controller/auth.controller.js");
const userAuth = require('../../src/middleware/user.auth');

authUserRouter.post("/login",AuthController.login);
authUserRouter.get("/dashboard",userAuth,AuthController.getDashboardCounts);

module.exports = authUserRouter;
