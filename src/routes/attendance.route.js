const express = require('express');
const attendanceRouter = express.Router();
const attendanceController = require("../../src/controller/attendance.controller");
const userAuth = require('../../src/middleware/user.auth');

attendanceRouter.post("/create",userAuth,attendanceController.addAttendence);
attendanceRouter.get("/all/:id",userAuth,attendanceController.fetchAttendencesForEvent);

module.exports = attendanceRouter;
