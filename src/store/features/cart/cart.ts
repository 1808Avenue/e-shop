import { autorun, makeAutoObservable } from 'mobx';

import { IProduct } from '../../api/products';

class Cart {
  items: IProduct[] = [];
  allSelectStatus: boolean = false;
  itemToAdd: IProduct | null = null;
  outOfStockIds: number[] = [];

  constructor() {
    makeAutoObservable(this);

    const name = 'cart';
    const savedStore = localStorage.getItem(name);

    if (savedStore) {
      const deserializedData = JSON.parse(savedStore);

      this.items = deserializedData.items;
      this.allSelectStatus = deserializedData.allSelectStatus;
    }

    autorun(() => {
      const serializedData = JSON.stringify({
        items: this.items,
        allSelectStatus: this.allSelectStatus,
        outOfStockIds: this.outOfStockIds,
      });

      localStorage.setItem(name, serializedData);
    });
  }

  addItem(item: IProduct) {
    if (this.items.some(({ id }) => item.id === id)) {
      const index = this.items.findIndex(({ id }) => item.id === id);

      if (this.items[index].count >= this.items[index].totalCount) {
        if (!this.outOfStockIds.includes(this.items[index].id)) {
          this.outOfStockIds.push(this.items[index].id);
        }
      } else {
        this.outOfStockIds = this.outOfStockIds.filter((id) => id !== item.id);
        this.items[index].count += 1;
      }
    } else {
      this.items.push(item);
    }
  }

  removeItem(item: IProduct) {
    this.items = this.items.filter(({ id }) => id !== item.id);
  }

  increment(item: IProduct) {
    const index = this.items.findIndex(({ id }) => id === item.id);

    this.items[index].count += 1;
  }

  decrement(item: IProduct) {
    const index = this.items.findIndex(({ id }) => id === item.id);

    if (item.count === 1) {
      this.removeItem(item);
    } else {
      this.items[index].count -= 1;
    }
  }

  toggleSelectItem(item: IProduct) {
    const index = this.items.findIndex(({ id }) => id === item.id);

    this.items[index].selected = !this.items[index].selected;
  }

  toggleSelectAllItems(checkedStatus: boolean) {
    this.items.forEach((item) => (item.selected = checkedStatus));
    this.allSelectStatus = checkedStatus;
  }
}

export default new Cart();
