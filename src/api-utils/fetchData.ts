import { NormalizedHouseData, RoomType, subAreaType } from "../models/data-models";
import firebase from "firebase";

export async function fetchRoomData() : NormalizedHouseData {
    let rooms = [];
    let subAreas = [];
    let items = [];

    const snapshot = await firebase.firestore().collection('thedomocile').get();
    const rooms: RoomType[] = normalizeRoomData(snapshot);
    // snapshot.forEach(doc => {
    //     const data = doc.data();
    //     const room = {
    //         name: data.name,
    //         subAreas: data.subAreas,
    //     };
    //     rooms.push(room);
    // });
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