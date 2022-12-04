import { Expect, Equal } from "@type-challenges/utils";

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type arr3 = [];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<arr3>; // expected to be never

type First<T> = T extends [infer P, ...infer Rest] ? P : never;

type test1 = Expect<Equal<head1, "a">>;
type test2 = Expect<Equal<head2, 3>>;
type test3 = Expect<Equal<head3, never>>;
