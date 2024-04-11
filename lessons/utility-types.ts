export type Foo = {
  bar: string;
  baz: number;
};

// Partial
export type PartialFoo = Partial<Foo>;

// Required
export type RequiredFoo = Required<PartialFoo>;

// Pick
export type JustBaz = Pick<Foo, 'baz'>;

// Omit
export type NotBaz = Omit<Foo, 'baz'>;

// Readonly
export type ReadOnlyFoo = Readonly<Foo>;
export const foo: ReadOnlyFoo = {
  bar: 'Hello, world!',
  baz: 42
};

foo.bar = 'Hi, there!';


export function stringer(a: number, b: string) {
  let arr: string[] = [];
  for (let i = 0; i < a; i++) {
    arr.push(b);
  }
  return arr;
}

// Parameters
export type StringerParams = Parameters<typeof stringer>;

// ReturnType
export type StringerReturn = ReturnType<typeof stringer>;
