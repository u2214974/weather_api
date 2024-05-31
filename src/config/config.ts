// your config code
import algosdk from "algosdk"

const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";
const mnemonic: string =
"leader index insane edge rocket kangaroo dress crush liquid guide develop doctor anger gun ridge trick pulse club symbol silk crash feel accident abandon slight";
export function getClient(): algosdk.Algodv2 {
let client = new algosdk.Algodv2(algodToken, server, port);
return client;
}
export function getAccount(): algosdk.Account {
let account = algosdk.mnemonicToSecretKey(mnemonic);
return account;
}