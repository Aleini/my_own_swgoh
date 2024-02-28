const express = require('express');
const router = express.Router();
const api = require('../helpers/api');
const general_function = require('../utils/general_functions');
const player_helpers = require('../helpers/player');
const allycode = '651954525';

// Profil du joueur
// router.get('/profile', async (req, res) => {
//     const newUrl = `https://swgoh.gg/api/player/${allycode}`;
//     const result = await api.call(newUrl, 'GET', null);
// })

// Personnages du joueur
router.get('/profile_characters', async (req, res) => {
    try {
        // console.log(req.query);
        const player_url = `https://swgoh.gg/api/player/${allycode}`;
        const characters_url = `https://swgoh.gg/api/characters`;
        const result = await api.call(player_url, 'GET', null);
        const all_characters = await api.call(characters_url, 'GET', null);
        let player_units = []
        for (const unit of result.units) {
            for (const character of all_characters) {
                if (unit.data.base_id === character.base_id) {
                    // console.log(unit.data);
                    // console.log(character);
                    let color_gear;
                    if (unit.data.gear_level == 13) {
                        color_gear = character.alignment == 'Dark Side' ? 'dark-side':'light-side';
                    } else if (unit.data.gear_level == 12) {
                        color_gear = 'high-gear';
                    } else {
                        color_gear = 'low-gear';
                    }
                    player_units.push({
                        name: unit.data.name,
                        level: unit.data.level,
                        rarity: unit.data.rarity,
                        gear: unit.data.gear,
                        power: unit.data.power,
                        relic_tier: unit.data.relic_tier - 2 > 0 ? unit.data.relic_tier - 2 : 'Perso non reliqué',
                        image: character.image,
                        gear_level: unit.data.gear_level,
                        color_gear: color_gear,
                        alignment: character.alignment == 'Dark Side' ? 'dark-side' : character.alignment == 'Light Side' ? 'light-side' : 'neutral',
                        factions: character.categories,
                        base_id: character.base_id,
                        rarity_array: player_helpers.getRarityArray(unit.data.rarity),
                        zeta_number: unit.data.zeta_abilities.length,
                        omicron_number: unit.data.omicron_abilities.length
                    })
                }
            }
        }
        player_units.sort(general_function.compareByPower);
        if (req.xhr) {
            if (req.query) {
                // Filtrer les unités en fonction de l'alignement
                player_units = general_function.filterUnits(player_units, req.query);
            }
            res.status(200).send(player_units);
        } else {
            res.render('characters/list', { playerUnits: player_units });
        }
        console.log(player_units);
    } catch (err) {
        console.error(err);
        if (req.xhr)
            res.status(500).send(`Erreur serveur`)
    }

})

// Description du personnage sélectionné
router.get('/character_description', async (req, res) => {
    try {
        const id_character = req.query.id_character;
        const characters_url = `https://swgoh.gg/api/characters`;
        const all_characters = await api.call(characters_url, 'GET', null);
        let unit = {};
        for (const character of all_characters) {
            if (character.base_id == id_character) {
                console.log(character);
                unit = {
                    name: character.name,
                    image: character.image,
                    description: character.description,
                    categories: character.categories,
                    power: character.power
                }
            }
        }
        // console.log(unit);
        res.render('characters/description', {unit: unit})
    } catch (err) {
        console.error(err);
    }
})

// Vaisseaux du joueur
router.get('/profile_ships', async (req, res) => {
    try {
        const player_url = `https://swgoh.gg/api/player/${allycode}`;
        const ships_url = `https://swgoh.gg/api/ships`;
        const result = await api.call(player_url, 'GET', null);
        const all_ships = await api.call(ships_url, 'GET', null);
        let player_units = []
        for (const unit of result.units) {
            for (const ship of all_ships) {
                if (unit.data.base_id === ship.base_id) {
                    const color_gear = ship.alignment == 'Dark Side' ? 'dark-side':'light-side';
                    player_units.push({
                        name: unit.data.name,
                        level: unit.data.level,
                        rarity: unit.data.rarity,
                        gear: unit.data.gear,
                        power: unit.data.power,
                        image: ship.image,
                        gear_level: unit.data.gear_level,
                        color_gear: color_gear,
                        alignment: ship.alignment == 'Dark Side' ? 'dark-side' : ship.alignment == 'Light Side' ? 'light-side' : 'neutral',
                        factions: ship.categories,
                        rarity_array: player_helpers.getRarityArray(unit.data.rarity)
                    })
                }
            }
        }
        player_units.sort(general_function.compareByPower);
        if (req.xhr) {
            if (req.query) {
                // Filtrer les unités en fonction de l'alignement
                player_units = general_function.filterUnits(player_units, req.query);
            }
            res.status(200).send(player_units);
        } else {
            res.render('ships/list', { playerUnits: player_units });
        }
        // console.log(player_units);
    } catch (err) {
        console.error(err);
        // if (req.xhr)
        //     res.status(500).send(`Erreur serveur`)
    }
})

// Liste des modes du joueur
// router.get('/list_mods', async (req, res) => {
//     try {
//         const newUrl = `https://swgoh.gg/api/player/${allycode}/mods`;
//         const result = await api.call(newUrl, 'GET', null);
//     } catch (err) {
//         console.error(err);
//     }

// })

module.exports = router;