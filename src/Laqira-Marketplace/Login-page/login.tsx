import "./Login.css";

import { MouseEvent } from "react";

function loginClick() {
  const itemsSocialAccounts = ["(Twitter)", "Discord", "Email"];
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <div className="main" style={{ display: "flex" }}>
      <div
        className="layout-container"
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <div
          className="box-1"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div className="box-1-login">Login</div>
          <div
            className="box-1-register"
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <small>No Account?</small>
            <br />
            <button className="box-1-register-no-account">Registrati</button>
          </div>
        </div>

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
                style={{ display: "flex", flexWrap: "wrap", flexGrow: 1 }}
              >
                <button className="list-social-button">
                  {itemSocial === "(Twitter)" && (
                    <img
                      src="https://raw.githubusercontent.com/hastiatarod/imgfilehost/8c1a3b8fb694d70e3057cd52cb922e8e0d6a5e58/X_logo_2023_original.svg.png"
                      alt="X Logo"
                      style={{ width: "40px", margin: "0 15px" }}
                    />
                  )}
                  {itemSocial === "Discord" && (
                    <img
                      src="https://raw.githubusercontent.com/hastiatarod/imgfilehost/fd6b162ce82d04e83467371c297abf461291c06b/discord-icon-svgrepo-com.svg"
                      alt="Discord Logo"
                      style={{ width: "40px", margin: "0 15px" }}
                    />
                  )}
                  {itemSocial === "Email" && (
                    <img
                      src="https://raw.githubusercontent.com/hastiatarod/imgfilehost/cf9a50c5a654ce72564da31908556ff88c46480a/email-svgrepo-com.svg"
                      style={{ width: "40px", margin: "0 15px" }}
                    />
                  )}

                  {itemSocial}
                </button>
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
            <button className="metamask">
              <img
                src="https://github.com/hastiatarod/imgfilehost/blob/main/MetaMask_Fox.svg.png?raw=true"
                style={{ width: "40px", margin: "0 15px" }}
              />

              {"MetaMask"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default loginClick;
