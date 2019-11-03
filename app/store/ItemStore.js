import { observable, action } from "mobx";

const Item = (title, price) => {
  return {
    id: Date.now() + Math.random(),
    title: title,
    price: price
  };
};

export default class ItemStore {
  @observable items = [];
  @observable message = [];
  @observable logStore;

  constructor(logStore) {
    this.logStore = logStore;
    this.addItem("The Call of the Wild", 5.85);
    this.addItem("The Great Gatsby", 12.99);
    this.addItem("Moby-Dick", 6.95);
    this.addItem("To Kill a Mockingbird", 9.25);
  }

  @action
  addItem(title, price) {
    title = title ? title : "No title";
    price = price ? price : 0;

    this.items.push(Item(title, price));
    this.logStore.logAddItem(title);
  }

  @action
  deleteItem(itemToDelete) {
    this.items = this.items.filter(item => item.id != itemToDelete.id);
    this.logStore.logDeleteItem(itemToDelete.title);
  }

  @action
  editItem(itemToEdit, newTitle, newPrice) {
    newTitle = newTitle ? newTitle : "No title";
    newPrice = newPrice ? newPrice : 0;

    this.logStore.logEditItem(
      itemToEdit.title,
      itemToEdit.price,
      newTitle,
      newPrice
    );
    this.items = this.items.map(item => {
      if (item.id == itemToEdit.id) {
        item.title = newTitle;
        item.price = newPrice;
      }
      return item;
    });
  }
}
