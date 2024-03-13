import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
// Import LaqiraFarmingEligibility page component
import LaqiraFarmingEligibility from './Eligibility-Check/LaqiraFarmingEligibility';

function App() {
  const network = 'https://api.mainnet-beta.solana.com';
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/LaqiraFarmingEligibility" />} />
              {/* Commenting out other routes */}
              {/* <Route path="/HomePage1" element={<HomePage1 />} /> */}
              {/* <Route path="/HomePage2" element={<HomePage2 />} /> */}
              {/* <Route path="/LoginClick" element={<LoginClick />} /> */}
              {/* <Route path="/CreateNFT" element={<CreateNFT />} /> */}
              <Route
                path="/LaqiraFarmingEligibility"
                element={<LaqiraFarmingEligibility />}
              />
            </Routes>
          </BrowserRouter>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
