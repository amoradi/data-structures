import { Queue } from "./index";

describe("Queue class", () => {
  let testQueue: Queue;

  beforeEach(() => {
    testQueue = new Queue();
  });

  // queue
  test("Queue.queue should return an array composed: [front, ..., rear]", () => {
    testQueue.push(1);
    testQueue.push(2);
    testQueue.push(3);
    expect(testQueue.queue).toEqual([1, 2, 3]);
  });

  // // size
  test("Queue.size should return the correct size (number) of the queue", () => {
    testQueue.push(1);
    testQueue.push(2);
    testQueue.push(3);
    expect(testQueue.size).toBe(3);
    testQueue.pop();
    expect(testQueue.size).toBe(2);
    testQueue.pop();
    expect(testQueue.size).toBe(1);
    testQueue.pop();
    expect(testQueue.size).toBe(0);
    testQueue.pop();
    expect(testQueue.size).toBe(0);
  });

  // // clear
  it("Should clear the queue to 0 items", () => {
    testQueue.push(1);
    testQueue.push(2);
    testQueue.push(3);
    testQueue.clear();
    expect(testQueue.size).toBe(0);
    expect(testQueue.queue).toEqual([]);
    testQueue.push("foo");
    testQueue.clear();
    expect(testQueue.size).toBe(0);
    expect(testQueue.queue).toEqual([]);
  });

  // // isEmpty
  test("Queue.isEmpty should return true when the queue.size === 0", () => {
    expect(testQueue.isEmpty()).toBe(true);
    testQueue.push(1);
    testQueue.push(2);
    testQueue.clear();
    expect(testQueue.isEmpty()).toBe(true);
    testQueue.push(1);
    testQueue.push(2);
    testQueue.pop();
    testQueue.pop();
    expect(testQueue.isEmpty()).toBe(true);
    testQueue.push(1);
    testQueue.pop();
    testQueue.pop();
    expect(testQueue.isEmpty()).toBe(true);
  });

  test("Queue.isEmpty should return false when queue.size > 0", () => {
    testQueue.push(0);
    expect(testQueue.isEmpty()).toBe(false);
    testQueue.clear();
    testQueue.push(0);
    testQueue.push(0);
    expect(testQueue.isEmpty()).toBe(false);
  });

  // toString
  it("Should toString the queue [front, ..., rear]", () => {
    testQueue.push(1);
    testQueue.push(2);
    testQueue.push(3);
    expect(testQueue.toString()).toBe("[1,2,3]");
  });

  // peek
  it("Should peek the front of the queue", () => {
    testQueue.push(1);
    testQueue.push(2);
    expect(testQueue.peek()).toBe(1);
    testQueue.push("2");
    testQueue.push(2);
    testQueue.push(4);
    testQueue.push(0);
    expect(testQueue.peek()).toBe(1);
    testQueue.clear();
    testQueue.push("foo bar");
    expect(testQueue.peek()).toBe("foo bar");
  });

  // peek
  it("Should not mutate stack when peeking", () => {
    testQueue.push(1);
    testQueue.push(2);
    testQueue.peek();
    expect(testQueue.queue).toEqual([1, 2]);
  });

  // push
  it("Should push items to the rear of the queue", () => {
    testQueue.push(55);
    expect(testQueue.size).toBe(1);
    expect(testQueue.queue).toEqual([55]);
    testQueue.push(2);
    testQueue.push("3");
    expect(testQueue.size).toBe(3);
    expect(testQueue.queue).toEqual([55, 2, "3"]);
  });

  // enqueue (push alias)
  it("Should enqueue items to the rear of the queue", () => {
    testQueue.enqueue(55);
    expect(testQueue.size).toBe(1);
    expect(testQueue.queue).toEqual([55]);
    testQueue.enqueue(2);
    testQueue.enqueue("3");
    expect(testQueue.size).toBe(3);
    expect(testQueue.queue).toEqual([55, 2, "3"]);
  });

  // pop
  it("Should pop items from the front of queue", () => {
    testQueue.push(55);
    testQueue.push(4);
    expect(testQueue.pop()).toBe(55);
    expect(testQueue.size).toBe(1);
    expect(testQueue.queue).toEqual([4]);
    testQueue.push(55);
    testQueue.push(65);
    testQueue.push({});
    testQueue.push("foo");
    expect(testQueue.pop()).toBe(4);
    expect(testQueue.size).toBe(4);
    expect(testQueue.queue).toEqual([55, 65, {}, "foo"]);
  });

  // dequeue (pop alias)
  it("Should dequeue items from the front of queue", () => {
    testQueue.push(55);
    testQueue.push(4);
    expect(testQueue.dequeue()).toBe(55);
    expect(testQueue.size).toBe(1);
    expect(testQueue.queue).toEqual([4]);
    testQueue.push(55);
    testQueue.push(65);
    testQueue.push({});
    testQueue.push("foo");
    expect(testQueue.dequeue()).toBe(4);
    expect(testQueue.size).toBe(4);
    expect(testQueue.queue).toEqual([55, 65, {}, "foo"]);
  });
});
