const express = require("express");
const ProductsController = require("./controllers/ProductsController");

const routes = express.Router();

routes.get("/products", ProductsController.index);
routes.post("/products", ProductsController.store);
routes.delete("/products/:id", ProductsController.delete);
routes.put("/products/:id", ProductsController.update);
routes.get("/products/:id", ProductsController.detail);


module.exports = routes;
