---
sidebar_position: 7
---

# Security Overview

eSync Network is a Layer-1 EVM (Ethereum Virtual Machine)-compatible blockchain platform designed to facilitate the development and execution of decentralized applications (DApps) and smart contracts. This document explores the key security features that make eSync Network a robust and secure blockchain platform.

## Immutable and Transparent Transactions

Like Ethereum and other EVM-compatible blockchains, eSync Network provides immutable and transparent transaction records. Once a transaction is validated and recorded on a block, it can't be altered or removed. This immutability ensures a high degree of transparency and accountability, as anyone can audit the transactions and verify their accuracy.

All transactions can be queried by running a node or by using the public block explorer which is available at https://explorer.esync.network.

[Scorechain](https://www.scorechain.com/) is a compliance solution for crypto asset regulation and is used by several exchanges and other organizations that integrated eSync Network to comply with crypto regulation or anti-money laundering rules.

## Decentralized Consensus Mechanism

eSync Network employs a decentralized consensus mechanism, which distributes control across multiple network participants rather than a single central authority. This architecture prevents any single entity from controlling the network, thereby enhancing its security. The specific consensus mechanism used by eCredits may vary, but it's typically designed to be resilient against common attack vectors.

## Smart Contract Security

Smart contracts on eCredits, written in high-level languages like Solidity, can handle valuable digital assets and are immutable once deployed. As such, they are potential targets for malicious actors. However, eCredits employs several strategies to ensure their security:

- **Smart Contract Audits**: Before deployment, smart contracts can undergo rigorous audits conducted by specialized firms. These audits scrutinize the contract's codebase, architecture, and design patterns to identify and mitigate potential vulnerabilities.

- **Formal Verification**: This involves mathematically proving the correctness of a smart contract with respect to a specified set of properties. Formal verification can catch subtle, hard-to-find errors, providing an extra layer of assurance.

- **Standardized, Open-Source Smart Contracts**: Developers are encouraged to use well-vetted, open-source smart contract libraries, such as OpenZeppelin. These libraries have been extensively audited and tested, reducing the likelihood of introducing new vulnerabilities when creating contracts.

There are several tools available to do a security analysis of your smart contracts. You can find these in the [Smart Contract Analysis Tools](/docs/developer-docs/smart-contract-analysis-tools.md) section.

## Gas Fees

To protect against spam and potential Denial of Service (DoS) attacks, eSync Network imposes gas fees in ECS for each operation performed on the blockchain. By associating a cost with every operation, eSync Network discourages malicious actors from overwhelming the network with transactions.

## On-Chain Governance and Upgradability

eSync Network incorporates on-chain governance and smart contract upgradability, enabling the network to adapt over time. These features allow the community to propose, vote on, and implement changes to the protocol, effectively addressing new threats and vulnerabilities as they arise.

## Cryptographic Security

eSync Network, like other EVM-compatible chains, uses cryptographic algorithms to secure data. Transactions are digitally signed using a private key, and only the corresponding public key can confirm the signature's authenticity. This level of cryptography ensures the identity of transaction parties and the integrity of the data being transacted.
