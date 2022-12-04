type Result = Concat<[1], [2]>; // expected to be [1, 2]

type Concat<T, P> = [
  ...(T extends any[] ? T : [T]),
  ...(P extends any[] ? P : [P])
];
