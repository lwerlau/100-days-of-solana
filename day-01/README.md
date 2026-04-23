# Day 1: Generate a Keypair and Airdrop Devnet SOL

Created a Solana keypair programmatically and funded it with test SOL via the devnet faucet.

## What I built

A Node.js script that generates a fresh keypair using `@solana/kit`, prints the public address, and (in a follow-up run with a hardcoded address) queries the balance from a devnet RPC endpoint.

## Concepts

- A Solana keypair is your on-chain identity — the public key is your address, the private key is your signature authority.
- Devnet is a free test network with fake SOL for development.
- Balances are stored in **lamports** (1 SOL = 1,000,000,000 lamports).

## Running it

```bash
cd day-01
npm install
node create-wallet.mjs
```

## Files

- `create-wallet.mjs` — generates a keypair and queries a balance
