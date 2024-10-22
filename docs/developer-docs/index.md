---
sidebar_position: 1
---

# Developer Docs

## How to develop for the eSync Network

Ethereum has revolutionized the world of blockchain technology, enabling the creation of decentralized applications (dApps) and smart contracts. eSync Network builds upon the successful pillars of the Ethereum stack. You can use the same tools and frameworks to bring your dApps to the eSync Network.

As a developer looking to dive into eSync Network development, it's crucial to have the right resources at your fingertips.

We've compiled a comprehensive list of the most important developer links for eSync Network (and Ethereum blockchain development in general). These resources will help you navigate the Ethereum ecosystem, gain a deeper understanding of smart contract development, explore various tools and frameworks and ultimately deploy your own smart contracts to the eSync Network.

## Differences between eCredits and Ethereum

From development point of view, since the eSync Network is an Ethereum Virtual Machine (EVM) based chain, development is nearly identical.

## Development Stack

The recommended stack comprises the following components:

- **Solidity** smart contract language and compiler for smart contract development on EVM chains (like Ethereum, eCredits)
- **Hardhat** for compiling, testing, and deploying the smart contracts to the blockchain
- **Hardhat toolbox** a Hardhat plugin that bundles all the commonly used packages and Hardhat plugins the hardhat team recommends to start developing with Hardhat
  https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-toolbox

## Endpoints & Networks

Currently there are two official eSync Networks:

- **Testnet** for testing purposes and the
- **Mainnet** for production

It is recommended to test smart contracts and dApps thoroughly on testnet before running them on mainnet (see also [Smart Contract Security](#smart-contract-security)).

### Testnet

Parameters for the Testnet:

| ChainId | RPC                           | Explorer                            |
| ------- | ----------------------------- | ----------------------------------- |
| 63002   | https://rpc.tst.esync.network | https://explorer.tst.esync.network/ |

hardhat.config:

```json
{
    networks: {
        testnet: {
            url: "https://rpc.tst.esync.network",
            gas: 5000000,
            gasPrice: 10000000000,  // 10 gwei
}
```

#### **Faucet**

The Testnet is prepared with a faucet where you can request funds in order to pay for the gas costs when sending transactions to the eSync Network: https://faucet.tst.ecredits.com/

### Mainnet

Parameters for the Mainnet:

| ChainId | RPC                       | Explorer                        |
| ------- | ------------------------- | ------------------------------- |
| 63000   | https://rpc.esync.network | https://explorer.esync.network/ |

hardhat.config:

```json
{
    networks: {
        mainnet: {
            url: "https://rpc.esync.network",
            gas: 5000000,
            gasPrice: 10000000000,  // 10 gwei
}
```

## Essential Developer Links

### Ethereum Developer Documentation

The official Ethereum Developer Documentation is an excellent starting point for understanding Ethereum's core concepts, including accounts, transactions, gas, and more. It provides a comprehensive overview of the Ethereum Virtual Machine (EVM), smart contracts, and the Solidity programming language. Visit the [Ethereum Developer Documentation](https://ethereum.org/en/developers/docs/).

Recommended resources for starters are:

- [Introduction To The Ethereum Stack](https://ethereum.org/en/developers/docs/ethereum-stack/)
- [Introduction To Smart Contracts](https://ethereum.org/en/developers/docs/smart-contracts/)

### Solidity Documentation

Solidity is the most widely used programming language for writing smart contracts on Ethereum. The Solidity documentation offers a detailed guide on the language's syntax, features, and best practices. It covers everything from basic data types to inheritance and function modifiers. Access the [Solidity documentation](https://docs.soliditylang.org/).

### Smart Contract Security

Smart contracts are extremely flexible, and capable of controlling large amounts of value and data, while running immutable logic based on code deployed on the blockchain.

Hacks and the nature of blockchains (deployed contracts code usually cannot be changed) require developers to invest effort in building secure, robust, and resilient smart contracts. Smart contract security is crucial and should be taken care of throughout the entire developement lifecycle. There are tools, frameworks and patterns that support developers.

More information can be found [here](https://ethereum.org/en/developers/docs/smart-contracts/security/).

### Ethereum Developer Tools

1. Hardhat

   Hardhat is another powerful development environment for Ethereum. It offers a wide range of developer-friendly features, including testing, debugging, and deployment tools. Hardhat supports TypeScript and integrates well with other development frameworks. Learn more about [Hardhat](https://hardhat.org/).

2. Truffle Suite

   Truffle is a popular development framework for Ethereum. It provides a suite of tools for smart contract compilation, testing, and deployment. Truffle also offers built-in support for migrations, enabling smooth upgrades of smart contracts. Explore [Truffle Suite](https://www.trufflesuite.com/).

### Ethereum Developer Communities

1.  Ethereum Stack Exchange

    Stack Exchange is a popular Q&A platform where developers can ask and answer questions related to Ethereum development. The Ethereum Stack Exchange community is highly active and a great place to seek help and share knowledge. Visit [Ethereum Stack Exchange](https://ethereum.stackexchange.com/).

## Quick Start

### Create a Hardhat project

Follow the instructions under https://hardhat.org/hardhat-runner/docs/getting-started

### Configure hardhat networks

Once hardhat is installed and set up edit the file `hardhat.config.ts` and add the testnet and mainnet networks for the deployment.

The file should look similar to this:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { HardhatUserConfig, task } from "hardhat/config";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    testnet: {
      url: "https://rpc.tst.esync.network",
      gas: 5000000,
      gasPrice: 10000000000, // 10 gwei
    },
    mainnet: {
      url: "https://rpc.esync.network",
      gas: 5000000,
      gasPrice: 10000000000, // 10 gwei
    },
  },
};

export default config;
```

### Compile the created example contract

```bash
npx hardhat compile
```

The output should be similar to this:

```
Generating typings for: 1 artifacts in dir: typechain-types for target: ethers-v6
Successfully generated 6 typings!
Compiled 1 Solidity file successfully
```

### Deploy the Smart Contract to the eSync Testnet

With the `--network` you can contrl to which blockchain you deploy.

```bash
npx hardhat --network testnet run .\scripts\deploy.ts
```

Don't forget to have some funds in the wallet that you're going to use for the deployment!

## Summary

The resources mentioned in this document will serve as your go-to references for learning Solidity, leveraging development tools, and interacting with the eSync Network. Whether you're a beginner or an experienced developer, start exploring and building exciting decentralized applications on the eSync Network today!
