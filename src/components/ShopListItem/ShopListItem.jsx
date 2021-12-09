import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './ShopListItem.module.css';

const ShopListItem = ({ name, id, onRemove }) => {
  useEffect(() => {
    console.log('ShopListItem - componentDidMount');

    return () => console.log('ShopListItem - componentDidUnmount');
  }, []);

  return (
    <li className={styles.item}>
      <span className={styles.text}>
        {name}
      </span>
      <span className={styles.remove} onClick={() => onRemove(id)}>X</span>
    </li>
  );
};

ShopListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ShopListItem;
