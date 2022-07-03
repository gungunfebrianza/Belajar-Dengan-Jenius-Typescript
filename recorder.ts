interface coin extends creator {
  name: string;
  supply: number;
}

interface creator {
  created: string;
  author: "Satoshi Nakamoto";
}

const bitcoin: coin = {
  name: "bitcoin",
  supply: 21000000,
  created: "2009",
  author: "Satoshi Nakamoto",
};

console.log(bitcoin);
