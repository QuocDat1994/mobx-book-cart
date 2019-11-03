import { observable, action, computed } from "mobx";

const Entry = item => {
  return {
    item: item,
    amount: 1,
    price: function() {
      return this.item.price * this.amount;
    }
  };
};

export default class CartStore {
  @observable entries = [];
  @observable logStore;

  constructor(logStore) {
    this.logStore = logStore;
  }

  @action
  addEntry(item) {
    if (this.entries.filter(entry => entry.item.id == item.id).length) {
      this.entries = this.entries.map(entry => {
        if (entry.item.id == item.id) {
          entry.amount++;
        }
        return entry;
      });
      this.logStore.logAddEntry(item, false);
    } else {
      this.entries.push(Entry(item));
      this.logStore.logAddEntry(item, true);
    }
  }

  @action
  removeEntry(item) {
    const entry = this.entries.filter(entry => entry.item.id == item.id)[0];

    if (entry.amount > 1) {
      entry.amount--;
      this.logStore.logRemoveEntry(item, false);
    } else {
      this.entries = this.entries.filter(entry => entry.item.id != item.id);
      this.entries.length;
      this.logStore.logRemoveEntry(item, true);
    }
  }

  @action
  deleteEntry(item) {
    this.entries = this.entries.filter(entry => entry.item.id != item.id);
  }

  @computed
  get totalPrice() {
    return this.entries
      .reduce(
        (totalPrice, currentEntry) =>
          totalPrice + currentEntry.item.price * currentEntry.amount,
        0
      )
      .toFixed(2);
  }
}
