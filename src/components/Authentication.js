import React from 'react';
import SignInAndSignUp from './SignIn/SignInAndSignUp';
import RoomChoiceList from './Rooms/room-choice-list';
import SearchInput from './Search/search-input';

const Authentication = ({ user, loading }) => {
  if (loading) return null;

  const signin = user ? 
    <div>
        <RoomChoiceList />
        <SearchInput />
    </div> : <SignInAndSignUp />
  return signin;
};

export default Authentication;