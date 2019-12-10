import React, { useState, useEffect } from 'react';
import { fetchRoomData } from '../api-utils/fetchData';
import { RoomChoiceList } from './Rooms/room-choice-list';
import SearchInput from './Search/search-input';
import { NormalizedHouseData } from '../models/data-models';

const emptyHouse: NormalizedHouseData = {
  rooms: [],
  subAreas: {},
  items: {}
};

const SearchAndList: React.FC = () => {

  const [dataState, setDataState] = useState(emptyHouse);

  useEffect(() => {
    const getData = async () => {
      const totalData = await fetchRoomData();
      setDataState(totalData);
    }

    getData();
  }, []);

    return (
        <div>
            <RoomChoiceList totalHouse={dataState} />
            <SearchInput suggestionList={dataState.items} />
        </div>
    )
  }

  export default SearchAndList;