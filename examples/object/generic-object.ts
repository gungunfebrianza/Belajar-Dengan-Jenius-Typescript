interface CryptoCoin<Type> {
  CoinType: Type;
  EVMBased?: Type;
  shitcoin?: Type;
}

let whatCoin: CryptoCoin<string> = {
  CoinType: "ERC-20 Token",
};

console.log(whatCoin.CoinType);

type boolOrNumber = boolean | number;

let anyCoin: CryptoCoin<boolOrNumber | string> = {
  CoinType: 1,
  EVMBased: true,
  shitcoin: "No",
};

console.log(anyCoin);
