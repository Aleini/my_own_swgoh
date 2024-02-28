const express = require('express');
const router = express.Router();

const homeRoutes = require('./home');
const playerRoutes = require('./player');
const gacRoutes = require('./gac');

router.use('/', homeRoutes);
router.use('/player', playerRoutes);
router.use('/gac', gacRoutes);

module.exports = router;