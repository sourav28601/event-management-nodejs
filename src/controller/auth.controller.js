const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Admin,Event,Attendence } = require("../models");

module.exports = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await Admin.findOne({ where: { username: username } });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }
      const token = jwt.sign({ id: user.id }, "admin@123", { expiresIn: "24h" });
      user.token = token; 
      await user.save();
      res.json({
        message: "Login successfully",
        user
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  
  getDashboardCounts: async (req, res) => {
    try {
      const totalEvents = await Event.count();
      const totalAttendees = await Attendence.count();
      res.json({ totalEvents, totalAttendees });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
