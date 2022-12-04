const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

type MyParameters<T> = T extends (...arg: infer P) => any ? P : [];
