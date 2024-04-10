import  { useState } from 'react';
import './Staking.css'; // Ensure this points to your CSS file for the Staking component

function Staking() {
  const [availableBalance, setAvailableBalance] = useState('');
  const [stakedAmount, setStakedAmount] = useState('');
  const [activeBox, setActiveBox] = useState<string | null>(null);
  
  const handleBoxClick = (boxId: string) => {
    setActiveBox(activeBox === boxId ? null : boxId);
  };
  
  // Function to handle changing the available balance
  const handleAvailableBalanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAvailableBalance(event.target.value);
  };
  
  // Function to handle changing the staked amount
  const handleStakedAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStakedAmount(event.target.value);
  };

  // Calculated unstaking amount based on the available balance and staked amount
  const unstakingAmount = () => {
    const available = parseFloat(availableBalance);
    const staked = parseFloat(stakedAmount);
    return isNaN(available) || isNaN(staked) ? 0 : Math.max(available - staked, 0);
  };

  return (
    <div className="staking-container">
      <div className="balance-box-container">
        <div
          className={`balance-box ${activeBox === 'availableBalance' ? 'active' : ''}`}
          onClick={() => handleBoxClick('availableBalance')}
        >
          <label htmlFor="availableBalance">Available Balance</label>
          <input
            type="number"
            id="availableBalance"
            value={availableBalance}
            onChange={handleAvailableBalanceChange}
          />
        </div>
  
        <div
          className={`balance-box ${activeBox === 'stakedAmount' ? 'active' : ''}`}
          onClick={() => handleBoxClick('stakedAmount')}
        >
          <label htmlFor="stakedAmount">Staked Amount</label>
          <input
            type="number"
            id="stakedAmount"
            value={stakedAmount}
            onChange={handleStakedAmountChange}
          />
        </div>
  
        <div
          className={`balance-box ${activeBox === 'unstakingAmount' ? 'active' : ''}`}
          onClick={() => handleBoxClick('unstakingAmount')}
        >
          <label>Unstaking Amount</label>
          <div className="unstaking-amount">{unstakingAmount()} VECT</div>
        </div>
  
        <div
          className={`balance-box ${activeBox === 'claimableRewards' ? 'active' : ''}`}
          onClick={() => handleBoxClick('claimableRewards')}
        >
          <label>Claimable Rewards</label>
          <div className="claimable-rewards">{'< 0.0001 VECT'}</div>
        </div>
      </div>
  
      <div className="validators-container">s
        <h2>Active Validators</h2>
        <div className="validators-list">
          {Array.from({ length: 10 }, (_, i) => (
            <div className="validator-row" key={`validator-${i + 1}`}>
              Validator {i + 1}
            </div>
          ))}
        </div>
        <div className="buttons-container">
  <button className="custom-button stake-button">Stake</button>
</div>
      </div>
    </div>
  );
  
}


export default Staking;
