const express = require("express");
const { json, response } = require("express");

const routerClients = require("./Route/Clients");
const routerComptes = require("./Route/Comptes");
const mildelware = require("./Middleware/ClientsMid");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();
mongoose
  .connect(process.env.mongo_url, { dbName: "db_bank" })
  .then((result) =>
    app.listen(process.env.Port, function () {
      console.log("Server is starting");
    })
  )
  .catch((error) => console.log(error));
app.use(mildelware);
app.use(cors());
app.use(express.json());
app.use("/clients", routerClients);
app.use("/comptes", routerComptes);
