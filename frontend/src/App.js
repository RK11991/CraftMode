import './App.css';
import Nav from './components/Nav/Nav';
import TransferFunds from './components/FundsTransfer/TransferFunds';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, goerli, mainnet, polygon, optimismGoerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

//const chains = [arbitrum, mainnet, polygon, goerli, optimismGoerli];
const projectId = process.env.REACT_APP_WALLET_CONNECT_PROJECTID;

/* Custom Chain */
const mode = {
  id: 919,
  name: 'Mode Sepolia',
  network: 'mode',
  iconUrl: '',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://sepolia.mode.network/'] },
    default: { http: ['https://sepolia.mode.network/'] },
  },
  blockExplorers: {
    default: { name: 'mode', url: 'https://sepolia.explorer.mode.network/' },
    etherscan: { name: 'mode', url: 'https://sepolia.explorer.mode.network/' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
  testnet: false,
};

const { provider, chains, publicClient } = configureChains(
  [mode],
  [publicProvider()]
);


const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains)


function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Nav/>
        <TransferFunds/>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}


export default App;
