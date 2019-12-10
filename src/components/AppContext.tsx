import React from 'react';
import { NormalizedHouseData } from '../models/data-models';

export type appContext = NormalizedHouseData;

export const appContext = React.createContext<appContext>({
    rooms: [],
    subAreas: [],
    items: [],
});