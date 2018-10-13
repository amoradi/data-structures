import { Collection } from "../shared/abstractClasses";
import { Collection as CollectionInterface } from "../shared/interfaces";

interface Queue<T> extends CollectionInterface<T> {
  // alias methods
  enqueue: typeof Queue.prototype.push;
  dequeue: typeof Queue.prototype.pop;
}

class Queue<T> extends Collection<T> implements Queue<T> {
  private frontItemCount: number;

  constructor() {
    super();
    this.frontItemCount = 0;
  }

  get queue() {
    // returns [front, ..., rear]
    const queue: Array<any> = [];

    Object.entries(this.items).forEach(([index, value]) => {
      queue[parseInt(index) - this.frontItemCount] = value;
    });

    return queue;
  }

  get size() {
    return this.count - this.frontItemCount;
  }

  clear() {
    super.clear();
    this.frontItemCount = 0;
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this.items[this.frontItemCount];
  }

  pop() {
    if (this.isEmpty()) return undefined;

    const front = this.items[this.frontItemCount];

    delete this.items[this.frontItemCount];
    this.frontItemCount++;

    return front;
  }

  toString() {
    if (this.isEmpty()) return "";

    return JSON.stringify(this.queue);
  }
}

// alias methods
Queue.prototype.enqueue = Queue.prototype.push;
Queue.prototype.dequeue = Queue.prototype.pop;

export { Queue };
