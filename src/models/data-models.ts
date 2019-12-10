export type RoomType = {
    name: string;
    subAreas: Array<string>;
};

export type subAreaType = {
    name: string;
    room: string;
    items: Array<string>;
};

export type itemType = {
    name: string;
    subArea: string;
    room: string;
}

export type NormalizedHouseData = {
    rooms: Array<RoomType>;
    subAreas: Array<subAreaType>;
    items: Array<itemType>;
}