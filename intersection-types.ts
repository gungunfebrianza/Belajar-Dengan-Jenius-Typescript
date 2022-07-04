interface Bitcoin {
  lightningNetwork: string;
}
interface LiquidBitcoin {
  confidential: string;
}

type superblockchain = Bitcoin & LiquidBitcoin;

const powerfulBlockchain: superblockchain = {
  lightningNetwork: "Yes",
  confidential: "Support Confidential Transaction!",
};

console.log(powerfulBlockchain);
