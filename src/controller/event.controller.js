const { Event, Attendence } = require("../models");

module.exports = {
  createEvent: async (req, res) => {
    try {
      const event = await Event.create({
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        type: req.body.type,
      });

      if (!event) {
        return res.status(400).json({ error: "Event creation failed" });
      }

      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  fetchEventsWithPagination: async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;

      const offset = (page - 1) * limit;
      const events = await Event.findAndCountAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
        order: [["date", "ASC"]],
      });

      res.json({
        data: events.rows,
        total: events.count,
        currentPage: parseInt(page),
        totalPages: Math.ceil(events.count / limit),
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  editEvent: async (req, res) => {
    try {
      const event = await Event.findByPk(req.params.id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateEvent: async (req, res) => {
    try {
      const event = await Event.findByPk(req.params.id);

      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }

      event.name = req.body.name || event.name;
      event.description = req.body.description || event.description;
      event.date = req.body.date || event.date;
      event.type = req.body.type || event.type;

      await event.save();

      res.json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteEvent: async (req, res) => {
    try {
      const result = await Event.destroy({
        where: { id: req.params.id },
      });

      if (result) {
        res.json({ message: "Event deleted successfully" });
      } else {
        res.status(404).json({ error: "Event not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEventDetailsWithAttendees: async (req, res) => {
    try {
      const event = await Event.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: Attendence,
            attributes: ["id", "name", "email", "phone"],
          },
        ],
      });

      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }

      res.json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
