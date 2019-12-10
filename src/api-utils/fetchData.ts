import { RoomType, SubAreaType, ItemType } from "../models/data-models";
import firebase from "firebase";

export const fetchRoomData = async () => {
    const snapshot = await firebase.firestore().collection('thedomicile').get();

    const rooms = normalizeRoomData(snapshot);

    const subAreas = await fetchSubAreaData(rooms);

    const items = fetchItemData(subAreas);

    return {
        rooms,
        subAreas,
        items,
    }
}

export function normalizeRoomData(snapshot: any): RoomType[] {
    let rooms: RoomType[] = [];
    snapshot.forEach((doc: { data: () => { name: string, subAreas: Array<string> }}) => {
        const data = doc.data();
        const room = {
            name: data.name,
            subAreas: data.subAreas,
        };
        rooms.push(room);
    });
    return rooms;
}

export const fetchSubAreaData = async (rooms: RoomType[]) => {
    let subAreas: Record<string, SubAreaType> = {};

    for (const room of rooms) {
        const roomSubAreas = room.subAreas;
        for (const subArea of roomSubAreas) {
            const snapshot = await firebase.firestore().collection('thedomicile').doc(room.name).collection(subArea).get();
                let items: string[] = []
                snapshot.forEach(doc => {
                    items = doc.data()['items found'];
                });
                const subAreaEntry = {
                    name: subArea,
                    room: room.name,
                    items,
                }
                subAreas[subArea] = subAreaEntry;
            };
    };
    return Promise.resolve(subAreas);
}

export const fetchItemData = (subAreas: Record<string, SubAreaType>) => {
    let items: Record<string, ItemType> = {};
    const subAreasArray = Object.values(subAreas);
    subAreasArray.forEach(area => {
        area.items.forEach(item => {
            const itemEntry = {
                name: item,
                subArea: area.name,
                room: area.room,
            };
            items[item] = itemEntry;
        })
    })
    return items;
}