function addNet(chainId, chainName, rpcUrl, explorerUrl) {
    if (typeof window.ethereum == 'undefined'  || !ethereum.isMetaMask) {
        alert('MetaMask is not installed!');
    } else if (window.ethereum.chainId == chainId) {
        alert("You are already connected to the eCredits network")
    } else {
        const chain = {
            chainId: "0x" + Number(chainId).toString(16),
            chainName: chainName,
            nativeCurrency: {
                name: "eCredits",
                symbol: "ECS",
                decimals: 18,
            },
            rpcUrls: [rpcUrl],
            blockExplorerUrls: [explorerUrl],
            iconUrls: ["assets/favicon-32x32.png"]
        };
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [chain],
        }).catch((error) => {
            console.log(error);
            alert("An error has occurred. Please make sure MetaMask is ready to go. See error in log");
        });
    }
}

function addMainNet() {
    addNet(63000, "eSync Network", "https://rpc.esync.network/", "https://explorer.esync.network");
}

function addTestNet() {
    addNet(63001, "eSync Network TestNet", "https://rpc.tst.esync.network", "https://explorer.tst.esync.network");
}
