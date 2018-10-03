type Items = { [item: number]: any };

interface StackInterface {
  isEmpty(): boolean;
  size(): number;
  toString(): string;
  push(item: any): void;
  pop(): any;
  peek(): any;
}

class Stack implements StackInterface {
  private items: Items;
  private count: number;

  constructor() {
    this.items = {};
    this.count = 0;
  }

  private returnUndefinedWhenEmpty() {
    if (this.isEmpty()) return undefined;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  toString() {
    return JSON.stringify(this.items);
  }

  push(item: any) {
    this.items[this.count] = item;
    this.count++;
  }

  pop() {
    this.returnUndefinedWhenEmpty();

    const top = this.items[this.count - 1];

    this.count--;
    delete this.items[this.count];
    return top;
  }

  peek() {
    this.returnUndefinedWhenEmpty();

    if (this.count > 0) {
      return this.items[this.count - 1];
    }
  }
}

export { Stack };
