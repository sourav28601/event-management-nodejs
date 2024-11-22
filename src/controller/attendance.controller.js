
const { Event, Attendence } = require("../models");

module.exports = {
  addAttendence: async (req, res) => {
    try {
      const { name, email, phone, event_id } = req.body;

      const event = await Event.findByPk(event_id);
      if (!event) return res.status(404).json({ error: "Event not found" });

      const existingAttendence = await Attendence.findOne({ where: { email } });
      if (existingAttendence) {
        return res.status(400).json({ error: "Attendee already exists" });
      }
      const attendence = await Attendence.create({ name, email, phone, event_id: event_id });
      res.status(201).json(attendence);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  fetchAttendencesForEvent: async (req, res) => {
    try {
      const Attendences = await Attendence.findAll({
        where: { event_id: req.params.id},
        attributes: ["id", "name", "email", "phone"],
      });

      res.json(Attendences);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
