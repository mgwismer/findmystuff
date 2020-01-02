import React from 'react';
import SignInAndSignUp from './SignIn/SignInAndSignUp';
import SearchAndList from './SearchAndList';

const Authentication = ({ user, loading }) => {
  if (loading) return null;

  const signin = user ? 
    <div>
        <SearchAndList />
    </div> : <SignInAndSignUp />
  return signin;
};

export default Authentication;