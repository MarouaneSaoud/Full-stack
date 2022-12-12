const express=require("express")
const route=express.Router()
const ClientController = require('../Controller/ClientsController')

route.get('/',ClientController.AllClient)
route.get('/:id',ClientController.AllClientById)
route.delete('/:id',ClientController.DeleteClient)
route.post('/',ClientController.AddClient)
route.put('/:id',ClientController.UpdateClient)

module.exports=route