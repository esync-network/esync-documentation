# Create an ERC-20 Token

In this guide, we'll demonstrate how to create a custom ERC-20 token on the eSync Network using the Hardhat development environment. Hardhat is a popular development tool for building smart contracts on the Ethereum network.

We'll use the OpenZeppelin contracts, which are a suite of reusable, secure smart contracts. These contracts have been thoroughly tested and audited by the community, which provides developers with a solid foundation to build upon, while reducing potential security risks associated with building smart contracts from scratch. We'll then deploy the contract on the eSync Network Testnet and the eSync Network Mainnet.

## Prerequisites

1. Node.js (version 12.x or higher): Install it from [here](https://nodejs.org/en/download/)
2. A code editor like Visual Studio Code: Install it from [here](https://code.visualstudio.com/download)

## Step 1: Set up the development environment

First, create a new directory for your project and navigate into it using the command line:

```sh
mkdir my-erc20-token
cd my-erc20-token
```

Initialize a new Node.js project:

```sh
npm init -y
```

Install Hardhat and its dependencies:

```sh
npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```

Create a Hardhat configuration file:

```sh
npx hardhat
```

Select "Create an empty hardhat.config.js" when prompted.

Open the `hardhat.config.js` file in your code editor and replace its contents with the following code:

```javascript
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.19",
  networks: {
    ecredits: {
      url: "https://rpc.esync.network",
      accounts: ["your_private_key_here"],
      gasPrice: 20000000000, // 20 Gwei
    },
    ecredits_test: {
      url: "https://rpc.tst.esync.network",
      accounts: ["your_private_key_here"],
      gasPrice: 20000000000, // 20 Gwei
    },
  },
};
```

Replace `"your_private_key_here"` with your private key that you use for deployment.

Install the openzeppelin/contracts package:

```sh
npm install @openzeppelin/contracts
```

## Step 2: Create the ERC-20 token contract

In your project directory, create a new directory called `contracts` and a new file inside it called `MyToken.sol`:

```sh
mkdir contracts
touch contracts/MyToken.sol
```

Paste the following Solidity code into `MyToken.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply * 10**18);
    }
}
```

:::info
Note: You can use the [OpenZeppelin](https://www.openzeppelin.com/contracts) Contracts Wizard to extend your ERC-20 Token with additional functionality.
:::

## Step 3: Compile the smart contract

Compile the contract using Hardhat:

```sh
npx hardhat compile
```

## Step 4: Deploy the ERC-20 token to the eCredits Testnet

Create a new directory called `scripts` and a new file inside it called `deploy.js`:

```sh
mkdir scripts
touch scripts/deploy.js
```

Paste the following JavaScript code into `deploy.js`:

```javascript
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(1000000); // Deploy with an initial supply of 1,000,000 tokens

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

Now, make sure that your account specified in `hardhat.config.js` has some eCredits to pay the gas fees for the deployment and deploy the contract to the eCredits Testnet:

```sh
npx hardhat run --network ecredits_test scripts/deploy.js
```

If the deployment is successful, the console will display a message with the contract address. Save this address as you will need it to interact with your ERC-20 token.  
Once the deployment is done, you will see a "Token Minting" transaction at the [eCredits Testnet Block Explorer](https://explorer.tst.esync.network/).

## Step 5: Interact with your ERC-20 token

You can interact with your token by using Hardhat's console:

```sh
npx hardhat console --network ecredits_test
```

Then, you can instantiate your token contract:

```javascript
const token = await ethers.getContractAt(
  "MyToken",
  "the_token_contract_address"
);
```

Replace `"the_token_contract_address"` with the address of your deployed token contract.

Now, you can call the contract's methods. For instance, to check the total supply:

```javascript
const totalSupply = await token.totalSupply();
console.log("Total supply is: ", totalSupply.toString());
```

To check the balance of an account:

```javascript
const balance = await token.balanceOf("the_account_address");
console.log("Balance is: ", balance.toString());
```

Replace `"the_account_address"` with the address you want to check.

Remember to exit the console once you're done:

```javascript
.exit
```

## Step 6: Deploy the token to the eCredits Mainnet

Repeat Step 4, but use `--network eCredits` instead of `--network eCredits_test`.  
Make sure that your account has some eCredits for the deployment.

## Conclusion

Congratulations! You have just created your own ERC-20 token on the eCredits network using Hardhat. With your token now deployed, you can start building decentralized applications (dApps) around it or even distribute it to other users.

Remember to test your contract extensively and possibly get a security audit before using it in a production environment.
