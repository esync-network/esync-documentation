---
sidebar_position: 3
---
# Node Setup

This document describes all necessary steps to setup an eSync Network Validator Node to participate in the eSync Network. The intended audience for this documentation are administrators, developers, and other interested people who wish to run a node.

:::warning

You are solely responsible for your Validator Node. We do not provide any support for eSync Network Validator Nodes. This includes but is not limited to support for setting up, maintaining, or updating eSync Network Validator Nodes. It's your responsibility to take care of the node and it's security, keeping it up to date, and to participate in the community.

:::

## Prerequisites

To setup and run an eSync Network node, a basic understanding of Linux, Docker, and Bash is 
required. The examples provided are based on Ubuntu Server 22.04 LTS. 

### Hardware Requirements

For Validator and Full Nodes, we suggest to choose a setup with the following properties:  
 
 - **Very fast and reliable SSDs**: Please make sure that you are using a system which utilizes SSDs. You should also make sure that there are premium SSDs in use, and preferably NVMe.
 - **A large amount of RAM**: 16GB RAM is the absolute minimum configuration, and we suggest 64GB for optimal performance, while 32GB is sufficient for a node at the time of writing. 
 - **Fast and extensible storage**: Minimum storage requirements are 1TB, and you should make sure that you can grow the space at a later time should you wish to run a full sync node. 

**Minimum requirements**:  

 - **CPU**: 4 cores / 8 threads, 2.8 GHz or faster, 64-bit
 - **RAM**: 32 GB RAM
 - **HDD**: 1 TB NVMe SSD
 - **GPU**: No strict requirements

Example cloud virtual machines are:

| Cloud Provider  | Virtual Machine Size              |
|-----------------|-----------------------------------|
| Microsoft Azure | Standard_D8_v4 or Standard_D8s_v4 |
| Amazon AWS      | t3.2xlarge                        |
| Google Cloud    | e2-standard-8                     |

### Connectivity Recommendations

The nodes should be connected through an "always on" internet connection (broadband and not LTE). We recommend 
a dedicated network connection with at least 8 Mbit up/down.

### Required Software 

A Linux x86_64 machine with running Docker daemon and installed Docker-compose binaries. You can install 
Docker and Docker-compose as advised at https://docs.docker.com/engine/install/ and https://docs.docker.com/compose/install/.

### Firewall Settings

In case you use a firewall, please make sure to open the following ports:  
These Ports are according to the script that we provide for setup. If you do your own, please make sure to adapt them poroperly!
#### Mainnet
**Incoming** (Internet -> ECS node):

 - Geth Discovery: 30303 TCP/UDP 
 - Geth RPC (optional): 8545 TCP/UDP
 - Geth Metrics (optional): 6061 TCP/UDP
 - Beacon Node Discovery: 9000 TCP/UDP
 - Beacon Node Quic: 9001 TCP
 - Beacon Node Metrics: 8080 TCP/UDP
 - Validator Metrics: 8081 TCP/UDP


**Outgoing** (ECS node -> Internet): 

 - Geth Discovery: 30303 TCP/UDP
 - Geth Metrics (optional): 6061 TCP/UDP
 - Beacon Node Discovery: 9000 TCP/UDP
 - Beacon Node Quic: 9001 TCP
 - Beacon Metrics (optional): 8080 TCP/UDP
 - Validator Metrics (optional): 8081 TCP/UDP

The following are in general needed for internet access/time synchronization:
 - DNS (optional): 53 TCP/UDP
 - HTTP/HTTPS (optional): 80, 443 RCP
 - NTP (optional): 123 TCP/UDP

#### Testnet
**Incoming** (Internet -> ECS node):

 - Geth Discovery: 30305 TCP/UDP 
 - Geth RPC (optional): 8548 TCP/UDP
 - Geth Metrics (optional): 6062 TCP/UDP
 - Beacon Node Discovery: 9003 TCP/UDP
 - Beacon Node Quic: 9002 TCP
 - Beacon Node Metrics: 8082 TCP/UDP
 - Validator Metrics: 8083 TCP/UDP


**Outgoing** (ECS node -> Internet): 

 - Geth Discovery: 30305 TCP/UDP
 - Geth Metrics (optional): 6062 TCP/UDP
 - Beacon Node Discovery: 9003 TCP/UDP
 - Beacon Node Quic: 9002 TCP
 - Beacon Metrics (optional): 8082 TCP/UDP
 - Validator Metrics (optional): 8083 TCP/UDP

The following are in general needed for internet access/time synchronization:
 - DNS (optional): 53 TCP/UDP
 - HTTP/HTTPS (optional): 80, 443 RCP
 - NTP (optional): 123 TCP/UDP


## Preparing the machine
### Install Docker and Docker-compose

Please install Docker and Docker-compose as described at https://docs.docker.com/engine/install/ and https://docs.docker.com/compose/install/.

### Configure Docker

Add user to Docker group.

`sudo usermod -aG docker $USER`

### Secure Docker

We strongly recommend to not run the container without any additional hardening measures. To do so please review the respective [OWASP Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html) and apply appropriate measures.

## Preparing yourself
As a first step, you need to decide how many validators you would like to run, in order to be able to create the according number of key's and consequently also deposit the matching amount of ECS to the contract.

To help with the decision, we have composed some basics to consider:
1. **Hardware Power** - Per CPU Core your validator node will have, you can run approximatel 350 validators. 
2. **Staking** - Per validator you're running, you have to stake 256 ECS to the deposit contract. Pls take into consideration some gas fee!

Once you have that numbers, you can start setting up your node with one of the following options

## Setup with script

The SCE provides a ready made setup and management script for validators. This script can be donwloaded [here](https://dl.ecredits.com/scripts/ecredits.sh) and will work in the ```/var/lib/esync/mainnet``` or ```/var/lib/esync/testnet``` folders. So please make sure they are not yet used and the disk they are on has sufficient space to hold the chain. Ideally the chain is on a separate partition than your root folder.

### Installation and execution
To install the script, just download it to your ```/usr/local/bin/``` directory and apply execution permission to it.

```bash
sudo wget "https://dl.ecredits.com/scripts/ecredits.sh" -O /usr/local/bin/esync
sudo chmod ugo+x /usr/local/bin/esync
```

Now, when you launch the script with the ```esync``` command, it will lead you through the initial setup of your node.

If you wish to setup a testnet node, just start it with ```esync testnet``` everytime you want to work with your testnet node.

:::caution
The script supports the initial generation of keys and their import. If you want to add keys later, you need to do it manually as described below!
If you haven't created any keys when setting up the node, you can just stop the node and restart it. The start assistant will then provide the option to generate and stake keys.
:::

## Manual setup
If you don't want to use our setup script, you can also do the setup steps manually as described below.

### Create directory for the validator

Create a directory for storing all the validators files and the chain. This directory can be a subdirectory on the same physical OS device or (better) a volume on a separate disk. This directory will be used as working directory for the whole process.

Store the directory path in a variable for later use. The recommended path is `/var/lib/esync/mainnet`, but feel free to use whatever fits best for you:

```bash
datadir='/var/lib/esync/mainnet'
mkdir -p $datadir/datadir-eth2-validator
```

### Manual key generation and staking
In order to generate only the key's and stake for them, we provide a customized staking-deposit-cli [docker image](https://hub.docker.com/r/ecredits/staking-deposit-cli) that can handle key generation and deposit for you if you wish. Nevertheless, it's not mandatary to use it, so you can generate and deposit manually if you wish.

:::warning

Please make sure to backup the seed phrase that is used to generate your key's and ideally also the keystore files and deposit_data-*.json that have been generated by the tool!

:::

#### Logging
The script itself will generate 2 logfiles for the staking.

1. process_log_\<timestamp\> - This log is written while processing the deposits and can be used to review the last operation in case of a crash
2. deposit_log.json - This file is written after all keys have been processed and holds the final state of the transactions. This file will also be used to restart the staking process if necessary in order to skip already processed keys and just pick up the ones that are still pending.

The deposit_log.json file will be backed up with a timestamp if you reprocess an existing one with the ```stakingonly``` flag, so you can follow the progress if you need multiple runs.

#### Usage
:::caution
Please be aware that this image will always create a new mnemonic, new key's and will try to deposit for those created keys if you run it without the stakingonly flag!
If you don't want to do the deposits via the script, just don't provide funds to the temporary account, which will end the process.
:::

The image can be run with the following command and will work in a folder called ```gened``` below your current working directory. 
```bash
    # Key generation and staking on Mainnet
    docker run --rm -it -v ${pwd}/gened:/gened ecredits/staking-deposit-cli:latest -c "node /setup/eth2_setup_node.js mainnet"

    # Staking only on mainnet
    docker run --rm -it -v ${pwd}/gened:/gened ecredits/staking-deposit-cli:latest -c "node /setup/eth2_setup_node.js mainnet stakingonly"

    # Key generation and staking on Testnet
    docker run --rm -it -v ${pwd}/gened:/gened ecredits/staking-deposit-cli:latest -c "node /setup/eth2_setup_node.js testnet"

    # Staking only on testnet
    docker run --rm -it -v ${pwd}/gened:/gened ecredits/staking-deposit-cli:latest -c "node /setup/eth2_setup_node.js testnet stakingonly"
```

When using the ```stakingonly``` flag, the script will work based on the ```deposit_data-*``` file that must be located in the ```${pwd}/gened/validator_keys``` if you are working with the commands above.  
It will furthermore look for a ```deposit_log.json``` file the is located in ```${pwd}/gened```. If it finds one, it will continue from the represented state. If not, it will process all keys again.

:::caution
Please make sure you're only reprocessing keys that are not staked yet! The script will let you know if it found a ```deposit_log.json``` file or not! If it didn't find one, it will deposit again for all keys!
:::

:::tip
If you only want to use the script to generate the keys, just don't provide any funds to the temporary account. The script will then exit the process and you can continue to process your keys manually.
:::

#### Troubleshooting
If at some point you think your ```deposit_log.json``` file is not representing the latest state, you can regenerate it based on the transactions on the contract.
To do so, export the transactions from the contract that fit the timeframe when you've staked your keys. You can generate a ```.csv``` from the block explorer with fitting filter criterias on the transactions of the deposit contract.
The script ```checkKeys.js``` that can be found [here](https://dl.ecredits.com/scripts/checkKeys.js) will take the ```deposit_data-*``` file and the generated ```.csv``` file as inputs. It will then check the status of the keys and regenerate a ```deposit_log.json``` based on the actually staked keys in the transaction export. This generated file called ```generated_deposit_log.json``` can then be renamed and put in place instead of the potentially corrupted one to continue the staking process.  
The script can be called like the following example:
```
node checkKeys.js <networkname> <path_to_deposit_data_file> <path_to_transactions_csv>

# Example
node checkKeys-js testnet depositDataFile.json transactions.csv
```
- networkname -> mainnet or testnet, depending on for which network you want to check the keys
- path_to_deposit_data_file -> Path to the deposit data file that has been created during key creation for the keys that you want to check
- path_to_transactions_csv -> Path to the transaction export of the deposit contract that you want to check against.

### Staking
Once the key's are generated, you have to deposit 256 ECS to the contract for each public key that you just generated. 
You can either do this manually, or you can use our customized [staking-deposit-cli](https://hub.docker.com/r/ecredits/staking-deposit-cli) image. It's usage is described [here](./node_setup#manual-key-generation-and-staking)

**Deposit Contract Address for testnet:** 
0x207f39fB03Ed083d2322410Ac9Ab4BA319921A8F

**Deposit Contract Address for mainnet:** 
0x1C98eDf5027f4a6713f66BC643a1BA62f769843D


If you want to do this yourself, below you can find an example java script that is handling the staking for all records in a deposit data file.
:::warning

This code snipped can be used on your own risk! Please make sure you understand what it does and adapt accordingly where necessary.

:::

```javascript
const rpcProvider = 'https://rpc.tst.esync.network';
//const rpcProvider = 'https://rpc.ecredits.com';
const provider = new ethers.JsonRpcProvider(rpcProvider);
const depositContractJSON = JSON.parse(fs.readFileSync('<path to the deposit contract json file>'));
const DEPOSIT_AMOUNT = 256;
let depositContractAddress = "<deposit contract address>"

let stakingWallet = new ethers.Wallet(wallet.privateKey, provider);
let depositContract = new ethers.Contract(depositContractAddress, depositContractJSON.abi, stakingWallet);

const depositData = JSON.parse(fs.readFileSync(<path to deposit data file>));

let transactionStatis = {};
let pubkeyStatis = {};
let processedAccount = 0;
for(let i in depositData) {
    const {
        pubkey,
        withdrawal_credentials,
        signature,
        deposit_data_root,
    } = depositData[i];

    processedAccount += 1;
    pubkeyStatis[pubkey] = {state: "pending"};
    console.log('+','depositing to', pubkey)
    let hasError = false;
    let tx = await depositContract.deposit(
        '0x' + pubkey,
        '0x' + withdrawal_credentials,
        '0x' + signature,
        '0x' + deposit_data_root,
        {
            value: ethers.parseUnits(DEPOSIT_AMOUNT.toString(), "ether"),
            gasPrice: '20000000000',
            gasLimit: '200000'
        })
        .catch((error) => {
            pubkeyStatis[pubkey] = {state: "error", code: error.code, message: error.info.error.message};
            hasError = true;
        });
    if(!hasError){
        pubkeyStatis[pubkey] = {state: "sent", hash: tx.hash};
        transactionStatis[tx.hash] = { hash: tx.hash, pubkey: pubkey, state: "sent"};
        if(depositData.length == processedAccount)
        {
            let finalResult = await tx.wait();
            if(finalResult.status == 1){
                transactionStatis[finalResult.hash]["state"] = "mined";
                pubkeyStatis[transactionStatis[finalResult.hash].pubkey]["state"] = "mined";
            } else {
                pubkeyStatis[pubkey] = {state: "error", message: "Receipe return status != 1."};
            }
        } 
        else {
            tx.wait()
                .then((successResult) => {
                    if(successResult.status == 1){
                        transactionStatis[successResult.hash]["state"] = "mined";
                        pubkeyStatis[transactionStatis[successResult.hash].pubkey]["state"] = "mined";
                    } else {
                        pubkeyStatis[pubkey] = {state: "error", message: "Receipe return status != 1."};
                    }
                })
                .catch((error) => {
                    console.log(error);
                    console.log(error.code);
                    console.log(error.info.error.message);
                });
        }
    }
}
```

### Create password file
In order to unlock the wallet that holds your key's, you have to source the password as file into the docker container. You can create the file at the exepcted location of our provided docker-compose file with the following command:
```bash
echo <password> | sudo tee /etc/config/password > /dev/null
```

:::warning

Please make sure that the permissions on the file are as restrictive as possible, to protect your key!

:::

### Import wallet

To import your generated key's you can run the following command. Please make sure to mount the correct directories into the container.

```bash
docker run --rm -it -v "$datadir/gened/validator_keys":/keys -v "$datadir/datadir-eth2-validator":/root/.lighthouse -v "$passwordpath":/password.cfg --name validatorimport ecredits/lighthouse:latest lighthouse --network $network account validator import --datadir /root/.lighthouse --directory /keys --reuse-password --password-file /password.cfg

```

- ```$datadir/gened/validator_keys``` points to the directory that holds the the keys.
- ```$datadir/datadir-eth2-validator``` points to the datadir of the validator.
- ```$passwordpath":/password.cfg``` points to the password file.
- ```$network``` should be the same docker network as your beacon node is in.



### Start nodes
Once this is done, you can now start the node with our provided [docker-compose](https://raw.githubusercontent.com/eCredits/docs/master/static/files/node-setup/validator.mainnet.docker-compose.yaml) files.  
In order to use this docker-compose file without our script, you need to update it according to your needs.
The following settings must be updated and checked:
1. Set the --miner.etherbase account to an account that you control
2. Set the --suggested-fee-recipient account to an account that you control both for the beacon and validator node
3. Set the --nat extip: setting to your external IP address
4. Double check the mounted directories and adapt where necessary
5. Double check the ports used and adapt where necessary