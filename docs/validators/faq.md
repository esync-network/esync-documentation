# FAQ

## To which wallet will my rewards go?

Your rewards will go to the accounts that you've set as etherbase account and suggested fee recipient account in your ```validator.docker-compose.yaml```.

:::info

For ease of use, we suggest you use your eCredits wallet address or a sub-account of it as etherbase account.

:::

## What are the validator keys?
The validator keys are the key's that are used to sign the blocks.

## Where can I get help when I have issues?
If you have issues, please connect with our community on the [telegram channel](https://t.me/+X7JjJOB25AMzOGFk). They are happy to help.

## Where can I get the control script for my node?
The control script is available [here](https://dl.ecredits.com/scripts/ecredits.sh).

## Do you know an easy and secure way for remote control of my validator?

The preferred way is to use ssh (secure shell). If you are not familiar with ssh, just search for "ssh introduction" or "ssh basics" in your preferred search engine.

## What does validating a transaction depend on? Is random or determined by a system?
eSync Network uses Proof-of-Stake (PoS) as consensus algorithm. This consensus algorithm also determines who the next validator is. In a perfect scenario, where all validators are online, every validator will validate the same number of blocks. So, if there are 100.000 blocks validated and 1.000 validators, every validator should have mined 100 blocks (if everything works perfectly).

## How high is the block reward?

The block reward is the sum of all transaction fees that were paid for the transactions in the block.

## Am I allowed to run multiple validators?

Yes, you only need to generate another key and stake the required 256 ECS to the deposit contract.

## What does the block explorer show?

This page https://explorer.esync.network/address/0x050c4bea6019E59dB716d3455d4d271B39E95197/validations contains information about an address on the blockchain. In this example, this is the address of a validator (there are blocks in the "Blocks validated" tab). As this is a standard address on the blockchain, you can send ECS to and from this address. The tab "blocks validated" contains all blocks that have been validated by this address, therefore:

- Balance: The number of ECS on this address (currently 0.00042 ECS)
- Tokens: If you send a token to this address, you will see it there (there are currently no tokens on the chain, only the ACT, which is not transferable)
- Transactions: All transactions from and to this address
- Transfers: Of tokens from and to this address
- Gas Used: The total transaction fees this address has paid
- Last Balance Update: The last block that changed the balance of this address (in case of a Validator Node address, the last mined block)

## Why are there transactions with less than a 0.1% fee?

The eWallet App and most of the eSync Netowrk systems use a fee of 0.1% per transaction. This 0.1% is currently not a "hard limit", meaning that someone could use a different fee. There are different reasons why this is possible. The system does currently not force the 0.1%, but those transactions will be preferred and are better integrated into the system (e.g. ACT rewards etc.). 

## The "Coin Balance History" of the Block Explorer shows a negative balance change (-xx ECS) for my validator. How is that possible?

This is a very unlikely case, but it can happen because of a "reorg" of the blockchain. The Block Explorer shows a list of forked blocks (reorgs). This list contains the block;
https://explorer.esync.network/block/0x1e456896528757b777c0b5498853b61fc5de6db9dd49d762c8175b466ee05cb7/transactions
which was created by two validators at the same time, but only this one survived:
https://explorer.esync.network/block/6905166/transactions

This block contains a transaction of 1500 ECS * 0.1% fee = ~1.5 ECS. The validation of the block resulted in a +1.49999 ... for the account. The reorg cleaned it up, and therefore the same amount was removed.

Such scenarios are known as "double-spend attack", which exist for most of the blockchains, and which is also the reasons why it is suggested to wait for one, three, or six confirmations, based on the size of the transaction. If you wait for six confirmations (six blocks), you can be 99.99% certain that a transaction is truly "valid" and complete (also called "time to finality").

If there is a reorg, the blockchain basically splits in half. So at the same time, there are two valid forks of the blockchain, but only one will survive. If the validator wants to send these ECS somewhere, then it happens within this fork. If this fork "survives", the transaction is valid. If the fork does not "survive", also the transaction will be invalid, as if it never happened.

As an example, the following scenario can happen:  
Blockchain forks in two:  

- Fork A: Validator X has 100 ECS
- Fork B: Validator X has 150 ECS

Let's assume Validator X sends 150 ECS somewhere. If this happens on Fork A, the transaction will fail (invalid balance). If it happens on Fork B, the transaction is fine and is added to the blockchain. However, after one to two blocks, one of the forks will survive which means that all validators will follow this fork of the blockchain. If this "accepted fork" is Fork A, then the transaction initiated by Validator X simply does not exist on the chain, as if it never happened (X will still have 100 ECS). If the "accepted fork" is Fork B, the transaction is valid the 150 ECS are transferred.

Forks are usually resolved after one to two additional blocks. So, if a transaction is added to block one and confirmed by blocks two and three, the time passed in total is up to 15 seconds. (Block time is 5 seconds, thus 3x5s = 15s).

## How do I know if my node is already updated to the current version? Is there a command to run to see the current version?

Yes, you can check the version of the container by executing `docker ps`. If you want to change the version, edit the validator.docker-compose.yaml file.

## Is it possible to run the validator on a Windows machine?

Yes. Docker also runs on Windows machines, therefore the eSync Network Validator Node can also run on Windows. Windows users sometimes report issues with the DNS resolving within Docker. In that case, you can fix it by adding the following line to the docker-compose file:

```yaml
    dns:
      - 1.1.1.1
```

Please also check if your local time is correct (NTP) and that the port 30303 is open outbound.

## How can I stop to be a validator and withdraw my funds?
In order to stop being a validator, you need to inform the network that you want to exit.
This can be done by the following command:

```
docker run --rm -it --network <name of the docker network> -v "<keystore_path>":/keystore.json -v "<passwordpath>":/password.cfg --name validatorexit ecredits/lighthouse:latest lighthouse --network ecs account validator exit --keystore /keystore.json --password-file /password.cfg --beacon-node <URL of your beacon node>
```


This command assumes you're using docker to run your node.
- name of the docker network (either `ecs` for mainnet or  `ecs_pubtest` for testnet) -> It's necessary that your beacon node is reachable for this container. Thus it needs to be connected to the same network the beacon node is in
- keystore_path -> The path to the keystorefile fo the key that should exit. This is usually found in the ```datadir-eth2-validator/validators/<publickey>``` folder.
- passwordpath -> Path to the file that holds the password for the keystore.
- URL of your beacon node -> The URL of your beacon node. In our standard dockerfile that would bee http://beacon:5051



