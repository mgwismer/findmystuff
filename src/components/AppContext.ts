import React from 'react';

type appContext = {
    rooms: Array<string>;
};

export const appContext = React.createContext<appContext>({
    rooms: [],
});