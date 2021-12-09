/* eslint-disable */
import React from 'react';

const ChildExample = (props) => {
  console.log(props);

  return null;
};

const JSXExample = () => {
  const names = ['Max', 'Ivan', 'Maryna', 'Natalia'];
  const simpleElement = <p>Lorem ipsum</p>;
  const lotsOfProps = {
    isBool: true,
    text: 'Hello there',
    currentUser: {
      name: 'Max',
    },
  };

  return (
    <div className="wrapper">
      {/* Special attribute names in JSX */}
      <label htmlFor="name-input">Name</label>
      <input tabIndex="-1" id="name-input" type="text" />

      {/* Brackets for js usage */}
      {simpleElement}

      <h3>Names:</h3>
      <ul>
        {/* Iterated elements ALWAYS should have key (which is not array index) */}
        {names.map((name, nameIndex) => (
          <li key={name} tabIndex={nameIndex}>{name}</li>
        ))}
      </ul>

      {lotsOfProps.isBool ? (<p>Bool is true</p>) : (<p>Bool is false</p>)}

      {lotsOfProps.isBool && (<p>*there is a fancy element rendered by a condition*</p>)}

      <ChildExample {...lotsOfProps} nameList={names} />
    </div>
  );
};

export default JSXExample;
