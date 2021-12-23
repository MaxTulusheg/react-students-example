import React, { useContext } from 'react';
import styled from 'styled-components';

import CatFactWidget from '../../components/CatFactWidget/CatFactWidget';
import { GeneralContext } from '../../utils/context/GeneralContext.context';

const Text = styled.p`
  text-align: center;
`;
const Button = styled.button`
  display: block;
  margin: 10px auto;
  font-size: 12pt;
`;

const HomePage = () => {
  const { changeData, ...contextValue } = useContext(GeneralContext);

  // eslint-disable-next-line no-console
  console.log('Context:', contextValue);

  const changeTheme = () => {
    changeData((oldContextValue) => ({
      ...oldContextValue,
      isBlue: !oldContextValue.isBlue,
    }));
  };

  return (
    <div>
      <h1>Home</h1>
      <Text>In this app you can add and look for books!</Text>
      <Button type="button" onClick={changeTheme}>Change theme</Button>
      <CatFactWidget />
    </div>
  );
};

export default HomePage;
