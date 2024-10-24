"use strict";(self.webpackChunkdocs_esync_network=self.webpackChunkdocs_esync_network||[]).push([[7952],{7308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(7624),i=n(2172);const o={sidebar_position:3},r="Node Setup",a={id:"validators/node_setup",title:"Node Setup",description:"This document describes all necessary steps to setup an eSync Network Validator Node to participate in the eSync Network. The intended audience for this documentation are administrators, developers, and other interested people who wish to run a node.",source:"@site/docs/validators/node_setup.md",sourceDirName:"validators",slug:"/validators/node_setup",permalink:"/docs/validators/node_setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"validators",previous:{title:"Quick-Setup",permalink:"/docs/validators/quick_setup"},next:{title:"Operation and Maintenance",permalink:"/docs/validators/node_maintenance"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Connectivity Recommendations",id:"connectivity-recommendations",level:3},{value:"Required Software",id:"required-software",level:3},{value:"Firewall Settings",id:"firewall-settings",level:3},{value:"Mainnet",id:"mainnet",level:4},{value:"Testnet",id:"testnet",level:4},{value:"Preparing the machine",id:"preparing-the-machine",level:2},{value:"Install Docker and Docker-compose",id:"install-docker-and-docker-compose",level:3},{value:"Configure Docker",id:"configure-docker",level:3},{value:"Secure Docker",id:"secure-docker",level:3},{value:"Preparing yourself",id:"preparing-yourself",level:2},{value:"Setup with script",id:"setup-with-script",level:2},{value:"Installation and execution",id:"installation-and-execution",level:3},{value:"Manual setup",id:"manual-setup",level:2},{value:"Create directory for the validator",id:"create-directory-for-the-validator",level:3},{value:"Manual key generation and staking",id:"manual-key-generation-and-staking",level:3},{value:"Logging",id:"logging",level:4},{value:"Usage",id:"usage",level:4},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"Staking",id:"staking",level:3},{value:"Create password file",id:"create-password-file",level:3},{value:"Import wallet",id:"import-wallet",level:3},{value:"Start nodes",id:"start-nodes",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"node-setup",children:"Node Setup"}),"\n",(0,s.jsx)(t.p,{children:"This document describes all necessary steps to setup an eSync Network Validator Node to participate in the eSync Network. The intended audience for this documentation are administrators, developers, and other interested people who wish to run a node."}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"You are solely responsible for your Validator Node. We do not provide any support for eSync Network Validator Nodes. This includes but is not limited to support for setting up, maintaining, or updating eSync Network Validator Nodes. It's your responsibility to take care of the node and it's security, keeping it up to date, and to participate in the community."})}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"To setup and run an eSync Network node, a basic understanding of Linux, Docker, and Bash is\nrequired. The examples provided are based on Ubuntu Server 22.04 LTS."}),"\n",(0,s.jsx)(t.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,s.jsx)(t.p,{children:"For Validator and Full Nodes, we suggest to choose a setup with the following properties:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Very fast and reliable SSDs"}),": Please make sure that you are using a system which utilizes SSDs. You should also make sure that there are premium SSDs in use, and preferably NVMe."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"A large amount of RAM"}),": 16GB RAM is the absolute minimum configuration, and we suggest 64GB for optimal performance, while 32GB is sufficient for a node at the time of writing."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Fast and extensible storage"}),": Minimum storage requirements are 1TB, and you should make sure that you can grow the space at a later time should you wish to run a full sync node."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Minimum requirements"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"CPU"}),": 4 cores / 8 threads, 2.8 GHz or faster, 64-bit"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RAM"}),": 32 GB RAM"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"HDD"}),": 1 TB NVMe SSD"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"GPU"}),": No strict requirements"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Example cloud virtual machines are:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Cloud Provider"}),(0,s.jsx)(t.th,{children:"Virtual Machine Size"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Microsoft Azure"}),(0,s.jsx)(t.td,{children:"Standard_D8_v4 or Standard_D8s_v4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Amazon AWS"}),(0,s.jsx)(t.td,{children:"t3.2xlarge"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Google Cloud"}),(0,s.jsx)(t.td,{children:"e2-standard-8"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"connectivity-recommendations",children:"Connectivity Recommendations"}),"\n",(0,s.jsx)(t.p,{children:'The nodes should be connected through an "always on" internet connection (broadband and not LTE). We recommend\na dedicated network connection with at least 8 Mbit up/down.'}),"\n",(0,s.jsx)(t.h3,{id:"required-software",children:"Required Software"}),"\n",(0,s.jsxs)(t.p,{children:["A Linux x86_64 machine with running Docker daemon and installed Docker-compose binaries. You can install\nDocker and Docker-compose as advised at ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"https://docs.docker.com/engine/install/"})," and ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"https://docs.docker.com/compose/install/"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"firewall-settings",children:"Firewall Settings"}),"\n",(0,s.jsxs)(t.p,{children:["In case you use a firewall, please make sure to open the following ports:",(0,s.jsx)(t.br,{}),"\n","These Ports are according to the script that we provide for setup. If you do your own, please make sure to adapt them poroperly!"]}),"\n",(0,s.jsx)(t.h4,{id:"mainnet",children:"Mainnet"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Incoming"})," (Internet -> ECS node):"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Geth Discovery: 30303 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Geth RPC (optional): 8545 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Geth Metrics (optional): 6061 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Node Discovery: 9000 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Node Quic: 9001 TCP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Node Metrics: 8080 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Validator Metrics: 8081 TCP/UDP"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Outgoing"})," (ECS node -> Internet):"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Geth Discovery: 30303 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Geth Metrics (optional): 6061 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Node Discovery: 9000 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Node Quic: 9001 TCP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Metrics (optional): 8080 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Validator Metrics (optional): 8081 TCP/UDP"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The following are in general needed for internet access/time synchronization:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"DNS (optional): 53 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"HTTP/HTTPS (optional): 80, 443 RCP"}),"\n",(0,s.jsx)(t.li,{children:"NTP (optional): 123 TCP/UDP"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"testnet",children:"Testnet"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Incoming"})," (Internet -> ECS node):"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Geth Discovery: 30305 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Geth RPC (optional): 8548 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Geth Metrics (optional): 6062 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Node Discovery: 9003 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Node Quic: 9002 TCP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Node Metrics: 8082 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Validator Metrics: 8083 TCP/UDP"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Outgoing"})," (ECS node -> Internet):"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Geth Discovery: 30305 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Geth Metrics (optional): 6062 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Node Discovery: 9003 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Node Quic: 9002 TCP"}),"\n",(0,s.jsx)(t.li,{children:"Beacon Metrics (optional): 8082 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"Validator Metrics (optional): 8083 TCP/UDP"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The following are in general needed for internet access/time synchronization:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"DNS (optional): 53 TCP/UDP"}),"\n",(0,s.jsx)(t.li,{children:"HTTP/HTTPS (optional): 80, 443 RCP"}),"\n",(0,s.jsx)(t.li,{children:"NTP (optional): 123 TCP/UDP"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"preparing-the-machine",children:"Preparing the machine"}),"\n",(0,s.jsx)(t.h3,{id:"install-docker-and-docker-compose",children:"Install Docker and Docker-compose"}),"\n",(0,s.jsxs)(t.p,{children:["Please install Docker and Docker-compose as described at ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"https://docs.docker.com/engine/install/"})," and ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"https://docs.docker.com/compose/install/"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"configure-docker",children:"Configure Docker"}),"\n",(0,s.jsx)(t.p,{children:"Add user to Docker group."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"sudo usermod -aG docker $USER"})}),"\n",(0,s.jsx)(t.h3,{id:"secure-docker",children:"Secure Docker"}),"\n",(0,s.jsxs)(t.p,{children:["We strongly recommend to not run the container without any additional hardening measures. To do so please review the respective ",(0,s.jsx)(t.a,{href:"https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html",children:"OWASP Cheatsheet"})," and apply appropriate measures."]}),"\n",(0,s.jsx)(t.h2,{id:"preparing-yourself",children:"Preparing yourself"}),"\n",(0,s.jsx)(t.p,{children:"As a first step, you need to decide how many validators you would like to run, in order to be able to create the according number of key's and consequently also deposit the matching amount of ECS to the contract."}),"\n",(0,s.jsx)(t.p,{children:"To help with the decision, we have composed some basics to consider:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Hardware Power"})," - Per CPU Core your validator node will have, you can run approximatel 350 validators."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Staking"})," - Per validator you're running, you have to stake 256 ECS to the deposit contract. Pls take into consideration some gas fee!"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Once you have that numbers, you can start setting up your node with one of the following options"}),"\n",(0,s.jsx)(t.h2,{id:"setup-with-script",children:"Setup with script"}),"\n",(0,s.jsxs)(t.p,{children:["The SCE provides a ready made setup and management script for validators. This script can be donwloaded ",(0,s.jsx)(t.a,{href:"https://dl.ecredits.com/scripts/ecredits.sh",children:"here"})," and will work in the ",(0,s.jsx)(t.code,{children:"/var/lib/esync/mainnet"})," or ",(0,s.jsx)(t.code,{children:"/var/lib/esync/testnet"})," folders. So please make sure they are not yet used and the disk they are on has sufficient space to hold the chain. Ideally the chain is on a separate partition than your root folder."]}),"\n",(0,s.jsx)(t.h3,{id:"installation-and-execution",children:"Installation and execution"}),"\n",(0,s.jsxs)(t.p,{children:["To install the script, just download it to your ",(0,s.jsx)(t.code,{children:"/usr/local/bin/"})," directory and apply execution permission to it."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'sudo wget "https://dl.ecredits.com/scripts/ecredits.sh" -O /usr/local/bin/esync\nsudo chmod ugo+x /usr/local/bin/esync\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Now, when you launch the script with the ",(0,s.jsx)(t.code,{children:"esync"})," command, it will lead you through the initial setup of your node."]}),"\n",(0,s.jsxs)(t.p,{children:["If you wish to setup a testnet node, just start it with ",(0,s.jsx)(t.code,{children:"esync testnet"})," everytime you want to work with your testnet node."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"The script supports the initial generation of keys and their import. If you want to add keys later, you need to do it manually as described below!\nIf you haven't created any keys when setting up the node, you can just stop the node and restart it. The start assistant will then provide the option to generate and stake keys."})}),"\n",(0,s.jsx)(t.h2,{id:"manual-setup",children:"Manual setup"}),"\n",(0,s.jsx)(t.p,{children:"If you don't want to use our setup script, you can also do the setup steps manually as described below."}),"\n",(0,s.jsx)(t.h3,{id:"create-directory-for-the-validator",children:"Create directory for the validator"}),"\n",(0,s.jsx)(t.p,{children:"Create a directory for storing all the validators files and the chain. This directory can be a subdirectory on the same physical OS device or (better) a volume on a separate disk. This directory will be used as working directory for the whole process."}),"\n",(0,s.jsxs)(t.p,{children:["Store the directory path in a variable for later use. The recommended path is ",(0,s.jsx)(t.code,{children:"/var/lib/esync/mainnet"}),", but feel free to use whatever fits best for you:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"datadir='/var/lib/esync/mainnet'\nmkdir -p $datadir/datadir-eth2-validator\n"})}),"\n",(0,s.jsx)(t.h3,{id:"manual-key-generation-and-staking",children:"Manual key generation and staking"}),"\n",(0,s.jsxs)(t.p,{children:["In order to generate only the key's and stake for them, we provide a customized staking-deposit-cli ",(0,s.jsx)(t.a,{href:"https://hub.docker.com/r/ecredits/staking-deposit-cli",children:"docker image"})," that can handle key generation and deposit for you if you wish. Nevertheless, it's not mandatary to use it, so you can generate and deposit manually if you wish."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Please make sure to backup the seed phrase that is used to generate your key's and ideally also the keystore files and deposit_data-*.json that have been generated by the tool!"})}),"\n",(0,s.jsx)(t.h4,{id:"logging",children:"Logging"}),"\n",(0,s.jsx)(t.p,{children:"The script itself will generate 2 logfiles for the staking."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"process_log_<timestamp> - This log is written while processing the deposits and can be used to review the last operation in case of a crash"}),"\n",(0,s.jsx)(t.li,{children:"deposit_log.json - This file is written after all keys have been processed and holds the final state of the transactions. This file will also be used to restart the staking process if necessary in order to skip already processed keys and just pick up the ones that are still pending."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The deposit_log.json file will be backed up with a timestamp if you reprocess an existing one with the ",(0,s.jsx)(t.code,{children:"stakingonly"})," flag, so you can follow the progress if you need multiple runs."]}),"\n",(0,s.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"Please be aware that this image will always create a new mnemonic, new key's and will try to deposit for those created keys if you run it without the stakingonly flag!\nIf you don't want to do the deposits via the script, just don't provide funds to the temporary account, which will end the process."})}),"\n",(0,s.jsxs)(t.p,{children:["The image can be run with the following command and will work in a folder called ",(0,s.jsx)(t.code,{children:"gened"})," below your current working directory."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'    # Key generation and staking on Mainnet\n    docker run --rm -it -v ${pwd}/gened:/gened ecredits/staking-deposit-cli:latest -c "node /setup/eth2_setup_node.js mainnet"\n\n    # Staking only on mainnet\n    docker run --rm -it -v ${pwd}/gened:/gened ecredits/staking-deposit-cli:latest -c "node /setup/eth2_setup_node.js mainnet stakingonly"\n\n    # Key generation and staking on Testnet\n    docker run --rm -it -v ${pwd}/gened:/gened ecredits/staking-deposit-cli:latest -c "node /setup/eth2_setup_node.js testnet"\n\n    # Staking only on testnet\n    docker run --rm -it -v ${pwd}/gened:/gened ecredits/staking-deposit-cli:latest -c "node /setup/eth2_setup_node.js testnet stakingonly"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["When using the ",(0,s.jsx)(t.code,{children:"stakingonly"})," flag, the script will work based on the ",(0,s.jsx)(t.code,{children:"deposit_data-*"})," file that must be located in the ",(0,s.jsx)(t.code,{children:"${pwd}/gened/validator_keys"})," if you are working with the commands above.",(0,s.jsx)(t.br,{}),"\n","It will furthermore look for a ",(0,s.jsx)(t.code,{children:"deposit_log.json"})," file the is located in ",(0,s.jsx)(t.code,{children:"${pwd}/gened"}),". If it finds one, it will continue from the represented state. If not, it will process all keys again."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["Please make sure you're only reprocessing keys that are not staked yet! The script will let you know if it found a ",(0,s.jsx)(t.code,{children:"deposit_log.json"})," file or not! If it didn't find one, it will deposit again for all keys!"]})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"If you only want to use the script to generate the keys, just don't provide any funds to the temporary account. The script will then exit the process and you can continue to process your keys manually."})}),"\n",(0,s.jsx)(t.h4,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(t.p,{children:["If at some point you think your ",(0,s.jsx)(t.code,{children:"deposit_log.json"})," file is not representing the latest state, you can regenerate it based on the transactions on the contract.\nTo do so, export the transactions from the contract that fit the timeframe when you've staked your keys. You can generate a ",(0,s.jsx)(t.code,{children:".csv"})," from the block explorer with fitting filter criterias on the transactions of the deposit contract.\nThe script ",(0,s.jsx)(t.code,{children:"checkKeys.js"})," that can be found ",(0,s.jsx)(t.a,{href:"https://dl.ecredits.com/scripts/checkKeys.js",children:"here"})," will take the ",(0,s.jsx)(t.code,{children:"deposit_data-*"})," file and the generated ",(0,s.jsx)(t.code,{children:".csv"})," file as inputs. It will then check the status of the keys and regenerate a ",(0,s.jsx)(t.code,{children:"deposit_log.json"})," based on the actually staked keys in the transaction export. This generated file called ",(0,s.jsx)(t.code,{children:"generated_deposit_log.json"})," can then be renamed and put in place instead of the potentially corrupted one to continue the staking process.",(0,s.jsx)(t.br,{}),"\n","The script can be called like the following example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"node checkKeys.js <networkname> <path_to_deposit_data_file> <path_to_transactions_csv>\n\n# Example\nnode checkKeys-js testnet depositDataFile.json transactions.csv\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"networkname -> mainnet or testnet, depending on for which network you want to check the keys"}),"\n",(0,s.jsx)(t.li,{children:"path_to_deposit_data_file -> Path to the deposit data file that has been created during key creation for the keys that you want to check"}),"\n",(0,s.jsx)(t.li,{children:"path_to_transactions_csv -> Path to the transaction export of the deposit contract that you want to check against."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"staking",children:"Staking"}),"\n",(0,s.jsxs)(t.p,{children:["Once the key's are generated, you have to deposit 256 ECS to the contract for each public key that you just generated.\nYou can either do this manually, or you can use our customized ",(0,s.jsx)(t.a,{href:"https://hub.docker.com/r/ecredits/staking-deposit-cli",children:"staking-deposit-cli"})," image. It's usage is described ",(0,s.jsx)(t.a,{href:"./node_setup#manual-key-generation-and-staking",children:"here"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Deposit Contract Address for testnet:"}),"\n0x207f39fB03Ed083d2322410Ac9Ab4BA319921A8F"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Deposit Contract Address for mainnet:"}),"\n0x1C98eDf5027f4a6713f66BC643a1BA62f769843D"]}),"\n",(0,s.jsx)(t.p,{children:"If you want to do this yourself, below you can find an example java script that is handling the staking for all records in a deposit data file."}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"This code snipped can be used on your own risk! Please make sure you understand what it does and adapt accordingly where necessary."})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'const rpcProvider = \'https://rpc.tst.esync.network\';\n//const rpcProvider = \'https://rpc.ecredits.com\';\nconst provider = new ethers.JsonRpcProvider(rpcProvider);\nconst depositContractJSON = JSON.parse(fs.readFileSync(\'<path to the deposit contract json file>\'));\nconst DEPOSIT_AMOUNT = 256;\nlet depositContractAddress = "<deposit contract address>"\n\nlet stakingWallet = new ethers.Wallet(wallet.privateKey, provider);\nlet depositContract = new ethers.Contract(depositContractAddress, depositContractJSON.abi, stakingWallet);\n\nconst depositData = JSON.parse(fs.readFileSync(<path to deposit data file>));\n\nlet transactionStatis = {};\nlet pubkeyStatis = {};\nlet processedAccount = 0;\nfor(let i in depositData) {\n    const {\n        pubkey,\n        withdrawal_credentials,\n        signature,\n        deposit_data_root,\n    } = depositData[i];\n\n    processedAccount += 1;\n    pubkeyStatis[pubkey] = {state: "pending"};\n    console.log(\'+\',\'depositing to\', pubkey)\n    let hasError = false;\n    let tx = await depositContract.deposit(\n        \'0x\' + pubkey,\n        \'0x\' + withdrawal_credentials,\n        \'0x\' + signature,\n        \'0x\' + deposit_data_root,\n        {\n            value: ethers.parseUnits(DEPOSIT_AMOUNT.toString(), "ether"),\n            gasPrice: \'20000000000\',\n            gasLimit: \'200000\'\n        })\n        .catch((error) => {\n            pubkeyStatis[pubkey] = {state: "error", code: error.code, message: error.info.error.message};\n            hasError = true;\n        });\n    if(!hasError){\n        pubkeyStatis[pubkey] = {state: "sent", hash: tx.hash};\n        transactionStatis[tx.hash] = { hash: tx.hash, pubkey: pubkey, state: "sent"};\n        if(depositData.length == processedAccount)\n        {\n            let finalResult = await tx.wait();\n            if(finalResult.status == 1){\n                transactionStatis[finalResult.hash]["state"] = "mined";\n                pubkeyStatis[transactionStatis[finalResult.hash].pubkey]["state"] = "mined";\n            } else {\n                pubkeyStatis[pubkey] = {state: "error", message: "Receipe return status != 1."};\n            }\n        } \n        else {\n            tx.wait()\n                .then((successResult) => {\n                    if(successResult.status == 1){\n                        transactionStatis[successResult.hash]["state"] = "mined";\n                        pubkeyStatis[transactionStatis[successResult.hash].pubkey]["state"] = "mined";\n                    } else {\n                        pubkeyStatis[pubkey] = {state: "error", message: "Receipe return status != 1."};\n                    }\n                })\n                .catch((error) => {\n                    console.log(error);\n                    console.log(error.code);\n                    console.log(error.info.error.message);\n                });\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"create-password-file",children:"Create password file"}),"\n",(0,s.jsx)(t.p,{children:"In order to unlock the wallet that holds your key's, you have to source the password as file into the docker container. You can create the file at the exepcted location of our provided docker-compose file with the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"echo <password> | sudo tee /etc/config/password > /dev/null\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Please make sure that the permissions on the file are as restrictive as possible, to protect your key!"})}),"\n",(0,s.jsx)(t.h3,{id:"import-wallet",children:"Import wallet"}),"\n",(0,s.jsx)(t.p,{children:"To import your generated key's you can run the following command. Please make sure to mount the correct directories into the container."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'docker run --rm -it -v "$datadir/gened/validator_keys":/keys -v "$datadir/datadir-eth2-validator":/root/.lighthouse -v "$passwordpath":/password.cfg --name validatorimport ecredits/lighthouse:latest lighthouse --network $network account validator import --datadir /root/.lighthouse --directory /keys --reuse-password --password-file /password.cfg\n\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$datadir/gened/validator_keys"})," points to the directory that holds the the keys."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$datadir/datadir-eth2-validator"})," points to the datadir of the validator."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'$passwordpath":/password.cfg'})," points to the password file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$network"})," should be the same docker network as your beacon node is in."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"start-nodes",children:"Start nodes"}),"\n",(0,s.jsxs)(t.p,{children:["Once this is done, you can now start the node with our provided ",(0,s.jsx)(t.a,{href:"https://raw.githubusercontent.com/eCredits/docs/master/static/files/node-setup/validator.mainnet.docker-compose.yaml",children:"docker-compose"})," files.",(0,s.jsx)(t.br,{}),"\n","In order to use this docker-compose file without our script, you need to update it according to your needs.\nThe following settings must be updated and checked:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Set the --miner.etherbase account to an account that you control"}),"\n",(0,s.jsx)(t.li,{children:"Set the --suggested-fee-recipient account to an account that you control both for the beacon and validator node"}),"\n",(0,s.jsx)(t.li,{children:"Set the --nat extip: setting to your external IP address"}),"\n",(0,s.jsx)(t.li,{children:"Double check the mounted directories and adapt where necessary"}),"\n",(0,s.jsx)(t.li,{children:"Double check the ports used and adapt where necessary"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var s=n(1504);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);