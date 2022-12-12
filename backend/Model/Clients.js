const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  Firtsname: String,
  Lastname: String,
});
const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
