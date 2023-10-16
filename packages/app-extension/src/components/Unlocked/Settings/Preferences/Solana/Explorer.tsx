import { useEffect } from "react";
import {
  Blockchain,
  SolanaExplorer, SonomaExplorer,
  UI_RPC_METHOD_EXPLORER_UPDATE,
} from "@coral-xyz/common";
import { useBackgroundClient, useSolanaExplorer } from "@coral-xyz/recoil";

import { useNavigation } from "../../../../common/Layout/NavStack";
import { SettingsList } from "../../../../common/Settings/List";

import { Checkmark } from "./ConnectionSwitch";

export function PreferencesSolanaExplorer() {
  const background = useBackgroundClient();
  const explorer = useSolanaExplorer();
  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({ headerTitle: "Explorer" });
  }, [nav]);

  const menuItems = {
    "Sonoma Explorer": {
      onClick: () => changeExplorer(SonomaExplorer.DEFAULT),
      detail:
        explorer === SonomaExplorer.DEFAULT ? <Checkmark /> : <div />,
    },
  };

  const changeExplorer = (explorer: string) => {
    try {
      background
        .request({
          method: UI_RPC_METHOD_EXPLORER_UPDATE,
          params: [explorer, Blockchain.SOLANA],
        })
        .catch(console.error);
    } catch (err) {
      console.error(err);
    }
  };

  return <SettingsList menuItems={menuItems} />;
}
