export const DEFAULT_SOLANA_CLUSTER = "https://swr.xnfts.dev/rpc-proxy/";
export const DEFAULT_SONOMA_CLUSTER = "http://3.74.241.65:8899/";
export const SolanaCluster = {
  MAINNET: DEFAULT_SOLANA_CLUSTER,
  DEVNET: "https://api.devnet.solana.com",
  LOCALNET: "http://localhost:8899",

  DEFAULT: process.env.DEFAULT_SONOMA_CONNECTION_URL || DEFAULT_SONOMA_CLUSTER,
};

export const SonomaCluster = {
  TESTNET: DEFAULT_SONOMA_CLUSTER,
  DEFAULT: process.env.DEFAULT_SONOMO_CONNECTION_URL || DEFAULT_SONOMA_CLUSTER,
};