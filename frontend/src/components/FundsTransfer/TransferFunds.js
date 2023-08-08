import "./TransferFunds.css";
import React, { useState } from 'react';
import { useAccount, useConnect, useEnsName } from 'wagmi';
import { ethers } from 'ethers';
import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction, } from 'wagmi'
import { utils } from 'ethers'

function TransferFunds () {
    const { address, isConnected } = useAccount();
    const { provider } = useConnect();
    
    const [amount, setAmount] = useState('');
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    console.log("amount", amount);

    const [add, setAdd] = useState('');
    const handleAddressChange = (event) => {
        setAdd(event.target.value);
    };
    console.log("add: ", add);

    async function transferETH() {
        sendTransaction();
        
    }
    const val = ethers.utils.parseEther("0.001");
    console.log("val: ", val);
    const { config } = usePrepareSendTransaction({
        to: "0x7199D548f1B30EA083Fe668202fd5E621241CC89",
        value: val._hex,
    })
    const { data, sendTransaction } = useSendTransaction(config);

    return(
        <>
            <h1>Transfer Funds Dapp{provider}</h1>
            <div>
                <label>Enter amount of ether to transfer: </label>
                <input type="text" value={amount} onChange={handleAmountChange} />
            </div>

            <div>
                <label>Enter Address to transfer: </label>
                <input type="text" value={add} onChange={handleAddressChange} />
            </div>

            <button onClick={transferETH}>Transfer</button>
        </> 
    );
}

export default TransferFunds;