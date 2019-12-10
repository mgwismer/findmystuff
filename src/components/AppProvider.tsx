import React from 'react';
import { appContext } from './AppContext';

export type AppProviderProps = {
    numRooms: number;
};

export const AppProvider: React.FunctionComponent<AppProviderProps> = () => {
    const context = {
        rooms: [],
        subAreas: [],
        items: [],
    };

    return <appContext.Provider value={context} />
}