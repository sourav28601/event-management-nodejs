const { Admin } = require("../models")
const jwt = require("jsonwebtoken")
const { errorResponseWithoutData} = require("../utils/response");

module.exports = async (req, res, next) => {
    try {
      let token = req.headers.authorization;
      if (!token) {
        return errorResponseWithoutData(
          res,
          "Unauthorized access"
        );
      }
      token = token.split(" ")[1]; 
      await jwt.verify(token, "admin@123", async function (err, decoded) {
        if (err) {
          return res.status(401).json({ error: "Unauthorized access" });
        } else {
          req.user = await Admin.findOne({
            where: { token: token },
          });
          next();
        }
      });
    } catch (error) {
      console.log("errorinmiddleware", error);
    }
  };