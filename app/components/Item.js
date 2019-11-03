import React from "react";
import { inject, observer } from "mobx-react";

@inject(store => ({
  itemStore: store.itemStore,
  cartStore: store.cartStore
}))
@observer
export default class Item extends React.Component {
  handleEdit = () => {
    let newTitle = prompt("Edit the title:", this.props.item.title);
    let newPrice = prompt("Edit the price:", this.props.item.price);

    if (newTitle !== null || newPrice !== null) {
      this.props.itemStore.editItem(this.props.item, newTitle, newPrice);
    }
  };

  handleDelete = () => {
    this.props.itemStore.deleteItem(this.props.item);
    this.props.cartStore.deleteEntry(this.props.item);
  };

  handleAddToCart = () => {
    this.props.cartStore.addEntry(this.props.item);
  };

  render() {
    const { title, price } = this.props.item;
    return (
      <div className="item">
        <div>{title}</div>
        <div className="price">{price}</div>
        <button onClick={this.handleEdit}>✎</button>
        <button onClick={this.handleDelete}>🗑</button>
        <button onClick={this.handleAddToCart}>»</button>
      </div>
    );
  }
}
