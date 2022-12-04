type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

// type Includes<T extends any[], P> = P extends T[number] ? true : false;

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Includes<T extends readonly any[], P> = T extends [infer X, ...infer Rest]
  ? Equal<X, P> extends true
    ? Includes<Rest, P>
    : false
  : false;
