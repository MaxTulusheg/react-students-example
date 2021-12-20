import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { retrieveUserInfo } from '../../store/user/user.slice';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const userInfo = useSelector((state) => state.user.user);
  const userError = useSelector((state) => state.user.error);

  const onRequestUser = () => {
    dispatch(retrieveUserInfo());
  };

  return (
    <div>
      <h1>Home</h1>
      <p style={{ textAlign: 'center' }}>In this app you can add and look for books!</p>
      <div>
        <button type="button" onClick={onRequestUser}>Get user info</button>
      </div>
      {isLoading && (
        <p>Loading user data...</p>
      )}
      {userError && (
        <>
          <p>Error while getting the user:</p>
          <pre>{JSON.stringify(userError, null, 2)}</pre>
        </>
      )}
      {userInfo && (
        <pre>
          {JSON.stringify(userInfo, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default HomePage;
