import { observable, action } from "mobx";

export default class LogStore {
  @observable message = [];

  @action
  logAddItem(title) {
    this.message.push(`Add new item: ${title}`);
  }

  @action
  logDeleteItem(title) {
    this.message.push(`Delete item: ${title}`);
  }

  @action
  logEditItem(title, price, newTitle, newPrice) {
    this.message.push(
      `Edit item: ${title} (${price}) => ${newTitle} (${newPrice})`
    );
  }

  @action
  logAddEntry(item, isNewEntry) {
    if (isNewEntry) {
      this.message.push(`Add a new item to cart: ${item.title}`);
    } else {
      this.message.push(
        `Increase the amount of an item in cart: +1 ${item.title}`
      );
    }
  }

  @action
  logRemoveEntry(item, completelyRemove) {
    if (completelyRemove) {
      this.message.push(`Remove an item from cart: ${item.title}`);
    } else {
      this.message.push(
        `Reduce the amount of an item in cart: -1 ${item.title}`
      );
    }
  }
}
