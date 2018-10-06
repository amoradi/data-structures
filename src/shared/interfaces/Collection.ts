interface Collection {
  isEmpty(): boolean;
  toString(): string;
  push(item: any): void;
  pop(): any;
  peek(): any;
}

export { Collection };
