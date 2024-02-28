const express = require('express');
const router = express.Router();
const api = require('../helpers/api');
const allycode = '651954525';

// Événement en cours de Grande Arène
router.get('/gac_active', async (req, res) => {
    const newUrl = `https://swgoh.gg/api/player/${allycode}/gac-bracket`;
    result = await api.call(newUrl, 'GET', null);
});

// Bataille de grande arène
router.get('/gac_battle_available', async (req, res) => {
    const newUrl = 'https://swgoh.gg/api/gac/battle/available';
    result = await api.call(newUrl, 'GET', null);
});

router.get('/gac_battle_list', async (req, res) => {
    const newUrl = 'https://swgoh.gg/api/gac/battle/list';
    result = await api.call(newUrl, 'GET', null);
});

// Tirage au sort de championnat de Grande Arène
router.get('/gac_bracket', async (req, res) => {
    const newUrl = `https://swgoh.gg/api/player/${allycode}`;
    result = await api.call(newUrl, 'GET', null);
})

module.exports = router;