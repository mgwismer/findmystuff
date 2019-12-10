import React, { useState, useEffect } from 'react';
import  Room from './room';
import { NormalizedHouseData, RoomType } from '../../models/data-models';

type OwnProps = {
  totalHouse: NormalizedHouseData;
};

const emptyHouse: NormalizedHouseData = {
  rooms: [],
  subAreas: {},
  items: {},
};

export const RoomChoiceList: React.FunctionComponent<OwnProps> = ({ totalHouse }) => {

  const [houseState, setHouseState] = useState<NormalizedHouseData>(emptyHouse);
  const [toggleState, setToggleState] = useState<boolean>(false);

  useEffect(() => setHouseState(totalHouse), [totalHouse])
  
  const handleRoomsButtonClick = () => {
      console.log('handle click', toggleState, totalHouse)
      if (!toggleState) {
        setHouseState(totalHouse);
        setToggleState(true);
      } else {
        setHouseState(emptyHouse);
        setToggleState(false);
      }
    };

    const { rooms, subAreas } = houseState;
    const roomsInHouseComponent = rooms.map((room, index) => {
      // const subAreasInRoom = subAreas.filter(subArea => subArea.room === room.name);
      return (
        <Room
          roomName={room.name}
          key={index}
          roomSubAreas={room.subAreas}
          subAreas={subAreas}
        >
          <br/>
        </Room> 
      )}
    );
  
    return (
      <div className="App">
        <button className="App-header">
          <h2 onClick={handleRoomsButtonClick}>Welcome to Find My Stuff (click here)</h2>
        </button>
        <p className="App-intro">
          Then click on rooms
          <br/>
        </p>
        {roomsInHouseComponent}
        </div>
    );
  }
