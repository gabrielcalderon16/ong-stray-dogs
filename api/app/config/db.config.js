module.exports = {
  HOST: "localhost",
  USER: "ongstray",
  PASSWORD: "12345678",
  DB: "ongstray",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
