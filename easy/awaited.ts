type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string

// recursively handle promise
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P>
  ? P extends Promise<unknown>
    ? MyAwaited<P>
    : P
  : never;
