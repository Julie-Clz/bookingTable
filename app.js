const express = require('express')
const app = express()
const port = 8080
var db = require('./models');
var path = require("path");

const reservationController = require('./controllers/reservation.controller.js');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


// Routes
app.get('/reservations', reservationController.getAllReservations);
app.get('/reservations/:id', reservationController.getRservationById);


// FAKE DATAS
async function createReservation() {
  await db.Reservation.bulkCreate([
    { 
      name: 'Jeanne',
      phone: "0000000000",
      date: '2024-06-24',
      message: "En terrasse si possible"
    },
    { 
      name: 'Tom',
      phone: "0000000000",
      date: '2024-06-24',
      message: "Avec un peu d'intimité"
    },
  ]);
}
app.listen(port, () => {
  console.log(`Your app is listening on ${process.env.BASE_URL}`),
  db.sequelize.sync(
    // Décommenter au 1er lancement du serveur pour créer les 2 réservations dans la db puis recommenter
    // createReservation(),
    // { force: true }
  )
});

module.exports = app;
