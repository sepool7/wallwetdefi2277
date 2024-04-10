import { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

// Import your page components
import LaqiraFarmingEligibility from './Eligibility-Check/LaqiraFarmingEligibility';
import Staking from './Eligibility-Check/Staking'; // Make sure this path is correct

function App() {
  const network = 'https://api.mainnet-beta.solana.com';
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <BrowserRouter>
            <Routes>
              {/* Redirect from root to the LaqiraFarmingEligibility page */}
              <Route path="/" element={<Navigate to="/LaqiraFarmingEligibility" />} />

              {/* Route for the LaqiraFarmingEligibility page */}
              <Route path="/LaqiraFarmingEligibility" element={<LaqiraFarmingEligibility />} />

              {/* Add Route for the Staking page */}
              <Route path="/staking" element={<Staking />} />

              {/* Commenting out other routes */}
              {/* <Route path="/HomePage1" element={<HomePage1 />} />
              <Route path="/HomePage2" element={<HomePage2 />} />
              <Route path="/LoginClick" element={<LoginClick />} />
              <Route path="/CreateNFT" element={<CreateNFT />} /> */}
            </Routes>
          </BrowserRouter>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
