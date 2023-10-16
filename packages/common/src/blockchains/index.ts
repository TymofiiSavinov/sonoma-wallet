import { PublicKey } from "@solana/web3.js";
import { ethers } from "ethers";

import { EthereumConnectionUrl } from "../ethereum/connection-url";
import { EthereumExplorer } from "../ethereum/explorer";
import {SolanaCluster, SonomoCluster} from "../solana/cluster";
import {SolanaExplorer, SonomoExplorer} from "../solana/explorer";
import type { EclipseData, EthereumData, SolanaData } from "../types";
import { Blockchain } from "../types";

export const BLOCKCHAIN_COMMON: Record<
  Blockchain,
  {
    PreferencesDefault: SolanaData | EclipseData | EthereumData;
    validatePublicKey: (address: string) => boolean;
    logoUri: string;
    bip44CoinType: number;
  }
> = {
  [Blockchain.ETHEREUM]: {
    PreferencesDefault: {
      explorer: EthereumExplorer.DEFAULT,
      connectionUrl: EthereumConnectionUrl.DEFAULT,
      chainId: "", // TODO(peter) default chainId?
    },
    validatePublicKey: (address: string) => {
      try {
        ethers.utils.getAddress(address);
      } catch (e) {
        return false;
      }
      return true;
    },
    logoUri:
      "https://s3.us-east-1.amazonaws.com/app-assets.xnfts.dev/images/useBlockchainLogo/ethereum.png",
    bip44CoinType: 60,
  },
  [Blockchain.SONOMO]: {
    PreferencesDefault: {
      explorer: SonomoExplorer.DEFAULT,
      cluster: SonomoCluster.DEFAULT,
      commitment: "confirmed",
    },
    validatePublicKey: (address: string) => {
      try {
        new PublicKey(address);
      } catch (err) {
        return false;
      }
      return true;
    },
    logoUri:
      "/sonomo.png",
    bip44CoinType: 501,
  },
  // Blockchain.SOLANA will be by default
  // explorer: SonomoExplorer.DEFAULT,
  // cluster: SonomoCluster.DEFAULT,
  //  logoUri: "/sonomo.png",
  [Blockchain.SOLANA]: {
    PreferencesDefault: {
      explorer: SonomoExplorer.DEFAULT,
      cluster: SonomoCluster.DEFAULT,
      commitment: "confirmed",
    },
    validatePublicKey: (address: string) => {
      try {
        new PublicKey(address);
      } catch (err) {
        return false;
      }
      return true;
    },
    logoUri:
        "/sonomo.png",
    bip44CoinType: 501,
  },
  [Blockchain.ECLIPSE]: {
    PreferencesDefault: {
      explorer: "https://api.injective.eclipsenetwork.xyz:8899/",
      cluster: SolanaCluster.DEFAULT,
      commitment: "confirmed",
    },
    validatePublicKey: (address: string) => {
      try {
        new PublicKey(address);
      } catch (err) {
        return false;
      }
      return true;
    },
    // todo
    logoUri:
      "https://s3.us-east-1.amazonaws.com/app-assets.xnfts.dev/images/useBlockchainLogo/solana.png",
    bip44CoinType: 501,
  },
};
