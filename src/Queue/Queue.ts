import { Collection } from "../shared/abstractClasses";
import { Collection as CollectionInterface } from "../shared/interfaces";

interface Queue extends CollectionInterface {
  // alias methods
  enque: typeof Queue.prototype.push;
  denque: typeof Queue.prototype.pop;
}

class Queue extends Collection implements Queue {
  private lowestCount: number;

  constructor() {
    super();
    this.lowestCount = 0;
  }

  peek() {}

  pop() {}

  toString() {
    return "";
  }
}

// alias methods
Queue.prototype.enque = Queue.prototype.push;
Queue.prototype.denque = Queue.prototype.pop;

export { Queue };
