const db = require("../models");
const reservation = db.Reservation;

// POST create post
async function creatReservation(req, res) {
  try {
    const { name, phone, date, message } = req.body;
    const resa = {
      name: name,
      phone: phone,
      date: date,
      message: message
    };
    await reservation.create(resa);
    res.render({ resa });
  } catch (error) {
    res.status(500).render({ error: error.message });
  }
}

// GET all posts
async function getAllReservations(req, res, next) {
  try {
    const resas = await reservation.findAll();
    // afficher du ejs
    // res.render("pages/post", { posts }); 
    // afficher du json pour une api
    res.render('pages/reservations', {
      resas: resas
  });
  } catch (error) {
    res.render({error: error.message})
  }
}

// GET post by Id
async function getRservationById(req, res, next) {
  try {
    const id = req.params.id;
    const resa = await reservation.findByPk(id);
    res.render('pages/reservationDetails',{ resa });
  } catch (error) {
    res.render({error: error.message});
  }
}


module.exports = {
  creatReservation,
  getAllReservations,
  getRservationById
};