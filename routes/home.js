const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        res.render('general/home');
    } catch (err) {
        console.error(err);
    }
})

module.exports = router;