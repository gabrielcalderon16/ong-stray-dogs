module.exports = app => {
  const contacto = require("../controllers/contacto.controller.js");

  var router = require("express").Router();

  // Crear solicitud de contacto
  router.post("/", contacto.create);

  // Obtener las solicitudes de contacto
  router.get("/", contacto.findAll);

  app.use('/api/contacto', router);
};
