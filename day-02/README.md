# Day 2: Persistent Wallet

Solved the Day 1 problem of losing your keypair every run by saving it to disk and reloading it on subsequent runs.

## What I built

A Node.js script that checks for an existing `wallet.json` on disk — if one exists, it loads the saved keypair; if not, it generates a new one and saves it. This way the same wallet persists across script executions, unlike Day 1 where every run produced a fresh address.

## Concepts

- File I/O for keypair persistence.
- Separation of public address (safe to share) from private key bytes (must stay local).
- Why `wallet.json` should **never** be committed to version control.

## Running it

```bash
cd day-02
npm install
node persistent-wallet.mjs
```

On first run it generates and saves a wallet. Subsequent runs reuse the saved wallet.

## Files

- `persistent-wallet.mjs` — loads or generates a keypair
- `wallet.json` — saved keypair (gitignored, never committed)
