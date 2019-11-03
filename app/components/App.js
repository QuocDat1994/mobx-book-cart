import React from "react";
import ItemList from "./ItemList";
import Cart from "./Cart";
import { inject, observer } from "mobx-react";
import { autorun } from "mobx";
import Console from "./Console";

@inject(store => ({
  itemStore: store.itemStore,
  cartStore: store.cartStore
}))
@observer
export default class App extends React.Component {
  render() {
    autorun(() => {
      console.log(this.props.itemStore.message);
      // console.log(this.props.itemStore.items);
      // console.log(this.props.cartStore.entries);
      // console.log(this.props.itemStore.items.length);
      // console.log(this.props.cartStore.entries.length);
    });

    return (
      <div className="container">
        <h1>MobX React Old Bookstore</h1>
        <div className="content">
          <ItemList></ItemList>
          <Cart></Cart>
        </div>
        <Console />
      </div>
    );
  }
}
