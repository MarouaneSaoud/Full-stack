const Client = require("../Model/Clients");

const getClient = async () => {
  return await Client.find({});
};
const getClientById = async (id) => {
  return await Client.findOne({ _id: id });
};

const addClient = async (Firtsname, Lastname) => {
  return await Client.create({ Firtsname, Lastname });
};
const deleteClient = async (id) => {
  return await Client.deleteOne({ _id: id });
};

const updateClient = async (id, Firtsname, Lastname) => {
  return await Client.findOneAndUpdate(
    { _id: id },
    { Firtsname: Firtsname, Lastname: Lastname },
    { new: true }
  );
};
module.exports = {
  getClient,
  getClientById,
  addClient,
  deleteClient,
  updateClient,
};
