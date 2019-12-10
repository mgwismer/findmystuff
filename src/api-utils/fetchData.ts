import { NormalizedHouseData, RoomType, SubAreaType, ItemType } from "../models/data-models";
import firebase from "firebase";

export const fetchRoomData = async () => {
    const snapshot = await firebase.firestore().collection('thedomocile').get();
    console.log('api', snapshot);
    snapshot.forEach(doc => {
        console.log('for each api', doc.data());
    })
    const rooms = normalizeRoomData(snapshot);

    const subAreas = await fetchSubAreaData(rooms);

    const items = fetchItemData(subAreas);

    return {
        rooms,
        subAreas,
        items
    }
}

export function normalizeRoomData(snapshot: any): RoomType[] {
    let rooms: RoomType[] = [];
    console.log('snapshot in', snapshot);
    snapshot.forEach((doc: { data: () => { name: string, subAreas: Array<string> }}) => {
        const data = doc.data();
        console.log('snaphot data', data);
        const room = {
            name: data.name,
            subAreas: data.subAreas,
        };
        console.log('before room push', room, data);
        rooms.push(room);
    });
    return rooms;
}

export const fetchSubAreaData = async (rooms: RoomType[]) => {
    let subAreas: SubAreaType[] = [];

    await rooms.forEach(room => {
        room.subAreas.forEach(subArea => {
            firebase.firestore().collection('thedomocile').doc(room.name).get().then(snapshot => {
                const subAreaEntry = {
                    name: subArea,
                    room: room.name,
                    items: [],
                }
                subAreas.push(subAreaEntry);
            });
        })
    })
    return subAreas;
}

export const fetchItemData = (subAreas: SubAreaType[]) => {
    let items: ItemType[] = [];
    subAreas.forEach(area => {
        console.log('area found', area);
        // area.items.forEach(item => {
        //     const itemEntry = {
        //         name: item.name,
        //         subArea: area.name,
        //         room: area.room,
        //     };
        //     items.push(itemEntry);
        // })
    })
    return items;
}