const str = 'Hello, world!';

type Str = typeof str;

function typer(foo: number) {
  return foo.toString();
}

type Typer = typeof typer;
