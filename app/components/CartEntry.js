import React from "react";
import { inject, observer } from "mobx-react";

@inject(store => ({
  itemStore: store.itemStore,
  cartStore: store.cartStore
}))
@observer
export default class CartEntry extends React.Component {
  handleRemove = () => {
    this.props.cartStore.removeEntry(this.props.entry.item);
  };

  render() {
    const { item, amount } = this.props.entry;
    return (
      <div className="item">
        <div>{item.title}</div>
        <div className="amount">x{amount}</div>
        <button onClick={this.handleRemove}>«</button>
      </div>
    );
  }
}
