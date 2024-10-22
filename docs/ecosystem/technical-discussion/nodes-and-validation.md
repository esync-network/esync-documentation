---
sidebar_position: 3
---

# Nodes and Validation

To make the eSync Network secure, its integrity needs to be ensured by different participants, the so-called “node operators”. These node operators implement the PoS consensus method by verifying transactions and keeping the ledger up to date across the network. This is also important for the governance of the eSync Network.

- **_Stake Size:_** PoS relies on validators, to propose and validate new blocks based on the amount of cryptocurrency they hold, commonly referred to as their stake. The stake size parameter on eSync Network determines the minimum amount of cryptocurrency required for an entity to participate in the consensus process. A higher stake size typically increases the probability of being chosen as a validator, thereby influencing the level of participation and security within the network.

- **_Validator Selection:_** The process of selecting validators in eSync Network is a crucial aspect of the PoS mechanism. Validators are chosen to propose and validate blocks based on their stake size and, in some cases, through a deterministic or randomized selection algorithm. This chapter outlines the specific algorithm used on eSync Network, ensuring fairness, and preventing centralization.

- **_Block Creation:_** Validators in the PoS system play a pivotal role in proposing and validating new blocks. This section elucidates how the block creation process occurs on eSync Network. Validators are responsible for proposing new blocks, and their proposals are then verified by the network. The mechanisms ensuring the integrity of proposed blocks and the subsequent consensus process are discussed in detail.

- **_Block Finality:_** Finality in a PoS-based system signifies the irreversible confirmation of a block, indicating that it is accepted by the network. This chapter explains how eSync Network achieves block finality, ensuring that once a block is confirmed, it cannot be revoked. The robustness of this finality mechanism adds an additional layer of security and certainty to the blockchain.

- **_Consensus Mechanism Security:_** Security is paramount in any blockchain system. This section outlines the security features embedded in eSync Network's PoS implementation. It discusses strategies to mitigate various attack vectors, including the prevention of double-spending, Sybil attacks, and other malicious activities. The aim is to instill confidence in participants regarding the integrity and security of the consensus mechanism.

These parameters collectively define the operational characteristics of the PoS consensus mechanism on eSync Network. Stake size, validator selection, block creation, block finality, and security measures are intricately designed to create a robust and secure decentralized network, fostering trust among participants, and contributing to the overall success of the blockchain.

Whereas the old PoA configuration admitted new validators by voting, PoS promises to cast a wider net, allowing more validators to stake their ECS and join the network, creating more decentralization – and more trust – in the process.

For eSync Network, the required stake per Validator will start at a relatively low 256 ECS. The new consensus will also enable the running of multiple validators on a single machine, with a default support of 128, 256 or 512 validators per machine.

Operating within the PoS framework, validators will earn transaction fees and receive staking rewards as well. Transaction fees will remain unchanged, although the staking rewards will be 1 ECS per block. Validators will therefore receive 1 ECS per block that you validate plus the transaction fees of all transactions within the block. The more validators, the less the chance that your validator will validate the block. Initially forecast annual returns per validator, sans transaction fees, is:

- 21.95% for 50K Validators in the network.

- 9.82% for 250K Validators in the network.

- 4.91% for 1 million validators in the network.
