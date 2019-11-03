import React from "react";
import CartEntry from "./CartEntry";

import { inject, observer } from "mobx-react";

@inject(store => ({
  cartStore: store.cartStore
}))
@observer
export default class Cart extends React.Component {
  render() {
    const { cartStore } = this.props;
    return (
      <div className="cart">
        <b>Your Shopping Cart</b>
        <div className="list">
          {cartStore.entries.map(entry => (
            <CartEntry key={`entry-${entry.item.id}`} entry={entry} />
          ))}
        </div>
        <b>Total: {cartStore.totalPrice}</b>
      </div>
    );
  }
}
