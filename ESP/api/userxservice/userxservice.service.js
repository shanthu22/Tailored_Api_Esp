const db = require("../../db");

const service_GetUXS = (callback) => {
  db.query("select * from  userxservice ", (error, result) => {
    if (error) {
      console.log("Error in GetUxs" + error);
      return callback(error, null);
    } else {
      console.log("The fetched result \n" + result);
      return callback(null, result);
    }
  });
};

module.exports = { service_GetUXS };
