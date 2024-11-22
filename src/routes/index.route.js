const express = require('express');
const route = express.Router();
const authRoute = require('./auth.route');
const eventRoute = require('./event.route');
const attendanceRoute = require("./attendance.route");

route.use('/auth',authRoute);
route.use('/event',eventRoute);
route.use('/attendee',attendanceRoute);

module.exports = route;