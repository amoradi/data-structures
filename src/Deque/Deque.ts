import { Collection } from "../shared/abstractClasses";
import { Collection as CollectionInterface } from "../shared/interfaces";

interface Deque<T> extends CollectionInterface<T> {
  // alias methods
  pop: typeof Deque.prototype.removeFront;
  peek: typeof Deque.prototype.peekFront;
}

class Deque<T> extends Collection<T> {
  private lowestCount: number;

  constructor() {
    super();
    this.lowestCount = 0;
  }

  get deque() {
    // returns [front, ..., rear]
    const deque: Array<T> = [];

    Object.entries(this.items).forEach(([index, value]) => {
      deque[parseInt(index) - this.lowestCount] = value;
    });

    return deque;
  }

  get size() {
    return this.count - this.lowestCount;
  }

  addBack(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.items[0] = element;
    }
  }

  clear() {
    super.clear();
    this.lowestCount = 0;
  }

  peekFront() {
    if (this.isEmpty()) return undefined;

    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  removeBack() {
    if (this.isEmpty()) return undefined;

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  removeFront() {
    if (this.isEmpty()) return undefined;

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  toString() {
    if (this.isEmpty()) return "";

    return JSON.stringify(this.deque);
  }
}

// alias methods
Deque.prototype.pop = Deque.prototype.removeFront;
Deque.prototype.peek = Deque.prototype.peekFront;

export { Deque };
