import { Collection as CollectionInterface } from "../interfaces";
import { Items } from "../types";

abstract class Collection implements CollectionInterface {
  protected items: Items;
  protected count: number;

  abstract peek(): any;
  abstract pop(): any;
  abstract toString(): string;

  constructor() {
    this.items = {};
    this.count = 0;
  }

  get size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  push(item: any) {
    this.items[this.count] = item;
    this.count++;
  }
}

export { Collection };
