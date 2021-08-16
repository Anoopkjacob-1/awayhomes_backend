const express = require("express");
const { hotelCreate,allHotels } = require("../controllers/hotelcontroller");
const { rooomCreate,allrooms,singlerooms } = require("../controllers/roomcontrollers");
const { userAuth } = require("../controllers/usercontroll");
const { isRoomAvail,bookCreate } = require("../controllers/Bookcontrollers");
const { isRoomAvail,bookCreate } = require("../controllers/searchcontroller");
const {search,filter } = require("../controllers/searchcontroller");

const router = express.Router();


router.post('/hotelCreate', hotelCreate);
router.post('/roomCreate', rooomCreate);
router.post('/isavailable', isRoomAvail);
router.post('/book', bookCreate);

router.get('/allhotels', allHotels);
router.get('/allrooms', allrooms);
router.get('/singlerooms', singlerooms);
router.get('/login', userAuth);

router.get('/search',search);
router.get('/filter',filter);

module.exports = router;