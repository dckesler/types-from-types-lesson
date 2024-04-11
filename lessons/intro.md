# Types from Types

Sometimes it's a better idea to generate the type you want rather than write it out.
For example

```typescript
type MyType = {
  name: string;
  age: number;
  coolness: number;
  isNeat: boolean;
  foodTest: RegExp;
};

type MyTypeKeys = 'name' | 'age' | 'coolness' | 'isNeat' | 'foodTest';
```

This would be easier to maintain as

```typescript
type MyType = {
  name: string;
  age: number;
  coolness: number;
  isNeat: boolean;
  foodTest: regexp;
};
type MyTypeKeys = keyof MyType;
```

This lesson goes over some of the common ways to generate types from other types.
