import { Stack } from "./index";

describe("Stack", () => {
  let testStack: Stack;

  beforeEach(() => {
    testStack = new Stack();
  });

  it("Should push items to the stack", () => {
    testStack.push(55);
    expect(testStack.size()).toBe(1);
    expect(testStack.pop()).toBe(55);
    testStack.push(2);
    testStack.push("3");
    expect(testStack.size()).toBe(2);
    expect(testStack.pop()).toBe("3");
    expect(testStack.pop()).toBe(2);
  });
});
