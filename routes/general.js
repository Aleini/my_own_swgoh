const express = require('express');
const router = express.Router();
const api = require('../helpers/api');

/* ----------------------- Général -------------------------- */
router.get('/characters_list', async (req, res) => {
    try {
        const newUrl = `https://swgoh.gg/api/characters`;
        result = await api.call(newUrl, 'GET', null);
    } catch (err) {
        console.error(err);
    }
})

module.exports = router;