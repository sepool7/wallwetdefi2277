/*import "./Login-oldV.css";

import { MouseEvent } from "react";
function LoginPageV0() {
  const itemsSocialAccounts = ["Twitter", "Discord", "Email"];
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <div className="layout-container">
      <h1 className="header">Log in to Laqirace</h1>
      <p>
        By logging in to laqirace, you agree to
        <a className="link-style" href="https://example.com" target="_blank">
          {" Terms of Service "}
        </a>
        and
        <a className="link-style" href="https://example.com" target="_blank">
          {" Privacy Policy"}
        </a>
        .
      </p>
      <>
        <h2 className="header2">Log in with social account</h2>
        <ul
          className="Social-Account"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {itemsSocialAccounts.map((itemSocial) => (
            <li
              className="list-social-item"
              key={itemSocial}
              onClick={handleClick}
            >
              <button className="list-social-button">{itemSocial}</button>
            </li>
          ))}
        </ul>
      </>
      <h3 className="header3">Log in with wallet</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          onClick={handleClick}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <button className="metamask">{"MetaMask"}</button>
        </div>
        <div
          onClick={handleClick}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <button className="connect">{"WalletConnect"}</button>
          <button className="coinbase">Coinbase Wallet</button>
        </div>
        <div
          onClick={handleClick}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <button className="trust">Trust Wallet</button>
          <button className="bitget">Bitget Wallet</button>
          <button className="imtoken">imToken</button>
          <button className="particle">Particle</button>
        </div>
      </div>
      <div className="footer">
        <div className="line-container">
          <hr style={{ color: "white" }} />
        </div>
        <div className="text"> Show More ↓ </div>
        <div className="line-container">
          <hr style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
}

export default LoginPageV0;
*/
