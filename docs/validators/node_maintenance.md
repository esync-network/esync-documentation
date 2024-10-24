---
sidebar_position: 5
---
# Operation and Maintenance
Once your Validator Node is up and running, it's important to keep it that way. To help keep your node running smoothly, please see the following tips and instructions. 

## Updates 
As with any computer system, it's crucial that your node remains up to date and secure. Therefore, please regularly update your node's operating system!

Updates to the eSync Network Docker container will be communicated via the community channels like our Elements channel.

### Update via eSync Network node maintenance script

if you use the eSync Network node maintenance script, you can update your node via:

```bash
esync
```

It will show you a few options, please select `2` to update your node. The script will download the latest version of the container, will restart.
Once it's up and running, press `6`, `10` or `11` to check the logs of the different nodes.  

#### Update OS

You should update the operating system on a regular base. If you use debian or ubuntu, you can update your node via:

```bash
sudo apt update && sudo apt upgrade -y
sudo reboot
```

This will update your system and reboot the device. After the reboot, please login, type `esync` and make sure that all nodes have started properly.

### Manual Update

If you do not use the eSync Network node maintenance script, please follow the following steps:

#### Step 1: Update OS

Update all packages of your operating system to the latest version. It depends on the operating system, but for debian based systems such as ubuntu, execute:

```bash
sudo apt update && sudo apt upgrade -y
sudo reboot
```

#### Step 2: Update container version

Modify the docker-compose (/var/lib/esync/validator.docker-compose.yaml) file for the validator so that it matches: https://docs.ecredits.com/files/node-setup/validator.docker-compose.yaml. Do not forget to set the etherbase address to yours (if you use it).

```bash
sudo nano /var/lib/esync/validator.docker-compose.yaml
```

#### Step 3: Restart the container

Restart the container and check the log files if everything works as expected:  

```bash
docker exec -it mainnet-geth-1 pkill geth
docker exec -it mainnet-beacon-1 pkill lighthouse
docker-compose -f /var/lib/esync/validator.docker-compose.yaml down
docker-compose -f /var/lib/esync/validator.docker-compose.yaml up -d
docker logs --tail 100 -f mainnet-geth-1
```

#### Step 3.1: ETH1 Database issues

when you upgrade from a very old version, there is a chance that your db will be corrupted or another issue occurs. You will recognize that by looking into the transactions
. In such cases, you can stop the container and reset the db via:

```bash
DATADIR=/var/lib/esync
docker exec -it mainnet-geth-1 pkill geth
docker-compose -f $DATADIR/validator.docker-compose.yaml down geth

docker run -it -v $DATADIR/datadir-eth1:/root/.ethereum -e POD_NAME --entrypoint geth ecredits/node:latest removedb

docker-compose -f /var/lib/esync/validator.docker-compose.yaml up -d
```

#### Step 5: Verify if your node runs as expected

Check the log files if everything works as expected:  

```bash
docker logs --tail 100 -f mainnet-geth-1
docker logs --tail 100 -f mainnet-beacon-1
docker logs --tail 100 -f mainnet-validator-1
```


## Monitoring
As your Validator Node is part of the eSync Network community and is a crucial element of the entire ecosystem, it's important that you keep it up and validating as much as possible. To do so - and to recognize if, for example, a power outage stopped your validating process - we suggest establishing proper monitoring for your node.

To do so, you can:
1. Monitor the blockchain if your node has recently validated a block
2. Monitor the Geth metrics of the Docker container
3. Monitor the hardware you're running the node on

### Monitor the blockchain
The blockchain provides access to information that is available via the RPC endpoints. As the eSync Network is based on Ethereum, you can use the Ethereum RPC libraries to connect to the node.

You can query the RPC endpoint on your own node to collect this information and verify if your node had validated a block within the last 300 validated blocks.

If so, your node is validating as it should.

We also recommend you monitor the uptime via the blockchain RPC endpoints and check if your Validator Node has validated a block recently. This will show you if it's still running properly, or if you should take action if it's not fast and reliable as it should be. 

### Monitor your node
If activated, your node also directly provides metrics in prometheus format that you can monitor and process. To activate these metric endpoints, be sure to have the following options in you Docker-compose file:

```yaml
#Geth
--metrics
--metrics.addr 0.0.0.0
--metrics.expensive
--metrics.port <port defined in the port section>

#Beacon
--metrics
--metrics.addr 0.0.0.0
--metrics.port <port defined in the port section>

#Validator
--metrics
--metrics.addr 0.0.0.0
--metrics.port <port defined in the port section>
```

:::info

Please be sure to allow the required ports on your node's firewall so you can access the metrics!

:::

More information about those metrics can be found [here](https://geth.ethereum.org/docs/monitoring/metrics).

## Backup

Backing up your nodes data is essential for safeguarding your valuable cryptographic keys and current state of your node. In the event of data loss, hardware failure, or security breaches, having a secure backup ensures that you can regain access to your encrypted information and digital assets. By maintaining a reliable backup, you protect yourself from potential catastrophic consequences and ensure the continuity and security of your digital presence.

### What data needs to be backed up?
1. **Node wallet**
    On key import, all your validator key's have been stored in the wallte that was created in that process. Ideally you already have backed up your generated key's earlier in the process, however it makes sense to also backup the wallet to be able to restore it later.
    The wallte is located in the data directory of the validator node. This is usually named ```datadir-eth2-validator/validators``` and is located in your validators working directory.

2. **Slashing Protection**
   These files hold the information on which block have been already processed by your validator. This is important in oder to not reprocess some, which is considered as misbehaviour and might result in slashing. Thus you should also backup the following 2 files:
   - datadir-eth2-validator/validators/slashing_protection.sqlite
   - datadir-eth2-validator/validators/slashing_protection.sqlite-journal

3. **Your wallet password**
   While importing your key's to your validator, you had to provide a password for the wallet. This is needed to unlock your accounts for validating and as such you should have it stored in a secure location. The following backup will NOT include the password, so please make sure to save it properly!

### How to backup
The provided script has ready made options to backup and restore your relevant node data. So the easiest approach is to use this. 
If you don't want to use the script, you can follow these steps:
1. **Create the backup file**
    For the sake of simplicity we can backup both files at once with the following commands on the terminal:

    ```bash
    cd /var/lib/esync/mainnet/datadir-eth2-validator/
    
    sudo bash
    
    tar czf nodebackup.tar.gz validators/.
    
    sudo chown <yourusername>:<yourusersgroup> nodebackup.tar.gz

    exit

    mv nodebackup.tar.gz ~/.
    ```

     To ensure a local backup of the keystore file, execute the following command to copy the backup:

    ```bash
    sudo cp -R /var/lib/esync/mainnet/datadir-eth2-validator/<filename> ~/.
    ```

    Ideally at that point you would also copy this file to another physical machine to protect against physical outages.

2. **Back up of keystore file**

    For creating a secure backup of the files from your Validator Node, you can utilize SCP (Secure Copy Protocol):

    SCP provides a reliable and straightforward way to copy the keystore file between your validator and backup machine while ensuring secure file  
    transfer through SSH (Secure Shell). To learn more about SCP and its functionalities, you can find additional information at the following
    link: https://linux.die.net/man/1/scp

    To initiate the keystore file transfer from the Validator Node to your backup machine, please follow these steps:

    On your backup machine, open Command Prompt or PowerShell. You can do this by:

    - Command Prompt: Press Windows 'Key + R' to open the Run dialog, type 'cmd', and press Enter.
    - PowerShell: Press Windows 'Key + X', then select "Windows PowerShell" from the menu.

    Utilize the following command to copy the keystore file from the validator to the backup machine:

    ```bash
    scp <username>@<validator_ip>:~/<filename> path/to/destination/folder
    ```

    To proceed with the keystore file backup, substitute the following placeholders with your specific information:

    - Replace "username" with your validator username.
    - Replace "validator_ip" with the IP address of your validator.
    - Replace "filename" with the actual keystore file name that you wish to back up.
    - Modify "/path/to/destination/folder" to the desired folder location on the backup machine where you want to save the file.  
	
	:::info
    Make sure the file is backed up on your backup machine!
    :::

### How can I restore my backup files?

1. **Restoring the keystore file to validator**

   Restoring your files is a straightforward process. Ensure you have a backup of your files and simply follow these steps to successfully restore it:

	:::info
	Before proceeding with any SSH-related tasks, ensure that OpenSSH-Server is installed on your validator. If it's not installed, you can use the
	following commands to install it:

    ```bash
    sudo apt update

    sudo apt install openssh-server
    ```

	:::

	On your backup machine where your file is located, open Command Prompt, Terminal or PowerShell and use the following command to copy the key to
    your validator:

    ```bash
    scp /path/to/source/<filename> <username>@<validator_ip>:~
    ```

    Type your password.

2. **Relocating keystore file to right place**

    Your file is copied to `/home/<username>/`.

    Copy back the file to the `/var/lib/esync/mainnet/datadir-eth2-validator` location by following these steps:

    ```bash
    cd /var/lib/esync/mainnet/datadir-eth2-validator

    sudo bash
    cp /home/<username>/filename .
    tar -xf <filename>
    ```

	:::warning
	Please make sure that the files have the same owner user and group as the other validator files in order to avoid permission issues!

	:::

   After copying the files back to your Validator on right location, you can use the `ls` command to check if the file has been successfully copied.