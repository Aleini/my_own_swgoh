const compareByPower = (a, b) => {
    return b.power - a.power
}

function filterUnits(units, filters) {
    let filteredUnits = [...units];
    // Filtre alignement => Lumineux ou Obscur
    if (filters.alignment) {
        filteredUnits = filteredUnits.filter(unit => unit.alignment === filters.alignment);
    }
    // Filtre si reliqué
    if (filters.is_relic) {
        if (filters.is_relic == 'true') {
            filteredUnits = filteredUnits.filter(unit => unit.gear_level >= 13);
        } else {
            filteredUnits
        }
    }
    // Filtre par faction => Rebelle, Empire, Jedi, Sith...
    if (filters.factions) {
        filteredUnits = filteredUnits.filter(unit => unit.factions.includes(filters.factions))
    }
    // Filtre par rôle => Attaquant, Support, Tank, Soigneur, Leader
    if (filters.role) {
        filteredUnits = filteredUnits.filter(unit => unit.factions.includes(filters.role))
    }
    // console.log(filteredUnits);
    return filteredUnits;
}


module.exports = {
    compareByPower,
    filterUnits
}