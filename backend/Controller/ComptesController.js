const express = require("express");
const { request, response } = require("express");
const CompteService = require("../services/CompteService");

const AllCompte = async (request, response) => {
  try {
    const result = await CompteService.allCompte();
    response.status(200).json({ result });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};
const AllCompteById = async (request, response) => {
  try {
    const result = await CompteService.allCompteById(request.params.id);
    response.status(200).json({ result });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

const AddCompte = async (request, response) => {
  try {
    const { Solde, _idClient } = request.body;
    const result = await CompteService.addCompte(Solde, _idClient);
    response.status(200).json({ result });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

const DeleteCompte = async (request, response) => {
  try {
    await CompteService.deleteCompte(request.params.id);
    response.status(200).json({ msg: "deleted" });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};
const UpdateCompte = async (request, response) => {
  try {
    const { Solde, _idClient } = request.body;
    const { id } = request.params.id;
     await CompteService.updateCompte(id,Solde,_idClient);
    response.status(200).json({ msg :"updated" });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};
module.exports = {
  AllCompte,
  AllCompteById,
  AddCompte,
  DeleteCompte,
  UpdateCompte,
};
