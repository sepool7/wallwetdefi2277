import "./LaqiraFarmingEligibility.css";
function LaqiraFarmingEligibility() {
  return (
    <div
      className="farmingEligibilityCheck-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "40px 30px",
        }}
      >
        <div
          className="farmingEligibilityCheck-laqira-logo"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            alignItems: "center",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/hastiatarod/imgfilehost/e31cd4e48e1ab73567888f787e07e2a2ef2a8e61/laqiraLogo.svg"
            alt="VECT"
            style={{
              width: "40px",
            }}
          />
          <div>VECT</div>
        </div>
        <div
          className="farmingEligibilityCheck-menu-middleTop"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <button className="farmingEligibilityCheck-menu-middleTop-laqira">
            Vectorium
          </button>
          <button className="farmingEligibilityCheck-menu-middleTop-farming">
            Defi Wallet
          </button>
          <button className="farmingEligibilityCheck-menu-middleTop-contact">
            Contact
          </button>
        </div>
        <button
          className="farmingEligibilityCheck-menu-middleTop-comingSoon"
          style={{ display: "flex", flexDirection: "row-reverse" }}
        >
          Login
        </button>
      </div>

      <div
        className="farmingEligibilityCheck-box"
        style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <div
          className="farmingEligibilityCheck-content-line-1"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div
            className="farmingEligibilityCheck-content-line-1-networks"
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div
              className="farmingEligibilityCheck-content-line-1-networks-text"
              style={{}}
            >
              Supported networks
            </div>
            <div
              className="farmingEligibilityCheck-content-line-1-networks-selection"
              style={{}}
            >
              {" "}
              SOLANA  Network{" "}
              <img
                src="https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_400x400.jpg"
                alt="SOLANA"
                style={{ width: "40px" }}
              />
            </div>
          </div>
          <div className="farmingEligibilityCheck-content-logo" style={{}}>
            {" "}
            <img
              src="https://raw.githubusercontent.com/hastiatarod/imgfilehost/e31cd4e48e1ab73567888f787e07e2a2ef2a8e61/laqiraLogo.svg"
              alt="laqirace"
              style={{ width: "80px" }}
            />
          </div>
        </div>
        <div className="farmingEligibilityCheck-content-line-2-header">
          Vectorium Defi Wallet{" "}
          <span
            style={{
              fontFamily: "cursive",
              fontSize: "27px",
              fontWeight: "400",
            }}
          >
            
          </span>{" "}
          
        </div>
        <form
          action=""
          className="farmingEligibilityCheck-content-line-3-form"
          style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
        >
          <input
            type="text"
            placeholder="Paste wallet address here ..."
            className="farmingEligibilityCheck-content-line-3-form-input"
            style={{ flexGrow: 10 }}
          />
          <button
            className="farmingEligibilityCheck-content-line-3-form-button"
            style={{ flexGrow: 1 }}
          >
            Check VECT Price
          </button>
        </form>
      </div>

      <div
        className="farmingEligibilityCheck-footer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <button className="farmingEligibilityCheck-footer-button-ComingSoon">
          Vectorium Main Page
        </button>
        <button className="farmingEligibilityCheck-footer-button-LaqiracePaper">
          Vectorium White Paper
        </button>
      </div>

      <div
        className="farmingEligibilityCheck-footer-socialAcc"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <button className="farmingEligibilityCheck-footer-socialAcc-telegram">
          <img
            src="https://raw.githubusercontent.com/hastiatarod/imgfilehost/main/Telegram_logo.svg.webp"
            alt="telegram"
            style={{ width: "30px" }}
          />
        </button>
        <button className="farmingEligibilityCheck-footer-socialAcc-X">
          <img
            src="https://github.com/hastiatarod/imgfilehost/blob/main/X_logo_2023_original.svg.png?raw=true"
            alt="X"
            style={{ width: "20px" }}
          />
        </button>
      </div>
    </div>
  );
}
export default LaqiraFarmingEligibility;
