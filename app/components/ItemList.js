import React from "react";
import Item from "./Item";
import { inject, observer } from "mobx-react";

@inject(store => ({
  itemStore: store.itemStore,
  cartStore: store.cartStore
}))
@observer
export default class ItemList extends React.Component {
  handleAddItem = () => {
    let title = prompt("Enter a title:");
    let price = prompt("Enter a price:");

    if (title !== null || price !== null) {
      this.props.itemStore.addItem(title, price);
    }
  };

  render() {
    return (
      <div className="item-list">
        <b>Available Items</b>
        <div className="list">
          {this.props.itemStore.items.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </div>
        <button onClick={this.handleAddItem}>New Item</button>
      </div>
    );
  }
}
