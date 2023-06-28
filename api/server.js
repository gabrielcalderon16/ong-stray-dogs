const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8082"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "ONG API." });
});

require("./app/routes/contacto.routes")(app);

// set port, listen for requests
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
