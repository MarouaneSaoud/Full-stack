const mongoose = require("mongoose");

const CompteSchema = new mongoose.Schema({
  Solde: {
    type: Number,
    required:true
  },
  _idClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Client',
    required:true
  },
});

const Compte = mongoose.model("Compte", CompteSchema);
module.exports = Compte;
