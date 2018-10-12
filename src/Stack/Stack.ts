import { Collection } from "../shared/abstractClasses";

// An object-based approach to a Stack
// e.g. this.items = {}
class Stack extends Collection {
  constructor() {
    super();
  }

  // returns [base, ..., top]
  get stack() {
    const stack: Array<any> = [];

    Object.entries(this.items).forEach(([index, value]) => {
      stack[parseInt(index)] = value;
    });

    return stack;
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  pop() {
    if (this.isEmpty()) return undefined;

    const top = this.items[this.count - 1];

    this.count--;
    delete this.items[this.count];
    return top;
  }

  toString() {
    return JSON.stringify(this.stack);
  }
}

export { Stack };
