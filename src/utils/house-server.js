// database of the house

export const theHouse = {
    'rooms':
        [
            {
                'roomName': 'kitchen',
                'subAreas':
                    [
                        {
                            'subAreaName': 'stair closet',
                            'itemsFound':   ['mop', 'pasta maker', 'ceramic bowl', 'crockpot']
                        },
                        {
                            'subAreaName': 'Top of Fridge',
                            'itemsFound': ['mixer', 'cookie sheets']
                        },
                        {
                            'subAreaName': 'Top Shelf of Cabinets',
                            'itemsFound': ['bread pans']
                        }
                    ]
            },
            {
                'roomName': 'dining room',
                'subAreas':
                    [
                        {
                            'subAreaName': 'buffet left drawer',
                            'itemsFound': ['table napkins', 'costume hats']
                        },
                        {
                            'subAreaName': 'buffet left middle',
                            'itemsFound': ['playing cards', 'cloth diapers']
                        },
                        {
                            'subAreaName': 'buffet right middle',
                            'itemsFound': [],
                        },
                        {
                            'subAreaName': 'buffet right',
                            'itemsFound': ['light bulbs', 'candles']
                        },
                        {
                            'subAreaName': 'cupboard top drawer',
                            'itemsFound': ['quinoa', 'pasta']
                        },
                        {
                            'drawerName': 'cupboard bottom drawer',
                            'itemsFound': ['pasta bowls', 'bread bowl', 'armitel plate']
                        },
                    ]
            },
            {
                'roomName': 'basement',
                'subAreas':
                    [
                        {
                            'subAreaName': 'shelf',
                            'itemsFound': []
                        },
                        {
                            'subAreaName': 'basement stairs',
                            'itemsFound': ['swiffer', 'shearers', 'tape']
                        },
                    ]
            },
            {
                'roomName': 'bathroom',
                'subAreas':
                    [
                        {
                            'subAreaName': 'closet',
                            'itemsFound': ['NyQuil', 'toilet paper']
                        },
                        {
                            'subAreaName': 'medicine cabinet',
                            'itemsFound': ['benadryl','ducolax']
                        },
                    ]
            },
        ]
}

export function fetchHouse(path) {
    return new Promise((resolve, reject) => {
        const rooms = theHouse[path];
        // console.log(rooms);
        if (rooms) {
            resolve(rooms);
        }
        else {
            reject({
                message: `not found.`
            });
        }
    });
}

export function fetchRoom(roomName) {
    return new Promise((resolve, reject) => {
        const rooms = theHouse['rooms'];
        const room = rooms.filter(room => room.roomName === roomName);
        if (room) {
            resolve(room[0].subAreas);
        } else {
            reject({
                message: 'not found.'
            });
        }

    });
}

export function findSubArea(roomName, subAreaName) {
    return new Promise((resolve, reject) => {
        fetchRoom(roomName).then(subAreas => {
            const subArea = subAreas.filter(subArea => subArea.subAreaName === subAreaName);
            if (subArea) {
                resolve(subArea[0]);
            } else {
                reject({
                    message: 'not found'
                });
            }
        });
    });
}

export function findPlaceWithObject(item, path) {
    return new Promise((resolve, reject) => {
        const rooms = theHouse[path];
        const area = rooms.filter(room => room.subAreas.filter(subArea => ))
    });
}