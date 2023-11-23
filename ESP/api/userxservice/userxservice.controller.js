const { service_GetUXS } = require("./userxservice.service");

const GetUXS = (req, res) => {
  service_GetUXS((error, result) => {
    if (error) {
      return res.status(500).json({ message: "Database connection error" });
    }
    res.status(200).json(result);
  });
};

module.exports = { GetUXS };
