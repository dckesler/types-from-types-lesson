export type Thing = {
  name: string;
  age: number;
  location: string;
};

export type ThingName = Thing['name'];

export type ThingNameAge = Thing['name' | 'age'];
