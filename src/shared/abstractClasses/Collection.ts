import { Collection as CollectionInterface } from "../interfaces";
import { Items } from "../types";

abstract class Collection<T> implements CollectionInterface<T> {
  protected items: Items;
  protected count: number;

  abstract peek(): T;
  abstract pop(): T;
  abstract toString(): string;

  constructor() {
    this.items = {};
    this.count = 0;
  }

  get size(): number {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  push(item: T) {
    this.items[this.count] = item;
    this.count++;
  }
}

export { Collection };
