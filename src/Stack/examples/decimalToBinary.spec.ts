import { decimalToBinary } from "./decimalToBinary";

describe("Decimal To Binary Converter", () => {
  it("decimalToBinary 1 -> 1", () => {
    expect(decimalToBinary(1)).toBe("1");
  });

  it("decimalToBinary 2 -> 11", () => {
    expect(decimalToBinary(2)).toBe("10");
  });

  it("decimalToBinary 233 -> 11101001", () => {
    expect(decimalToBinary(233)).toBe("11101001");
  });

  it("decimalToBinary 10 -> 1010", () => {
    expect(decimalToBinary(10)).toBe("1010");
  });

  it("decimalToBinary 1000 -> 1111101000", () => {
    expect(decimalToBinary(1000)).toBe("1111101000");
  });
});
