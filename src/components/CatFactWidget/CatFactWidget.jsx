import React from 'react';
import styled from 'styled-components';

import useCatFact from '../../utils/hooks/useCatFact';

const Button = styled.button`
  display: block;
  font-size: 16pt;
  padding: 10px;
  border: 2px  solid #2d8dfb;
  border-radius: 5px;
  background: #2d8dfb;
  color: #fff;
  :hover {
    cursor: pointer;
    color: #2d8dfb;
    background: #fff;
  }
`;

const FactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  border: 1px solid #2d8dfb;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 3px #2d8dfb;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20pt;
`;

const CatFactWidget = () => {
  const { fact, refreshFact } = useCatFact();

  return fact && (
    <FactWrapper>
      <Title>Cat Fact:</Title>
      <p>{fact}</p>
      <Button type="button" onClick={refreshFact}>I need more!</Button>
    </FactWrapper>
  );
};

export default CatFactWidget;
