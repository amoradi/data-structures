import { baseConverter } from "./baseConverter";

describe("Base Converter", () => {
  // it('decimalToBinary 1 -> 1', () => {
  //   expect(decimalToBinary(1)).toBe('1');
  // });

  // it('decimalToBinary 2 -> 11', () => {
  //   expect(decimalToBinary(2)).toBe('10');
  // });

  // it('decimalToBinary 233 -> 11101001', () => {
  //   expect(decimalToBinary(233)).toBe('11101001');
  // });

  // it('decimalToBinary 10 -> 1010', () => {
  //   expect(decimalToBinary(10)).toBe('1010');
  // });

  // it('decimalToBinary 1000 -> 1111101000', () => {
  //   expect(decimalToBinary(1000)).toBe('1111101000');
  // });

  it("baseConverter 77, 10 -> 77", () => {
    expect(baseConverter(77, 10)).toBe("77");
  });

  it("baseConverter 100345, 2 -> 11000011111111001", () => {
    expect(baseConverter(100345, 2)).toBe("11000011111111001");
  });

  it("baseConverter 100345, 8 -> 303771", () => {
    expect(baseConverter(100345, 8)).toBe("303771");
  });

  it("baseConverter 100345, 16 -> 187F9", () => {
    expect(baseConverter(100345, 16)).toBe("187F9");
  });

  it("baseConverter 100345, 7 -> 565360", () => {
    expect(baseConverter(100345, 7)).toBe("565360");
  });

  it("baseConverter 100345, 20 -> CAH5", () => {
    expect(baseConverter(100345, 20)).toBe("CAH5");
  });

  it("baseConverter 100345, 35 -> 2BW0", () => {
    expect(baseConverter(100345, 35)).toBe("2BW0");
  });

  it("baseConverter 100345, 36 -> 25FD", () => {
    expect(baseConverter(100345, 36)).toBe("25FD");
  });

  it("baseConverter 100345, 37 -> ", () => {
    expect(baseConverter(100345, 37)).toBe("");
  });
});
