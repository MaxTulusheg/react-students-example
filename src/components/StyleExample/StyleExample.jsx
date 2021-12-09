import React from 'react';

import styles from './StyleExample.module.css';
import './StyleExample.css';

const FancyComponent = () => {
  const styleObject = {
    margin: '10px auto',
    borderBottom: '5px solid #3791be',
  };

  return (
    <div className="wrapper">
      <ul className={styles.list}>
        <li>First</li>
        <li style={styleObject}>Second</li>
        <li>Third</li>
      </ul>
    </div>
  );
};

export default FancyComponent;
