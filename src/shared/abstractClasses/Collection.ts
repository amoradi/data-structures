import { Collection as CollectionInterface } from "../interfaces";
import { Items } from "../types";

abstract class Collection implements CollectionInterface {
  protected items: Items;
  protected count: number;

  constructor() {
    this.items = {};
    this.count = 0;
  }

  abstract peek(): any;
  abstract pop(): any;
  abstract toString(): string;

  isEmpty(): boolean {
    return this.count === 0;
  }

  push(item: any) {
    this.items[this.count] = item;
    this.count++;
  }
}

export { Collection };
