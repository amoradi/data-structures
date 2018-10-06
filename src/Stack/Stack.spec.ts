import { Stack } from "./index";

describe("Stack", () => {
  let testStack: Stack;

  beforeEach(() => {
    testStack = new Stack();
  });

  // stack
  test("Stack.stack should return an array composed: [base, ..., top]", () => {
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.stack).toEqual([1, 2, 3]);
  });

  // size
  test("Stack.size should return the correct size (number) of the stack", () => {
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.size).toBe(3);
    testStack.pop();
    expect(testStack.size).toBe(2);
    testStack.pop();
    expect(testStack.size).toBe(1);
    testStack.pop();
    expect(testStack.size).toBe(0);
    testStack.pop();
    expect(testStack.size).toBe(0);
  });

  // clear
  it("Should clear the stack to 0 items", () => {
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    testStack.clear();
    expect(testStack.size).toBe(0);
    expect(testStack.stack).toEqual([]);
    testStack.push("foo");
    testStack.clear();
    expect(testStack.size).toBe(0);
    expect(testStack.stack).toEqual([]);
  });

  // isEmpty
  test("Stack.isEmpty should return true when the stack has 0 items", () => {
    expect(testStack.isEmpty()).toBe(true);
    testStack.push(1);
    testStack.push(2);
    testStack.clear();
    expect(testStack.isEmpty()).toBe(true);
    testStack.push(1);
    testStack.push(2);
    testStack.pop();
    testStack.pop();
    expect(testStack.isEmpty()).toBe(true);
    testStack.push(1);
    testStack.pop();
    testStack.pop();
    expect(testStack.isEmpty()).toBe(true);
  });

  test("Stack.isEmpty should return false when the stack has > 0 items", () => {
    testStack.push(0);
    expect(testStack.isEmpty()).toBe(false);
    testStack.clear();
    testStack.push(0);
    testStack.push(0);
    expect(testStack.isEmpty()).toBe(false);
  });

  // toString
  it("Should toString the stack [base, ..., top]", () => {
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.toString()).toBe("[1,2,3]");
  });

  // peek
  it("Should peek from the top ('front') of the stack", () => {
    testStack.push(1);
    testStack.push(2);
    expect(testStack.peek()).toBe(2);
    testStack.push("2");
    testStack.push(2);
    testStack.push(4);
    testStack.push(0);
    expect(testStack.peek()).toBe(0);
  });

  // front
  it("Should front (peek alias) from the top ('front') of the stack", () => {
    testStack.push(1);
    testStack.push(2);
    expect(testStack.front()).toBe(2);
    testStack.push("2");
    testStack.push(2);
    testStack.push(4);
    testStack.push(0);
    expect(testStack.front()).toBe(0);
  });

  // peek & front
  it("Should not mutate stack when peeking/fronting", () => {
    testStack.push(1);
    testStack.push(2);
    testStack.peek();
    expect(testStack.stack).toEqual([1, 2]);
    testStack.push("2");
    testStack.push(2);
    testStack.front();
    expect(testStack.stack).toEqual([1, 2, "2", 2]);
  });

  // push
  it("Should push items to the stack top of the stack", () => {
    testStack.push(55);
    expect(testStack.size).toBe(1);
    expect(testStack.stack).toEqual([55]);
    testStack.push(2);
    testStack.push("3");
    expect(testStack.size).toBe(3);
    expect(testStack.stack).toEqual([55, 2, "3"]);
  });

  // pop
  it("Should remove items from the top of stack", () => {
    testStack.push(55);
    expect(testStack.pop()).toBe(55);
    expect(testStack.size).toBe(0);
    expect(testStack.stack).toEqual([]);
    testStack.push(55);
    testStack.push(65);
    testStack.push({});
    testStack.push("foo");
    expect(testStack.pop()).toBe("foo");
    expect(testStack.size).toBe(3);
    expect(testStack.stack).toEqual([55, 65, {}]);
  });
});
