import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";

import { SolanaWalletConnectors } from "@dynamic-labs/solana";


export default function App() {
  return (
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: "1d5b1b45-0d5e-46d0-b1d6-de7cdb8282b5",
        walletConnectors: [SolanaWalletConnectors],
      }}
    >
      <DynamicWidget />
    </DynamicContextProvider>
  );
};