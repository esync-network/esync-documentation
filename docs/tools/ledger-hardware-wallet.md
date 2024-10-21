---
sidebar_position: 3
---

# Ledger Hardware Wallet

There is currently no app available for Ledger devices, but you can use the Ethereum app with Metamask to connect
to the eSync Network. The usage of Metamask and Ledger hardware wallets is described at https://metmask.io or
https://www.ledger.com/metamask.

To use your Ledger device with Metamask and eSync Network, please follow these steps:

## Prerequisites

1. Update Ledger Live App
2. Update the Firmware of your Ledger device
3. Update the Ethereum app
4. Install Metamask
5. Connect Metamask with eCredits network (see [Metamask](/docs/tools/))

## Connect Hardware Wallet

1. Make sure that **Ledger Live App** is **closed**.
2. Open Ethereum App **before** clicking the "Connect Hardware Wallet" button in Metamask
3. Click "Connect Hardware Wallet" in Metamask

If you have any **issues**:

1. make sure that "WebHID" is set as preferred ledger connection type (Settings > Advanced)
2. check https://support.ledger.com/hc/en-us/articles/360020871157-Solving-a-MetaMask-connection-issue for more information.

## Blind Signing

When interacting with smart contracts, e.g. multisig wallets, blind signing must be enabled:

- Open Ethereum App in your Ledger device, go to settings and enable blind signing
