const Products = require("../models/Products");

module.exports = {
  async index(req, res) {
    const products = await Products.findAll();

    return res.json(products);
  },

  async store(req, res) {
    const { name, price, description, quantity } = req.body;

    const products = await Products.create({
      name,
      price,
      description,
      quantity,
    });

    return res.json(products);
  },

  async delete(req, res) {
    const { id } = req.params;

    const products = await Products.destroy({
      where: {
        id: id,
      },
    });

    return res.json(products);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, price, description, quantity } = req.body;

    const products = await Products.update(
      {
        name: name,
        price: price,
        description: description,
        quantity: quantity,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.json(products);
  },

  async detail(req, res) {
    const { id } = req.params;

    const products = await Products.findByPk(id);

    return res.json(products);
  }
};
