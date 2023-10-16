import { useEffect } from "react";
import {
  Blockchain,
  SolanaCluster, SonomaCluster,
  UI_RPC_METHOD_CONNECTION_URL_UPDATE,
} from "@coral-xyz/common";
import { PushDetail } from "@coral-xyz/react-common";
import { useBackgroundClient, useSolanaConnectionUrl } from "@coral-xyz/recoil";
import { useCustomTheme } from "@coral-xyz/themes";
import { Check } from "@mui/icons-material";

import { useNavigation } from "../../../../common/Layout/NavStack";
import { SettingsList } from "../../../../common/Settings/List";

export function PreferencesSolanaConnection() {
  const background = useBackgroundClient();
  const currentUrl = useSolanaConnectionUrl();
  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({ headerTitle: "RPC Connection" });
  }, [nav]);

  const menuItems = {
    "Testnet (Beta)": {
      onClick: () => changeNetwork(SonomaCluster.TESTNET),
      detail: currentUrl === SonomaCluster.TESTNET ? <Checkmark /> : null,
    }
  };

  const changeNetwork = (url: string) => {
    try {
      background
        .request({
          method: UI_RPC_METHOD_CONNECTION_URL_UPDATE,
          params: [url, Blockchain.SOLANA],
        })
        .catch(console.error);
    } catch (err) {
      console.error(err);
    }
  };

  return <SettingsList menuItems={menuItems} />;
}

export function Checkmark() {
  const theme = useCustomTheme();
  return (
    <Check
      style={{
        color: theme.custom.colors.brandColor,
      }}
    />
  );
}
