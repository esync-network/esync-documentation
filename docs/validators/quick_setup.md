---
sidebar_position: 2
---
# Quick-Setup

The following contains a quick walkthrough of the installation of a **Validator** Node. The general process applies for all node types, you just have to use the respecive docker-compose file for your node type.

:::info

Please ensure you meet all [prerequisites](/validators/node_setup.md#prerequisites) for running a node!

:::

## Preparation (Updates & Docker)

Please install docker as described at https://docs.docker.com/engine/install/. For 
Ubuntu, you can also simply use:

```bash
sudo apt update && sudo apt install docker docker-compose
sudo usermod -aG docker $USER
```

## Node Setup

```bash
datadir='/var/lib/eCredits/'
```

## Setup with script

The SCE provides a ready made setup and management script for validators. This script can be donwloaded [here](https://dl.ecredits.com/scripts/ecredits.sh) and will work in the ```/var/lib/esync/mainnet``` or ```/var/lib/esync/testnet``` folders. So please make sure they are not yet used and the disk they are on has sufficient space to hold the chain. Ideally the chain is on a separate partition than your root folder.

### Installation and execution
To install the script, just download it to your ```/usr/local/bin/``` directory and apply execution permission to it.

```bash
sudo wget "https://dl.ecredits.com/scripts/ecredits.sh" -O /usr/local/bin/esync
sudo chmod ugo+x /usr/local/bin/esync
```

Now, when you launch the script with the ```esync``` command, it will lead you through the initial setup of your node.

If you wish to setup a testnet node, just start it with ```esync testnet``` everytime you want to work with your testnet node. Please be aware, that the testnet node will operate on different ports on your host than the standard ones defined above. You'll need to update your firewall rules accordingly.