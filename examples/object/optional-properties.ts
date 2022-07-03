interface person {
  fullname: "Gun Gun Febrianza";
  twitter: string;
  listCoin: string[];
  bitcoiners?: boolean;
}

const man: person = {
  fullname: "Gun Gun Febrianza",
  twitter: "@daddybitcoin",
  listCoin: ["Bitcoin", "Liquid Bitcoin"],
};

const libertarian: person = {
  fullname: "Gun Gun Febrianza",
  twitter: "@daddybitcoin",
  listCoin: ["Bitcoin", "Liquid Bitcoin"],
  bitcoiners: true,
};

console.log(man);
