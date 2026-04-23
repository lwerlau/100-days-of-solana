# Day 3: Understanding SOL and Lamports

Learned about Solana's native token (SOL) and its smallest unit (lamports), and why the runtime uses integer lamports instead of floating-point SOL for on-chain math.

## Key concepts

- **1 SOL = 1,000,000,000 lamports** (10⁹)
- Lamports are always integers — floating-point math breaks deterministic consensus
- Wallet UIs show SOL; RPC calls, fees, and on-chain programs use lamports
- Named after Leslie Lamport, pioneer of distributed systems

## What I did

Queried my devnet wallet balance in both units via the Solana CLI:

```bash
$ solana balance --url devnet
0.5 SOL

$ solana balance --url devnet --lamports
500000000 lamports
```

## The math
```
500,000,000 lamports ÷ 1,000,000,000 = 0.5 SOL
0.5 SOL × 1,000,000,000 = 500,000,000 lamports
```
