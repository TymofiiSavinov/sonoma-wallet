export const DEFAULT_SOLANA_CLUSTER = "https://swr.xnfts.dev/rpc-proxy/";
export const DEFAULT_SONOMO_CLUSTER = "http://3.74.241.65:8899/";
export const SolanaCluster = {
  MAINNET: DEFAULT_SONOMO_CLUSTER,
  DEVNET: "https://api.devnet.solana.com",
  LOCALNET: "http://localhost:8899",

  DEFAULT: process.env.DEFAULT_SONOMO_CONNECTION_URL || DEFAULT_SONOMO_CLUSTER,
};

export const SonomoCluster = {
  TESTNET: DEFAULT_SONOMO_CLUSTER,
  DEFAULT: process.env.DEFAULT_SONOMO_CONNECTION_URL || DEFAULT_SONOMO_CLUSTER,
};