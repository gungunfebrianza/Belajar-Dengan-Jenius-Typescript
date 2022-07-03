interface blockchain {
  [key: number]: number;
  [key: string]: any;
  name: string;
}

const Opolygon: blockchain = {
  10: 99,
  type: {
    testNet: "Mumbai",
    layer: "Layer2",
  },
  name: "Polygon PoS",
};
