export type CoolObject = {
  foo: string;
  bar: number;
  baz: string;
  face?: boolean;
}

//Using the `in` keyword in a type is like `in` for Javascript. It loops
//through whatever iterable you give it using the preceding variable as the
//placeholder.
export type ObjectHasFields = {
  [Placeholder in keyof CoolObject]: boolean;
}

// Here we can add `?` to make each field optional
export type ObjectCouldHaveFields = {
  [Key in keyof CoolObject]?: CoolObject[Key];
}

// Or we could use `-?` to make each field required
export type ObjectMustHaveFields = {
  [Key in keyof CoolObject]-?: CoolObject[Key];
}

// You can also use the `as` keyword to alter the Key placeholder in some way
export type MyState = {
  product: object;
  process: object;
  baz: object;
}

export type SetMyStateAction = {
  [Key in keyof MyState as `set${Capitalize<Key>}`]: (value: MyState[Key]) => void;
};

export type Unknownthing = {
  [key: string]: string;
}
