---
sidebar_position: 7
---

# Log Messages

This section describes some of the log messages of the validator and what they mean:
## Geth node
- `Imported new potential chain segment`: New blocks were downloaded from the network and added to the blockchain.

## Beacon node
- `New block received`: a block was received from another node.
- `Synced`: the beacon client has received all the blocks of the blockchain.


## Validator node
- `Waiting for deposit to be observed by beacon node`: Your node has keys imported for which no deposits have been made to the deposit contract.
- `Submitted new attestations`: node sent the attestation (validation result) of a particular block to the network.
- `Connected to beacon node(s)`: Shows the status of the connected beacon nodes
- `Unable to publish signed contributions and proofs`: Indicates a connection issue to the beacon node