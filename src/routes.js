const { Router } = require('express');

const HotelController = require('./app/controllers/HotelController');
const ReviewsController = require('./app/controllers/ReviewsController');
const AirportsController = require('./app/controllers/AirportsController');
const BookingController = require('./app/controllers/BookingController');
const MailController = require('./app/controllers/MailController');

const routes = new Router();

routes.get('/hotels/:checkin/:adults/:nights/:location', HotelController.index);

routes.get('/reviews/:location_id', ReviewsController.index);

routes.get('/airports/:location', AirportsController.index);

routes.get('/bookings/:d1/:o1/:dd1/:ta', BookingController.index);

routes.post('/mails', MailController.store);

module.exports = routes;
