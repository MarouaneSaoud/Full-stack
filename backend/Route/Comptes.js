const express=require("express")
const route=express.Router()
const CompteController = require('../Controller/ComptesController')

route.get('/',CompteController.AllCompte)
route.get('/:id',CompteController.AllCompteById)
route.delete('/:id',CompteController.DeleteCompte)
route.post('/',CompteController.AddCompte)
route.put('/:id',CompteController.UpdateCompte)

module.exports=route