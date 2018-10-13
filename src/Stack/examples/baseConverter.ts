import { Stack } from "../index";

function baseConverter(decNumber: number, base: number) {
  const remaindersStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let remainder: number;
  let baseString = "";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (decNumber > 0) {
    remainder = Math.floor(decNumber % base);
    remaindersStack.push(remainder);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remaindersStack.isEmpty()) {
    baseString += digits[remaindersStack.pop()];
  }

  return baseString;
}

export { baseConverter };
