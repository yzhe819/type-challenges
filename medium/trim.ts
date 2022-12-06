type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'

type Trim<T> = T extends ` ${infer R}` | `${infer R} ` ? Trim<R> : T;
