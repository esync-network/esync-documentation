"use strict";(self.webpackChunkdocs_esync_network=self.webpackChunkdocs_esync_network||[]).push([[9820],{5476:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=o(7624),a=o(2172);const i={sidebar_position:5},s="Operation and Maintenance",r={id:"validators/node_maintenance",title:"Operation and Maintenance",description:"Once your Validator Node is up and running, it's important to keep it that way. To help keep your node running smoothly, please see the following tips and instructions.",source:"@site/docs/validators/node_maintenance.md",sourceDirName:"validators",slug:"/validators/node_maintenance",permalink:"/docs/validators/node_maintenance",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"validators",previous:{title:"Node Setup",permalink:"/docs/validators/node_setup"},next:{title:"Quick Command Reference",permalink:"/docs/validators/quick_reference"}},l={},d=[{value:"Updates",id:"updates",level:2},{value:"Update via eSync Network node maintenance script",id:"update-via-esync-network-node-maintenance-script",level:3},{value:"Update OS",id:"update-os",level:4},{value:"Manual Update",id:"manual-update",level:3},{value:"Step 1: Update OS",id:"step-1-update-os",level:4},{value:"Step 2: Update container version",id:"step-2-update-container-version",level:4},{value:"Step 3: Restart the container",id:"step-3-restart-the-container",level:4},{value:"Step 3.1: ETH1 Database issues",id:"step-31-eth1-database-issues",level:4},{value:"Step 5: Verify if your node runs as expected",id:"step-5-verify-if-your-node-runs-as-expected",level:4},{value:"Monitoring",id:"monitoring",level:2},{value:"Monitor the blockchain",id:"monitor-the-blockchain",level:3},{value:"Monitor your node",id:"monitor-your-node",level:3},{value:"Backup",id:"backup",level:2},{value:"What data needs to be backed up?",id:"what-data-needs-to-be-backed-up",level:3},{value:"How to backup",id:"how-to-backup",level:3},{value:"How can I restore my backup files?",id:"how-can-i-restore-my-backup-files",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"operation-and-maintenance",children:"Operation and Maintenance"}),"\n",(0,t.jsx)(n.p,{children:"Once your Validator Node is up and running, it's important to keep it that way. To help keep your node running smoothly, please see the following tips and instructions."}),"\n",(0,t.jsx)(n.h2,{id:"updates",children:"Updates"}),"\n",(0,t.jsx)(n.p,{children:"As with any computer system, it's crucial that your node remains up to date and secure. Therefore, please regularly update your node's operating system!"}),"\n",(0,t.jsx)(n.p,{children:"Updates to the eSync Network Docker container will be communicated via the community channels like our Elements channel."}),"\n",(0,t.jsx)(n.h3,{id:"update-via-esync-network-node-maintenance-script",children:"Update via eSync Network node maintenance script"}),"\n",(0,t.jsx)(n.p,{children:"if you use the eSync Network node maintenance script, you can update your node via:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"esync\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It will show you a few options, please select ",(0,t.jsx)(n.code,{children:"2"})," to update your node. The script will download the latest version of the container, will restart.\nOnce it's up and running, press ",(0,t.jsx)(n.code,{children:"6"}),", ",(0,t.jsx)(n.code,{children:"10"})," or ",(0,t.jsx)(n.code,{children:"11"})," to check the logs of the different nodes."]}),"\n",(0,t.jsx)(n.h4,{id:"update-os",children:"Update OS"}),"\n",(0,t.jsx)(n.p,{children:"You should update the operating system on a regular base. If you use debian or ubuntu, you can update your node via:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update && sudo apt upgrade -y\nsudo reboot\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will update your system and reboot the device. After the reboot, please login, type ",(0,t.jsx)(n.code,{children:"esync"})," and make sure that all nodes have started properly."]}),"\n",(0,t.jsx)(n.h3,{id:"manual-update",children:"Manual Update"}),"\n",(0,t.jsx)(n.p,{children:"If you do not use the eSync Network node maintenance script, please follow the following steps:"}),"\n",(0,t.jsx)(n.h4,{id:"step-1-update-os",children:"Step 1: Update OS"}),"\n",(0,t.jsx)(n.p,{children:"Update all packages of your operating system to the latest version. It depends on the operating system, but for debian based systems such as ubuntu, execute:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update && sudo apt upgrade -y\nsudo reboot\n"})}),"\n",(0,t.jsx)(n.h4,{id:"step-2-update-container-version",children:"Step 2: Update container version"}),"\n",(0,t.jsxs)(n.p,{children:["Modify the docker-compose (/var/lib/esync/validator.docker-compose.yaml) file for the validator so that it matches: ",(0,t.jsx)(n.a,{href:"https://docs.ecredits.com/files/node-setup/validator.docker-compose.yaml",children:"https://docs.ecredits.com/files/node-setup/validator.docker-compose.yaml"}),". Do not forget to set the etherbase address to yours (if you use it)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo nano /var/lib/esync/validator.docker-compose.yaml\n"})}),"\n",(0,t.jsx)(n.h4,{id:"step-3-restart-the-container",children:"Step 3: Restart the container"}),"\n",(0,t.jsx)(n.p,{children:"Restart the container and check the log files if everything works as expected:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker exec -it mainnet-geth-1 pkill geth\ndocker exec -it mainnet-beacon-1 pkill lighthouse\ndocker-compose -f /var/lib/esync/validator.docker-compose.yaml down\ndocker-compose -f /var/lib/esync/validator.docker-compose.yaml up -d\ndocker logs --tail 100 -f mainnet-geth-1\n"})}),"\n",(0,t.jsx)(n.h4,{id:"step-31-eth1-database-issues",children:"Step 3.1: ETH1 Database issues"}),"\n",(0,t.jsx)(n.p,{children:"when you upgrade from a very old version, there is a chance that your db will be corrupted or another issue occurs. You will recognize that by looking into the transactions\n. In such cases, you can stop the container and reset the db via:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"DATADIR=/var/lib/esync\ndocker exec -it mainnet-geth-1 pkill geth\ndocker-compose -f $DATADIR/validator.docker-compose.yaml down geth\n\ndocker run -it -v $DATADIR/datadir-eth1:/root/.ethereum -e POD_NAME --entrypoint geth ecredits/node:latest removedb\n\ndocker-compose -f /var/lib/esync/validator.docker-compose.yaml up -d\n"})}),"\n",(0,t.jsx)(n.h4,{id:"step-5-verify-if-your-node-runs-as-expected",children:"Step 5: Verify if your node runs as expected"}),"\n",(0,t.jsx)(n.p,{children:"Check the log files if everything works as expected:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker logs --tail 100 -f mainnet-geth-1\ndocker logs --tail 100 -f mainnet-beacon-1\ndocker logs --tail 100 -f mainnet-validator-1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,t.jsx)(n.p,{children:"As your Validator Node is part of the eSync Network community and is a crucial element of the entire ecosystem, it's important that you keep it up and validating as much as possible. To do so - and to recognize if, for example, a power outage stopped your validating process - we suggest establishing proper monitoring for your node."}),"\n",(0,t.jsx)(n.p,{children:"To do so, you can:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Monitor the blockchain if your node has recently validated a block"}),"\n",(0,t.jsx)(n.li,{children:"Monitor the Geth metrics of the Docker container"}),"\n",(0,t.jsx)(n.li,{children:"Monitor the hardware you're running the node on"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"monitor-the-blockchain",children:"Monitor the blockchain"}),"\n",(0,t.jsx)(n.p,{children:"The blockchain provides access to information that is available via the RPC endpoints. As the eSync Network is based on Ethereum, you can use the Ethereum RPC libraries to connect to the node."}),"\n",(0,t.jsx)(n.p,{children:"You can query the RPC endpoint on your own node to collect this information and verify if your node had validated a block within the last 300 validated blocks."}),"\n",(0,t.jsx)(n.p,{children:"If so, your node is validating as it should."}),"\n",(0,t.jsx)(n.p,{children:"We also recommend you monitor the uptime via the blockchain RPC endpoints and check if your Validator Node has validated a block recently. This will show you if it's still running properly, or if you should take action if it's not fast and reliable as it should be."}),"\n",(0,t.jsx)(n.h3,{id:"monitor-your-node",children:"Monitor your node"}),"\n",(0,t.jsx)(n.p,{children:"If activated, your node also directly provides metrics in prometheus format that you can monitor and process. To activate these metric endpoints, be sure to have the following options in you Docker-compose file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"#Geth\n--metrics\n--metrics.addr 0.0.0.0\n--metrics.expensive\n--metrics.port <port defined in the port section>\n\n#Beacon\n--metrics\n--metrics.addr 0.0.0.0\n--metrics.port <port defined in the port section>\n\n#Validator\n--metrics\n--metrics.addr 0.0.0.0\n--metrics.port <port defined in the port section>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Please be sure to allow the required ports on your node's firewall so you can access the metrics!"})}),"\n",(0,t.jsxs)(n.p,{children:["More information about those metrics can be found ",(0,t.jsx)(n.a,{href:"https://geth.ethereum.org/docs/monitoring/metrics",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"backup",children:"Backup"}),"\n",(0,t.jsx)(n.p,{children:"Backing up your nodes data is essential for safeguarding your valuable cryptographic keys and current state of your node. In the event of data loss, hardware failure, or security breaches, having a secure backup ensures that you can regain access to your encrypted information and digital assets. By maintaining a reliable backup, you protect yourself from potential catastrophic consequences and ensure the continuity and security of your digital presence."}),"\n",(0,t.jsx)(n.h3,{id:"what-data-needs-to-be-backed-up",children:"What data needs to be backed up?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Node wallet"}),"\nOn key import, all your validator key's have been stored in the wallte that was created in that process. Ideally you already have backed up your generated key's earlier in the process, however it makes sense to also backup the wallet to be able to restore it later.\nThe wallte is located in the data directory of the validator node. This is usually named ",(0,t.jsx)(n.code,{children:"datadir-eth2-validator/validators"})," and is located in your validators working directory."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Slashing Protection"}),"\nThese files hold the information on which block have been already processed by your validator. This is important in oder to not reprocess some, which is considered as misbehaviour and might result in slashing. Thus you should also backup the following 2 files:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"datadir-eth2-validator/validators/slashing_protection.sqlite"}),"\n",(0,t.jsx)(n.li,{children:"datadir-eth2-validator/validators/slashing_protection.sqlite-journal"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Your wallet password"}),"\nWhile importing your key's to your validator, you had to provide a password for the wallet. This is needed to unlock your accounts for validating and as such you should have it stored in a secure location. The following backup will NOT include the password, so please make sure to save it properly!"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-backup",children:"How to backup"}),"\n",(0,t.jsx)(n.p,{children:"The provided script has ready made options to backup and restore your relevant node data. So the easiest approach is to use this.\nIf you don't want to use the script, you can follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Create the backup file"}),"\nFor the sake of simplicity we can backup both files at once with the following commands on the terminal:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /var/lib/esync/mainnet/datadir-eth2-validator/\n\nsudo bash\n\ntar czf nodebackup.tar.gz validators/.\n\nsudo chown <yourusername>:<yourusersgroup> nodebackup.tar.gz\n\nexit\n\nmv nodebackup.tar.gz ~/.\n"})}),"\n",(0,t.jsx)(n.p,{children:"To ensure a local backup of the keystore file, execute the following command to copy the backup:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo cp -R /var/lib/esync/mainnet/datadir-eth2-validator/<filename> ~/.\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ideally at that point you would also copy this file to another physical machine to protect against physical outages."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Back up of keystore file"})}),"\n",(0,t.jsx)(n.p,{children:"For creating a secure backup of the files from your Validator Node, you can utilize SCP (Secure Copy Protocol):"}),"\n",(0,t.jsxs)(n.p,{children:["SCP provides a reliable and straightforward way to copy the keystore file between your validator and backup machine while ensuring secure file",(0,t.jsx)(n.br,{}),"\n","transfer through SSH (Secure Shell). To learn more about SCP and its functionalities, you can find additional information at the following\nlink: ",(0,t.jsx)(n.a,{href:"https://linux.die.net/man/1/scp",children:"https://linux.die.net/man/1/scp"})]}),"\n",(0,t.jsx)(n.p,{children:"To initiate the keystore file transfer from the Validator Node to your backup machine, please follow these steps:"}),"\n",(0,t.jsx)(n.p,{children:"On your backup machine, open Command Prompt or PowerShell. You can do this by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Command Prompt: Press Windows 'Key + R' to open the Run dialog, type 'cmd', and press Enter."}),"\n",(0,t.jsx)(n.li,{children:"PowerShell: Press Windows 'Key + X', then select \"Windows PowerShell\" from the menu."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Utilize the following command to copy the keystore file from the validator to the backup machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"scp <username>@<validator_ip>:~/<filename> path/to/destination/folder\n"})}),"\n",(0,t.jsx)(n.p,{children:"To proceed with the keystore file backup, substitute the following placeholders with your specific information:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Replace "username" with your validator username.'}),"\n",(0,t.jsx)(n.li,{children:'Replace "validator_ip" with the IP address of your validator.'}),"\n",(0,t.jsx)(n.li,{children:'Replace "filename" with the actual keystore file name that you wish to back up.'}),"\n",(0,t.jsx)(n.li,{children:'Modify "/path/to/destination/folder" to the desired folder location on the backup machine where you want to save the file.'}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Make sure the file is backed up on your backup machine!"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-can-i-restore-my-backup-files",children:"How can I restore my backup files?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Restoring the keystore file to validator"})}),"\n",(0,t.jsx)(n.p,{children:"Restoring your files is a straightforward process. Ensure you have a backup of your files and simply follow these steps to successfully restore it:"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"Before proceeding with any SSH-related tasks, ensure that OpenSSH-Server is installed on your validator. If it's not installed, you can use the\nfollowing commands to install it:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update\n\nsudo apt install openssh-server\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"On your backup machine where your file is located, open Command Prompt, Terminal or PowerShell and use the following command to copy the key to\nyour validator:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"scp /path/to/source/<filename> <username>@<validator_ip>:~\n"})}),"\n",(0,t.jsx)(n.p,{children:"Type your password."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Relocating keystore file to right place"})}),"\n",(0,t.jsxs)(n.p,{children:["Your file is copied to ",(0,t.jsx)(n.code,{children:"/home/<username>/"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Copy back the file to the ",(0,t.jsx)(n.code,{children:"/var/lib/esync/mainnet/datadir-eth2-validator"})," location by following these steps:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /var/lib/esync/mainnet/datadir-eth2-validator\n\nsudo bash\ncp /home/<username>/filename .\ntar -xf <filename>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please make sure that the files have the same owner user and group as the other validator files in order to avoid permission issues!"})}),"\n",(0,t.jsxs)(n.p,{children:["After copying the files back to your Validator on right location, you can use the ",(0,t.jsx)(n.code,{children:"ls"})," command to check if the file has been successfully copied."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2172:(e,n,o)=>{o.d(n,{I:()=>r,M:()=>s});var t=o(1504);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);