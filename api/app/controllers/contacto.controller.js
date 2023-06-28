const db = require("../models");
const Contacto = db.contactos;
const Op = db.Sequelize.Op;

// Crear solicitud de contacto
exports.create = (req, res) => {
  // Validar solicitud
  const {
    nombres,
    correo,
    descripcion
  } = req.body;

  let message = ''
  if (!nombres) {
    message = "Los nombres son requeridos"
  }
  if (!correo) {
    message = "El correo electrónico es requerido"
  }
  if (!descripcion) {
    message = "La descripción es requerida"
  }
  
  if (message && message.length) {
    return res.status(400).send({
      message,
    });
  }

  const solicitudContacto = {
    nombresPersona: nombres,
    correoPersona: correo,
    descripcionContacto: descripcion
  };

  Contacto.create(solicitudContacto)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error inesperado. Intente más tarde."
      });
    });
};

// Consultar todas las solicitudes de contacto
exports.findAll = (req, res) => {
  Contacto.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error inesperado. Intente más tarde."
      });
    });
};