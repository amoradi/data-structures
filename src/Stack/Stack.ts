type Items = { [item: number]: any };

interface StackInterface {
  readonly stack: Array<any>;
  readonly size: number;
  isEmpty(): boolean;
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

  // returns [base, ..., top]
  get stack() {
    const stack: Array<any> = [];

    Object.entries(this.items).forEach(([index, value]) => {
      stack[parseInt(index)] = value;
    });

    return stack;
  }

  get size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  toString() {
    return JSON.stringify(this.stack);
  }

  push(item: any) {
    this.items[this.count] = item;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    const top = this.items[this.count - 1];

    this.count--;
    delete this.items[this.count];
    return top;
  }

  peek() {
    if (this.isEmpty()) return undefined;

    if (this.count > 0) {
      return this.items[this.count - 1];
    }
  }
}

export { Stack };
