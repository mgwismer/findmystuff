import React from 'react';

const SearchResults = props => {  
    const { roomName, subAreaName } = props;
    return (
        roomName && 
        <div>
            {roomName}
            {subAreaName}
        </div>
    );
}

export default SearchResults;