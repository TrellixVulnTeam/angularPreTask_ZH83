const con = require("../utils/database");

// READ (servers)
exports.getAllServers = async (req, res) => {
  let servers = await con.execute(`SELECT servers.ID, servers.ServerName, companies.CompanyName, servers.IP, servers.CompanyID, servers.Status, servers.createdAt FROM servers INNER JOIN companies ON servers.CompanyID=companies.ID`);
  res.send(servers[0]);
};
// URL:   http://www.localhost:5004/servers/getAllServers

// // CREATE (pets)
// exports.insertNewPet = async (req, res) => {
//   let pet = await con.execute(`INSERT INTO pets(PetName, PetType, DateOfBirth) VALUES ('${req.body.PetName}','${req.body.PetType}','${req.body.DateOfBirth}')`);
//   res.send(pet[0]);
// };

// // READ (pets)
// exports.getAllPets = async (req, res) => {
//   let whichOrder = req.body.sortBy === "AtoZ" ? "ASC" : "DESC";
//   let whichColumn = req.body.sortBy === "AtoZ" || req.body.sortBy === "ZtoA" ? "PetName" : req.body.sortBy === "createdAt" ? "createdAt" : "updatedAt";
//   let pets = await con.execute(`SELECT * FROM pets WHERE  ${req.body.typeToFilterBy} LIKE '%${req.body.searchBy}%' ORDER BY ${whichColumn} ${whichOrder}  `);
//   res.send(pets[0]);
// };

// // UPDATE (pets)
// exports.updatePet = async (req, res) => {
//   let pet = await con.execute(`UPDATE pets SET PetName='${req.body.PetName}' WHERE ID=${req.body.ID}`);
//   res.send(pet[0]);
// };

// // DELETE (pets)
// exports.deletePet = async (req, res) => {
//   let pet = await con.execute(`DELETE FROM pets WHERE ID=${req.body.ID} `);
//   res.send(pet[0]);
// };
