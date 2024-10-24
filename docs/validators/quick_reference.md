---
sidebar_position: 6
---

# Quick Command Reference

## Start the node

```bash
docker-compose -f validator.docker-compose.yaml up -d
```

## Stop the node

```bash
# 1. kill geth and beacon client (proper shutdown)
docker exec -it mainnet-geth-1 pkill geth
docker exec -it mainnet-beacon-1 pkill lighthouse

# 2. shutdown the container
docker-compose -f validator.docker-compose.yaml down
```

## Restart the node

```bash
# 1. kill geth (proper shutdown)
docker exec -it mainnet-geth-1 pkill geth
docker exec -it mainnet-beacon-1 pkill lighthouse

# 2. restart the container
docker-compose -f validator.docker-compose.yaml restart
```

## Show Logs

```bash
docker logs --tail 10 -f mainnet-geth-1
docker logs --tail 10 -f mainnet-beacon-1
docker logs --tail 10 -f mainnet-validator-1
```

## Connect to Geth

```bash
docker exec -it mainnet-geth-1 geth attach
```

## Clean/Reset/Reinitialize the eth1 database

```bash
DATADIR=/var/lib/esync/mainnet
docker exec -it mainnet-geth-1 pkill geth
docker exec -it mainnet-beacon-1 pkill lighthouse
docker-compose -f $DATADIR/validator.docker-compose.yaml down

docker run -it -v $DATADIR/datadir-eth1:/root/.ethereum -e POD_NAME --entrypoint geth ecredits/node:latest removedb

docker-compose -f $DATADIR/validator.docker-compose.yaml up -d
```

## Clean/Reset/Reinitialize the eth2/beacon chain database

```bash
DATADIR=/var/lib/esync/mainnet
docker exec -it mainnet-beacon-1 pkill lighthouse
docker exec -it mainnet-validator-1 pkill lighthouse

rm -R $DATADIR/datadir-eth2

docker-compose -f $DATADIR/validator.docker-compose.yaml up -d
```

## Import Private Key
```bash
docker run --rm -it -v "$datadir/gened/validator_keys":/keys -v "$datadir/datadir-eth2-validator":/root/.lighthouse -v "$passwordpath":/password.cfg --name validatorimport ecredits/lighthouse:latest lighthouse --network $network account validator import --datadir /root/.lighthouse --directory /keys --reuse-password --password-file /password.cfg

```

- ```$datadir/gened/validator_keys``` points to the directory that holds the the keys.
- ```$datadir/datadir-eth2-validator``` points to the datadir of the validator.
- ```$passwordpath":/password.cfg``` points to the password file.
- ```$network``` should be the same docker network as your beacon node is in.