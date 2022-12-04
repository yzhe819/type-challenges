import { Expect, Equal } from "@type-challenges/utils";

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

type MyExclude<T, U> = T extends U ? never : T;

type test1 = Expect<Equal<Result, "b" | "c">>;
