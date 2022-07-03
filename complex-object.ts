type TypeAlias = number[];

let objComplex: {
  a: string[];
  b: (param: string[]) => string[];
  c: { d: boolean; e: TypeAlias };
} = {
  a: ["Hi", "Maudy"],
  b: function (param: string[]): string[] {
    return this.a;
  },
  c: { d: true, e: [22, 33] },
};

console.log(objComplex);
