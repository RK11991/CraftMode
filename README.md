## Foundry

### Build

```shell
$ forge build
```

### Deploy

```shell
$ forge create --rpc-url https://sepolia.mode.network/ --private-key <your_private_key> src/SuperMeme.sol:SuperMeme 
```

Deployer: 0x5fF6e13269f2730EB203860B4Af06A57E2574156
Deployed to: 0xC84766ad9C7b2A11837207F556bEF75765eead4F
Transaction hash: 0x959ef825c1d7fcbdf4f7b6bfe841d07fea0b01f9543ca785e807e91b1f05c8ce

forge verify-contract 0xC84766ad9C7b2A11837207F556bEF75765eead4F src/SuperMeme.sol:SuperMeme --verifier blockscout --verifier-url https://sepolia.explorer.mode.network/api/ --chain-id 919


forge verify-contract 0xC84766ad9C7b2A11837207F556bEF75765eead4F src/SuperMeme.sol:SuperMeme --chain-id 919 --verifier-url https://sepolia.explorer.mode.network/api --verifier blockscout --show-standard-json-input

