const blockchain: {
  name: string;
  creator: string;
  totalCoin: number;
} = {
  name: "Bitcoin",
  creator: "Satoshi Nakamoto",
  totalCoin: 21000000,
};

type TBlockchain = {
  name: string;
  creator: string;
  totalCoin: number;
};

const Type_bitcoin: TBlockchain = {
  name: "Bitcoin",
  creator: "Satoshi Nakamoto",
  totalCoin: 21000000,
};

interface IBlockchain {
  name: string;
  creator: string;
  totalCoin: number;
}

const Interface_bitcoin: IBlockchain = {
  name: "Bitcoin",
  creator: "Satoshi Nakamoto",
  totalCoin: 21000000,
};

console.log(typeof Interface_bitcoin);
console.log(Interface_bitcoin);
console.log("1");

console.log(typeof Type_bitcoin);
console.log(Type_bitcoin);
console.log("2");
console.log(typeof blockchain);
console.log(blockchain);
console.log("3");
console.log(Interface_bitcoin == Type_bitcoin);
console.log(Interface_bitcoin === Type_bitcoin);
console.log(blockchain == Interface_bitcoin);
console.log(blockchain === Interface_bitcoin);
console.log(Type_bitcoin == blockchain);
console.log(Type_bitcoin === blockchain);
