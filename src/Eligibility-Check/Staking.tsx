<<<<<<< HEAD
import {useState} from 'react';
import * as solanaWeb3 from '@solana/web3.js';
import { Buffer } from 'buffer';
import { DynamicContextProvider, DynamicWidget} from '@dynamic-labs/sdk-react';
import CountUp from 'react-countup';
window.Buffer = Buffer; // Assign it to window to make it globally available


import './Staking.css';
function Staking() {
  
    const [activeBox, setActiveBox] = useState < string | null > (null);
    const [showLogin, setShowLogin] = useState(false); // State to toggle login visibility
    const nodeAddresses: { [key: string]: string } = {
        validator1: '5Bj97DcuNPgKD3bMMbRV24j7AX8xxiUsTevRmrT74QSt',
        validator2: '3zfuCWeoFqhScCkmg7CUb1d3ET1usJB18k1zwPwMosYq',
        validator3: '4XZ6rcwiS6woXiJAbpLKLVpG7TQwFpk8L5hYrQCGPxBq',
        validator4: '3zfuCWeoFqhScCkmg7CUb1d3ET1usJB18k1zwPwMosYq'
      };

    const [isGuidelineModalOpen, setIsGuidelineModalOpen] = useState(false);
    const [openValidators, setOpenValidators] = useState < {
    [key: string]: boolean
    } > ({validator1: false, validator2: false, validator3: false, validator4: false});

    const [earthGreenPercentage, setEarthGreenPercentage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValidator, setSelectedValidator] = useState<keyof typeof nodeAddresses | null>(null);


    const [isStakeModalOpen, setIsStakeModalOpen] = useState(false);
    const [vectoriumToStake, setVectoriumToStake] = useState('');

    const openGuidelineModal = () => {
        setIsGuidelineModalOpen(true);
    };

    const closeGuidelineModal = () => {
        setIsGuidelineModalOpen(false);
    };

    const handleLogin = () => {
        setShowLogin(true);
      };
      // Function to be called when the stake button is clicked
      const handleStake = async () => {
        try {
          if (window.solana && window.solana.isPhantom) {
            // Prompt the user to connect their Phantom wallet
            const walletResponse = await window.solana.connect();
            const publicKey = walletResponse.publicKey;
            
            // Convert the string input to a float number
            const amount = parseFloat(vectoriumToStake);
            
            // Validate the amount and ensure it is not NaN and more than 0
            if (!isNaN(amount) && amount > 0) {
              // Connect to the Solana network
              const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));
              
              // Convert the amount to stake to the smallest unit, lamports
              const lamportsToStake = solanaWeb3.LAMPORTS_PER_SOL * amount;
              
              // Define the destination address
              const destination = new solanaWeb3.PublicKey("5Bj97DcuNPgKD3bMMbRV24j7AX8xxiUsTevRmrT74QSt");
              
              // Create the transaction
              const transaction = new solanaWeb3.Transaction().add(
                solanaWeb3.SystemProgram.transfer({
                  fromPubkey: publicKey,
                  toPubkey: destination,
                  lamports: lamportsToStake,
                })
              );
              
              // Set the fee payer as the wallet owner
              transaction.feePayer = publicKey;
              
              // Fetch the recent blockhash
              const { blockhash } = await connection.getRecentBlockhash();
              transaction.recentBlockhash = blockhash;
              
              // Request the wallet to sign the transaction
              const signedTransaction = await window.solana.signTransaction(transaction);
              
              // Send the signed transaction to the Solana network
              const signature = await connection.sendRawTransaction(signedTransaction.serialize());
              
              // Confirm the transaction
              const confirmation = await connection.confirmTransaction(signature, 'finalized');
              console.log('Transaction confirmation:', confirmation);
              
              // After successful transaction, you may want to clear the form or notify the user
              // ...
            } else {
              alert('Please enter a valid amount of Vectorium to stake.');
            }
          } else {
            alert('Phantom wallet not found. Please install it and try again.');
          }
        } catch (error) {
            if (error instanceof Error) {
              console.error('Staking error:', error);
              alert('There was an error with the staking transaction: ' + error.message);
            } else {
              console.error('Staking error:', error);
              alert('There was an error with the staking transaction.');
            }
          }
      };
      
      const openModal = (validatorName: keyof typeof nodeAddresses) => {
        console.log('Opening modal for:', validatorName);
        setSelectedValidator(validatorName);
        setIsModalOpen(true);
        console.log('Selected Validator Set to:', validatorName);
    };
    const handleEarthGreenPercentageChange = (event : React.ChangeEvent < HTMLInputElement >) => {
        setEarthGreenPercentage(Number(event.target.value));
    };
    const toggleValidator = (validatorId : string) => {
        setOpenValidators(prevState => ({
            ...prevState,
            [validatorId]: !prevState[validatorId], 
        }));
    };
    const handleBoxClick = (boxId : string) => {
        setActiveBox(
            activeBox === boxId
                ? null
                : boxId
        );
    };
   
    return (
        <div className="staking-container">

        
        
        <div className="balance-box-container">
                <div className={`balance-box ${activeBox === 'availableBalance' ? 'active' : ''}`}
                     onClick={() => handleBoxClick('availableBalance')}>
                    <label htmlFor="availableBalance">Vectorium Supply</label>
                    <div id="availableBalance">
                        <CountUp end={700000000} duration={1} separator="," suffix=" VECT" />
                    </div>
                </div>
                <div className={`balance-box ${activeBox === 'stakedAmount' ? 'active' : ''}`}
                     onClick={() => handleBoxClick('stakedAmount')}>
                    <label htmlFor="stakedAmount">Total Staked Vect</label>
                    <div id="stakedAmount">
                        <CountUp end={100000000} duration={1} separator="," suffix=" VECT" />
                    </div>
                </div>
                <div className={`balance-box ${activeBox === 'unstakingAmount' ? 'active' : ''}`}
                     onClick={() => handleBoxClick('unstakingAmount')}>
                    <label>Total donated Vect</label>
                    <div className="unstaking-amount">
                        <CountUp end={100000000} duration={1} separator="," suffix=" VECT" />
                    </div>
                </div>
                <div className={`balance-box ${activeBox === 'claimableRewards' ? 'active' : ''}`}
                     onClick={() => handleBoxClick('claimableRewards')}>
                    <label>APR% Rate</label>
                    <div className="claimable-rewards">
                        <CountUp end={20} duration={1} suffix="%" />
                    </div>
                </div>
            </div>

        <div className="validators-container">
            <h2>Active Validators</h2>
            <div className={
                    `validator ${
                        openValidators['validator1']
                            ? 'active'
                            : ''
                        }`
                }
                key="validator-1">
                <button className="validator-toggle"
                    onClick={
                        () => toggleValidator('validator1')
                }>
                    CleanOcean {
                    openValidators['validator1']
                        ? '▲'
                        : '▼'
                } </button>
                {
                openValidators['validator1'] && (<div className="validator-description">
                    <label>
                        Earth Green Contribution (%):
                        <input type="range" min="4" max="20"
                            value={earthGreenPercentage}
                            onChange={handleEarthGreenPercentageChange}/> {earthGreenPercentage}%
                    </label>
                    <button className="custom-button choose-validator-button"
                        onClick={() => openModal('validator1')}>
                        Choose this Validator
                    </button>
                </div>)
            } </div>
            <div className={
                    `validator ${
                        openValidators['validator2']
                            ? 'active'
                            : ''
                        }`
                }
                key="validator-2">
                <button className="validator-toggle"
                    onClick={
                        () => toggleValidator('validator2')
                }>
                    WasteToGreenEnergy {
                    openValidators['validator2']
                        ? '▲'
                        : '▼'
                } </button>
                {
                openValidators['validator2'] && (<div className="validator-description">
                    <label>
                        Earth Green Contribution (%):
                        <input type="range" min="4" max="20"
                            value={earthGreenPercentage}
                            onChange={handleEarthGreenPercentageChange}/> {earthGreenPercentage}%
                    </label>
                    <button className="custom-button choose-validator-button"
                    onClick={() => openModal('validator2')}>
                    Choose this Validator
                </button>
                </div>)
            } </div>
            <div className={
                    `validator ${
                        openValidators['validator3']
                            ? 'active'
                            : ''
                        }`
                }
                key="validator-3">
                <button className="validator-toggle"
                    onClick={
                        () => toggleValidator('validator3')
                }>
                    ActionForPlanet {
                    openValidators['validator3']
                        ? '▲'
                        : '▼'
                } </button>
                {
                openValidators['validator3'] && (<div className="validator-description">
                    <label>
                        Earth Green Contribution (%):
                        <input type="range" min="4" max="20"
                            value={earthGreenPercentage}
                            onChange={handleEarthGreenPercentageChange}/> {earthGreenPercentage}%
                    </label>
                    <button className="custom-button choose-validator-button"
                    onClick={() => openModal('validator3')}>
                    Choose this Validator
                </button>
                </div>)
            } </div>
            <div className={
                    `validator ${
                        openValidators['validator4']
                            ? 'active'
                            : ''
                        }`
                }
                key="validator-4">
                <button className="validator-toggle"
                    onClick={
                        () => toggleValidator('validator4')
                }>
                    Nature For Justice {
                    openValidators['validator4']
                        ? '▲'
                        : '▼'
                } </button>
                {
                openValidators['validator4'] && (<div className="validator-description">
                    <label>
                        Earth Green Contribution (%):
                        <input type="range" min="4" max="20"
                            value={earthGreenPercentage}
                            onChange={handleEarthGreenPercentageChange}/> {earthGreenPercentage}%
                    </label>
                    <button className="custom-button choose-validator-button"
                        onClick={() => openModal('validator4')}>
                        Choose this Validator
                    </button>
                </div>)
            } </div>
        </div>
        
        {isModalOpen && (
        <div className="modal">
            <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <form>
                    <label>
                    Name of the Validator
                    <input type="text" value={selectedValidator || ''} readOnly />
                </label>
                <label>
                    Vect Node Address
                    <input type="text" value={selectedValidator ? nodeAddresses[selectedValidator] : ''} readOnly />
                    <button onClick={(e) => {
                        e.preventDefault();
                        if (selectedValidator) {
                            navigator.clipboard.writeText(nodeAddresses[selectedValidator]);
                            alert('Address copied to clipboard!');
                        }
                    }}>Copy</button>
                </label>
                <label>
                TXID
                <input type="text" placeholder="Paste transaction hash here" />
                </label>
                <label>
                Earth Green Contribution (%):
                <input 
                    type="number" 
                    value={earthGreenPercentage}
                    onChange={(e) => setEarthGreenPercentage(Number(e.target.value))}
                    min="1"
                    max="100"
                />
                </label>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
        )}


        
        {isStakeModalOpen && (
        <div className="modal">
            <div className="modal-content">
            <span className="close" onClick={() => setIsStakeModalOpen(false)}>&times;</span>
            <form>
                <label>
                Stake Button
                {/* You will replace this label with an actual button or input field as needed */}
                </label>
                <label>
                Earth Green Contribution (%):
                <input type="text" value={earthGreenPercentage + '%'} readOnly />
                </label>
                <label>
                Number of Vectorium to Stake
                <input
                    type="number"
                    placeholder="Enter the number of Vectorium"
                    value={vectoriumToStake}
                    onChange={(e) => setVectoriumToStake(e.target.value)}
                />
                </label>
                <button type="button" onClick={handleStake}>Stake Vectorium</button>
            </form>
            </div>
        </div>
        )}
        {isGuidelineModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeGuidelineModal}>&times;</span>
                        <div className="guidelines-content">
                            <h2>Staking Guidelines</h2>
                            <ol className="staking-guidelines">
                                <li>Press 'LOGIN' and Login with your Phantom wallet and email.</li>
                                <li>Choose your node to participate in green planet action.</li>
                                <li>Send the amount of VECT you want to stake to node addresses.</li>
                                <li>Submit your transaction.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        
        <div className="buttons-container">
        <button className="custom-button guideline-button" onClick={openGuidelineModal}>GUIDELINE</button>
        <button className="custom-button stake-button" onClick={handleLogin}>Login</button>
        </div>
        {showLogin && (
        <DynamicContextProvider
        settings={{
          environmentId: '1d5b1b45-0d5e-46d0-b1d6-de7cdb8282b5'
       }}>
       <DynamicWidget /> 
     </DynamicContextProvider>
      )}

    </div>
    
);
}
export default Staking;


=======
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
>>>>>>> 83cd3b4fe9aab513b4b3a34ab59043895125d91b
