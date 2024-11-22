const express = require('express');
const eventRouter = express.Router();
const eventController = require("../../src/controller/event.controller");
const userAuth = require('../../src/middleware/user.auth');

eventRouter.post("/create",userAuth,eventController.createEvent);
eventRouter.get("/all",userAuth,eventController.fetchEventsWithPagination);
eventRouter.get("/edit/:id",userAuth,eventController.editEvent);
eventRouter.post("/update/:id",userAuth,eventController.updateEvent);
eventRouter.get("/delete/:id",userAuth,eventController.deleteEvent);
eventRouter.get("/details/:id",userAuth,eventController.getEventDetailsWithAttendees);

module.exports = eventRouter;
