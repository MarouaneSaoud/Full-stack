const Compte = require("../Model/Compte");

const allCompte = async () => {
  return await Compte.find();
};
const allCompteById = async (id) => {
  return await Compte.findById({ _id: id });
};
const addCompte = async (Solde, _idClient) => {
  return await Compte.create({ Solde, _idClient });
};
const deleteCompte = async (id) => {
  return await Compte.deleteOne({ _id: id });
};
const updateCompte = async (id, Solde, idClient) => {
  return await Compte.findOneAndUpdate( {_id:id} , {Solde:Solde , idClient:idClient}, {new : true}  );
};
module.exports = {
  allCompte,
  allCompteById,
  addCompte,
  deleteCompte,
  updateCompte,
};
