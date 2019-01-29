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
                            'subAreaName': 'buffet',
                            'drawers':
                                [
                                    {
                                        'drawerName': 'left',
                                        'itemsFound': ['table napkins', 'costume hats']
                                    },
                                    {
                                        'drawerName': 'left middle',
                                        'itemsFound': ['playing cards', 'cloth diapers']
                                    },
                                    {
                                        'drawerName': 'right middle',
                                        'itemsFound': [],
                                    },
                                    {
                                        'drawerName': 'right',
                                        'itemsFound': ['light bulbs', 'candles']
                                    }
                                ],
                        },
                        {
                            'subAreaName': 'cupboard',
                            'drawers':
                                [
                                    {
                                        'drawerName': 'top',
                                        'itemsFound': ['quinoa', 'pasta']
                                    },
                                    {
                                        'drawerName': 'bottom',
                                        'itemsFound': ['pasta bowls', 'bread bowl', 'armitel plate']
                                    },
                                ]
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
                        }
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
            {
                'roomName': 'basement stairs',
                'itemsFound': ['swiffer', 'shearers', 'tape']
            }
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

export function fetchRoom(room) {
    return new Promise((resolve, reject) => {

    });
}