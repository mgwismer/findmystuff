import React from 'react';
import SignInAndSignUp from './SignInAndSignUp';
import RoomChoiceList from './room-choice-list';
import SearchInput from './search-input';

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