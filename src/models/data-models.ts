export type RoomType = {
    name: string;
    subAreas: Array<string>;
};

export type SubAreaType = {
    name: string;
    room: string;
    items: Array<string>;
};

export type ItemType = {
    name: string;
    subArea: string;
    room: string;
}

export type NormalizedHouseData = {
    rooms: Array<RoomType>;
    subAreas: Array<SubAreaType>;
    items: Array<ItemType>;
}