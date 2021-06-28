"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async catalogue(ctx) {
    const products = await strapi.query("articulos").find();

    const catalogue = products.map((product) => {
      return {
        id: product.id,
        nombre: product.descripcion,
        imagen: product.imagenes[0],
        precio: product.precio_final,
        categoria: product.categoria ? product.categoria.nombre : "Otros",
      };
    });

    ctx.send({ message: "Ok", data: catalogue }, 200);
  },
};
