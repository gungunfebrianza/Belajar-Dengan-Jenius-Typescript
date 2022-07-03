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

// Simplified Version
/* type TypeAlias = number[];
type ComplexObj = {
  a: string[];
  b: (param: string[]) => string[];
  c: { d: boolean; e: TypeAlias };
};

let objComplex: ComplexObj = {
  a: ["Hi", "Maudy"],
  b: function (param: string[]): string[] {
    return this.a;
  },
  c: { d: true, e: [22, 33] },
};

console.log(objComplex); */
