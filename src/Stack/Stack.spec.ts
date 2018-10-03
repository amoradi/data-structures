import { Stack } from "./index";

describe("Stack", () => {
  let testStack: Stack;

  beforeEach(() => {
    testStack = new Stack();
  });

  it("Should push items to the stack", () => {
    testStack.push(55);
    expect(testStack.size).toBe(1);
    expect(testStack.stack).toEqual([55]);
    testStack.push(2);
    testStack.push("3");
    expect(testStack.size).toBe(3);
    expect(testStack.stack).toEqual([55, 2, "3"]);
  });

  it("Should remove items from the stack, LIFO", () => {
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
