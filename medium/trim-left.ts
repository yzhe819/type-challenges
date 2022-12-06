type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '

type TrimLeft<T extends string> = T extends ` ${infer U}` ? TrimLeft<U> : T;
