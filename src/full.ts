type IfEquals<X, Y, A, B> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? A : B;

type WritableKeysOf<T> = {
  [P in keyof T]: IfEquals<{ [Q in P]: T[P] }, { [Q in P]: T[P] }, P, never>
}[keyof T];

type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];

/**
 * Defines a type with all fields which original type/class has.
 * Works similar to Partial<T> but with all fields required.
 */
export type Full<T> = Pick<T, NonFunctionPropertyNames<T> & WritableKeysOf<T>>;
