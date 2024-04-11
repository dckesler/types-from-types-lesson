type Thing = {
  name: string;
  age: number;
  location: string;
};

type ThingKey = keyof Thing;

function fieldDelete(key: keyof Thing, thing: Thing) {
  const { [key]: _, ...rest } = thing;
  return rest;
}
