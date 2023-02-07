const express = require("express");
const route = express.Router();
const {
  getAll,
  getAllAdmin,
  getAllProductos,
  getOne,
  create,
  crearAdmin,
  crearProducto,
  update,
  deleteItem,
  deleteProducto,
} = require("../controllers/index");

route.get("/getAll", getAll);
route.get("/getAllAdmin", getAllAdmin);
route.get("/getAllProductos", getAllProductos);
route.get("/getOne/:value", getOne);
route.post("/create", create);
route.post("/crearAdmin", crearAdmin);
route.post("/crearProducto", crearProducto);
route.put("/update/:value", update);
route.delete("/delete/:value", deleteItem);
route.delete("/deleteProducto/:value", deleteProducto);

module.exports = route;
