import { Stack } from "../index";

function decimalToBinary(decNumber: number) {
  const remaindersStack = new Stack();
  let remainder: number;
  let binaryString = "";

  while (decNumber > 0) {
    remainder = Math.floor(decNumber % 2);
    remaindersStack.push(remainder);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remaindersStack.isEmpty()) {
    binaryString += remaindersStack.pop().toString();
  }

  return binaryString;
}

export { decimalToBinary };
