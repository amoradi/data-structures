interface Collection {
  clear(): void;
  isEmpty(): boolean;
  peek(): any;
  pop(): any;
  push(item: any): void;
  size: number;
  toString(): string;
}

export { Collection };
