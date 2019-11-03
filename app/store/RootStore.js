import ItemStore from "./ItemStore";
import CartStore from "./CartStore";
import LogStore from "./LogStore";

class RootStore {
  constructor() {
    this.logStore = new LogStore();
    this.itemStore = new ItemStore(this.logStore);
    this.cartStore = new CartStore(this.logStore);
  }
}

const store = new RootStore();

export default store;
