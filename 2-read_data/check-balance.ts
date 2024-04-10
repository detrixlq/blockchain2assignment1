import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { error } from "console";

async function checkBalance(){
    const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}


try {

    const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);
    const balanceInLamports = await connection.getBalance(publicKey);  //challenge

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
console.log(
    `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
  );
} catch {
    throw new Error("The address is incorrect")
}



}

checkBalance();

