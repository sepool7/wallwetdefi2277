import "./LaqiraFarmingEligibility.css";
import { useState } from 'react';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import


// import { useWallet } from '@solana/wallet-adapter-react';


function LaqiraFarmingEligibility() {
  const [, setVectPrice] = useState<number | null>(null);
  const [vectAmount, setVectAmount] = useState<string>('');
  const [totalValue, setTotalValue] = useState<string | null>(null);
  const [vectCurrentPrice, setVectCurrentPrice] = useState(null);
  const fetchVectPrice = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=Vectorium&vs_currencies=usd');
      const data = await response.json();
      setVectCurrentPrice(data.vectorium.usd);
    } catch (error) {
      console.error('Error fetching Vect price:', error);
    }
  };
  useEffect(() => {
    fetchVectPrice();
    const interval = setInterval(fetchVectPrice, 30000); // 30-second interval

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  async function connectPhantomWallet() {
    try {
      if ('solana' in window) {
        const { solana } = window;
        if (solana.isPhantom) {
          const response = await solana.connect();
          console.log('Connected with Public Key:', response.publicKey.toString());
        } else {
          console.error('Phantom wallet not found!');
        }
      } else {
        console.error('Solana object not found! Make sure you have Phantom wallet installed.');
      }
    } catch (error) {
      console.error('Failed to connect to Phantom wallet:', error);
    }
  }

  async function checkVECTPrice() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=Vectorium&vs_currencies=usd');
      const data = await response.json();
      const price = data.vectorium.usd;
      setVectPrice(price);

      // Convert vectAmount to a number for the calculation
      const numericVectAmount = parseFloat(vectAmount);
      if (!isNaN(numericVectAmount) && price) {
        const value = (numericVectAmount * price).toFixed(2);
        setTotalValue(value);
      }
    } catch (error) {
      console.error('Failed to fetch VECT price:', error);
    }
  }
  


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
          <button
            className="farmingEligibilityCheck-menu-middleTop-laqira"
            onClick={() => window.open('https://vectorium.co/', '_blank')}
          >
            Vectorium
          </button>
          <button
          className="farmingEligibilityCheck-menu-middleTop-farming"
          onClick={() => window.open('https://solscan.io/token/VePPxQ3cmkVK44xrQVCH4oGTnRgQRWAoAFVdMnK4kX2', '_blank')}
        >
          Vectorium Explorer
        </button>
        <button
          className="farmingEligibilityCheck-menu-middleTop-contact"
          onClick={() => window.open('https://www.coingecko.com/en/coins/vectorium', '_blank')}
        >
          Vectorium Chart
        </button>
        </div>
        <button
      onClick={connectPhantomWallet}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        borderRadius: "20px",
        background: "rebeccapurple",
        color: "white",
        border: "none",
        cursor: "pointer",
        outline: "none",
        fontSize: "16px",
      }}
    >
      Connect to Phantom
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
        VECT Price{" "}
          <div>{vectCurrentPrice ? `$${vectCurrentPrice}` : 'Loading...'}</div>
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
        // Prevent form from submitting and refreshing the page
        onSubmit={(e) => e.preventDefault()}
        className="farmingEligibilityCheck-content-line-3-form"
        style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
      >
        <input
          type="text"
          placeholder="Add the Vect Amount you have and press the check Vect price"
          className="farmingEligibilityCheck-content-line-3-form-input"
          style={{ flexGrow: 10 }}
          onChange={(e) => setVectAmount(e.target.value)} // Update vectAmount as the user types
          value={vectAmount}
        />
        <button
          type="button" // Ensure this button doesn't submit the form
          className="farmingEligibilityCheck-content-line-3-form-button"
          onClick={checkVECTPrice}
          style={{ flexGrow: 1 }}
        >
          Check VECT Price
        </button>
      </form>
        {/* Display the total value if available */}
      {totalValue !== null && (
        <div className="farmingEligibilityCheck-price-display">
          <p>Total Value of Your VECT: {totalValue}$</p>
        </div>
      )}
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
        <button 
        className="farmingEligibilityCheck-footer-button-ComingSoon"
        onClick={() => navigate('/staking')} // Update this line to navigate to the staking route
        >
          Staking Platform
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
        <button className="farmingEligibilityCheck-footer-socialAcc-telegram" onClick={() => window.open('https://t.me/VectoriumProject', '_blank', 'noopener,noreferrer')}>
        <img
          src="https://raw.githubusercontent.com/hastiatarod/imgfilehost/main/Telegram_logo.svg.webp"
          alt="Telegram"
          style={{ width: "30px" }}
        />
      </button>
        <button className="farmingEligibilityCheck-footer-socialAcc-X" onClick={() => window.open('https://x.com/vectorium_co?s=11&t=Xo8sagyjh3sWysvWevAHgg', '_blank', 'noopener,noreferrer')}>
          <img
            src="https://github.com/hastiatarod/imgfilehost/blob/main/X_logo_2023_original.svg.png?raw=true"
            alt="Twitter"
            style={{ width: "20px" }}
          />
        </button>

      </div>
    </div>
  );
}
export default LaqiraFarmingEligibility;
