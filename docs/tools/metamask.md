---
id: metamask
title: Metamask
sidebar_position: 2
---

<head>
<script src="/js/metamask.js"></script>
<title>Metamask</title>
</head>

eSync Network is fully compatible with Ethereum and therefore, also Metamask can be used as wallet. The following table
contains the required settings as well as an EIP-3085 compatible add button, which allows you, to add eSync Network (ECS).
to Metamask.

## Metamask Settings

<table>
<thead>
<tr><th align="left" width="250">Setting</th><th width="250">eSync Network MainNet</th><th width="250">eSync Network TestNet</th></tr>
</thead>
<tbody>
<tr><th align="left">RPC URL</th><td>https://rpc.esync.network</td><td>https://rpc.tst.esync.network</td></tr>
<tr><th align="left">ChainID</th><td>63000</td><td>63002</td></tr>
<tr><th align="left">Symbol</th><td>ECS</td><td>ECS</td></tr>
<tr><th align="left">Block Explorer URL</th><td><a href="https://explorer.esync.network">https://explorer.esync.network</a></td><td><a href="https://explorer.tst.esync.network">https://explorer.tst.esync.network</a></td></tr>
<tr><th align="left">Add to Metamask</th><td><button href="#" onClick={ () => addMainNet() }>Add eSync Network MainNet</button></td><td><button href="#" onClick={() => addTestNet()}>Add eSync Network TestNet</button></td></tr>
</tbody>
</table>
