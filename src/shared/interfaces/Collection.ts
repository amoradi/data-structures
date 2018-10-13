interface Collection<T> {
  clear(): void;
  isEmpty(): boolean;
  peek(): T;
  pop(): T;
  push(item: T): void;
  size: number;
  toString(): string;
}

export { Collection };
