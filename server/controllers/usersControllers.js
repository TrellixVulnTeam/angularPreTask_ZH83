const con = require("../utils/database");

// READ(user);
exports.getUserByID = async (req, res) => {
  let user = await con.execute(`SELECT * FROM users WHERE users.ID=${req.query.ID}`);
  res.send(user[0]);
};
// URL:   http://www.localhost:5004/users/getUserByID

// `women`(`ID`, `WomanName`, `DateOfBirth`, `Country`, `Description`, `UserID`);
//  `users`(`ID`, `userName`, `Email`, `Password`, `createdAt`);
