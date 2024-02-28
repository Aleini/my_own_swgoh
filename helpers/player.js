const YELLOW_STAR = 'gold';
const WHITE_STAR = 'white';

// Construction du tableau des étoiles attribués aux persos en fonction de la rareté de ce dernier
const getRarityArray = rarity => {
    const array = [];
    switch (rarity) {
        case 1:
            array.push({
                id: 'first-star',
                color: YELLOW_STAR
            }, {
                id: 'second-star',
                color: WHITE_STAR
            }, {
                id: 'third-star',
                color: WHITE_STAR
            }, {
                id: 'fourth-star',
                color: WHITE_STAR
            }, {
                id: 'fifth-star',
                color: WHITE_STAR
            }, {
                id: 'sixth-star',
                color: WHITE_STAR
            }, {
                id: 'seventh-star',
                color: WHITE_STAR,
            })
            break;
        case 2:
            array.push({
                id: 'first-star',
                color: YELLOW_STAR
            }, {
                id: 'second-star',
                color: YELLOW_STAR
            }, {
                id: 'third-star',
                color: WHITE_STAR
            }, {
                id: 'fourth-star',
                color: WHITE_STAR
            }, {
                id: 'fifth-star',
                color: WHITE_STAR
            }, {
                id: 'sixth-star',
                color: WHITE_STAR
            }, {
                id: 'seventh-star',
                color: WHITE_STAR,
            })
            break;
        case 3:
            array.push({
                id: 'first-star',
                color: YELLOW_STAR
            }, {
                id: 'second-star',
                color: YELLOW_STAR
            }, {
                id: 'third-star',
                color: YELLOW_STAR
            }, {
                id: 'fourth-star',
                color: WHITE_STAR
            }, {
                id: 'fifth-star',
                color: WHITE_STAR
            }, {
                id: 'sixth-star',
                color: WHITE_STAR
            }, {
                id: 'seventh-star',
                color: WHITE_STAR,
            })
            break;
        case 4:
            array.push({
                id: 'first-star',
                color: YELLOW_STAR
            }, {
                id: 'second-star',
                color: YELLOW_STAR
            }, {
                id: 'third-star',
                color: YELLOW_STAR
            }, {
                id: 'fourth-star',
                color: YELLOW_STAR
            }, {
                id: 'fifth-star',
                color: WHITE_STAR
            }, {
                id: 'sixth-star',
                color: WHITE_STAR
            }, {
                id: 'seventh-star',
                color: WHITE_STAR,
            })
            break;
        case 5:
            array.push({
                id: 'first-star',
                color: YELLOW_STAR
            }, {
                id: 'second-star',
                color: YELLOW_STAR
            }, {
                id: 'third-star',
                color: YELLOW_STAR
            }, {
                id: 'fourth-star',
                color: YELLOW_STAR
            }, {
                id: 'fifth-star',
                color: YELLOW_STAR
            }, {
                id: 'sixth-star',
                color: WHITE_STAR
            }, {
                id: 'seventh-star',
                color: WHITE_STAR,
            })
            break;
        case 6:
            array.push({
                id: 'first-star',
                color: YELLOW_STAR
            }, {
                id: 'second-star',
                color: YELLOW_STAR
            }, {
                id: 'third-star',
                color: YELLOW_STAR
            }, {
                id: 'fourth-star',
                color: YELLOW_STAR
            }, {
                id: 'fifth-star',
                color: YELLOW_STAR
            }, {
                id: 'sixth-star',
                color: YELLOW_STAR
            }, {
                id: 'seventh-star',
                color: WHITE_STAR,
            })
            break;
        case 7:
            array.push({
                id: 'first-star',
                color: YELLOW_STAR
            }, {
                id: 'second-star',
                color: YELLOW_STAR
            }, {
                id: 'third-star',
                color: YELLOW_STAR
            }, {
                id: 'fourth-star',
                color: YELLOW_STAR
            }, {
                id: 'fifth-star',
                color: YELLOW_STAR
            }, {
                id: 'sixth-star',
                color: YELLOW_STAR
            }, {
                id: 'seventh-star',
                color: YELLOW_STAR,
            })
            break;
        default:
            array.push({
                id: 'first-star',
                color: WHITE_STAR
            }, {
                id: 'second-star',
                color: WHITE_STAR
            }, {
                id: 'third-star',
                color: WHITE_STAR
            }, {
                id: 'fourth-star',
                color: WHITE_STAR
            }, {
                id: 'fifth-star',
                color: WHITE_STAR
            }, {
                id: 'sixth-star',
                color: WHITE_STAR
            }, {
                id: 'seventh-star',
                color: WHITE_STAR,
            })
            break;
    }
    return array;
}

module.exports = {
    getRarityArray
}