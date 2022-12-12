const express = require("express");
const { request, response } = require("express");
const ClientService = require("../services/ClientService");

const AllClient = async (request, response) => {
  try {
    const result = await ClientService.getClient();
    response.status(200).json({ result });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};
const AllClientById = async (request, response) => {
  try {
    const result = await ClientService.getClientById(request.params.id);
    response.status(200).json({ result });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};
const AddClient = async (request, response) => {
  const { Firtsname, Lastname } = request.body;
  try {
    const result = await ClientService.addClient(Firtsname, Lastname);
    response.status(200).json({ result });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};
const DeleteClient = async (request, response) => {
  try {
    await ClientService.deleteClient(request.params.id);
    response.status(200).json({ msg: `deleted ` });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};
const UpdateClient = async (request, response) => {
  const { Firtsname, Lastname } = request.body;
  const  id  = request.params.id;
  console.table(request.body  );
  try {
    await ClientService.updateClient(id, Firtsname, Lastname);
    response.status(200).json({ msg:"updated" });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};
module.exports = {
  AllClient,
  AllClientById,
  AddClient,
  DeleteClient,

  UpdateClient,
};
