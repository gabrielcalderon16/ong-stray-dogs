module.exports = (sequelize, Sequelize) => {
  const Contacto = sequelize.define("contacto", {
    nombresPersona: {
      type: Sequelize.STRING
    },
    correoPersona: {
      type: Sequelize.STRING
    },
    descripcionContacto: {
      type: Sequelize.STRING
    }
  });

  return Contacto;
};
