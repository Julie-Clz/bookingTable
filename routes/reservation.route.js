const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller.js');

router.get('/', reservationController.getAllReservations);

router.get('/:id', reservationController.getRservationById);

router.post("/", reservationController.creatReservation);

module.exports = router;