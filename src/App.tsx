import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
/*LOGIN PAGE OLD */
/*import LoginPageV0 from "./Login-page-old/Login-oldV";*/
/************************************************************/
import HomePage1 from "./Laqira-Marketplace/Main-page/Page-1";
import HomePage2 from "./Laqira-Marketplace/Main-page/Page-2-current-task";
import LoginClick from "./Laqira-Marketplace/Login-page/login";
import CreateNFT from "./Laqira-Marketplace/Create-NFT/create-nft";
import LaqiraFarmingEligibility from "./Eligibility-Check/LaqiraFarmingEligibility";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/*LOGIN PAGE OLD */}
          {/*<Route path="/LoginPageV0" element={<LoginPageV0 />}></Route>
          {/************************************************************/}
          <Route path="/" element={<Navigate to="/HomePage1" />} />
          <Route path="/HomePage1" element={<HomePage1 />}></Route>
          <Route path="/HomePage2" element={<HomePage2 />}></Route>
          <Route path="/LoginClick" element={<LoginClick />}></Route>
          <Route path="/CreateNFT" element={<CreateNFT />}></Route>
          <Route
            path="/LaqiraFarmingEligibility"
            element={<LaqiraFarmingEligibility />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
