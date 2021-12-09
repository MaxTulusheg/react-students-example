import React, { Component } from 'react';

import ShopListItem from '../ShopListItem/ShopListItem';
import generateIdentifier from '../../helpers/generateIdentifier';

import styles from './ShopList.module.css';

class ShopList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  addNewShopItem() {
    const newShopItem = {
      id: generateIdentifier(),
      name: 'New Item',
    };

    this.setState((prevState) => ({
      list: [
        ...prevState.list,
        newShopItem,
      ],
    }));
  }

  removeShopItem(id) {
    this.setState((prevState) => ({
      list: prevState.list.filter((listItem) => listItem.id !== id),
    }));
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <button
          type="button"
          className={styles['add-button']}
          onClick={() => this.addNewShopItem()}
        >
          Add new item
        </button>
        <ul>
          {list.map((listItem) => (
            <ShopListItem
              {...listItem}
              key={listItem.id}
              onRemove={(id) => this.removeShopItem(id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShopList;
