import {
  createSolanaRpc,
  devnet,
  address,
} from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

// Paste the address you funded via the faucet here:
const fundedAddress = address("GwtgGEA5xghPUgdxyif3KNaNYhWViEwfrrzbFnT94zHL");

const { value: balance } = await rpc.getBalance(fundedAddress).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance of ${fundedAddress}: ${balanceInSol} SOL`);
