// your config code
import algosdk from "algosdk"

const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";
const mnemonic: string =
"whale talent bench supply patch silly position capable negative modify already mean like during scare forget armor copper indoor menu fancy hover dirt ability chuckle";
export function getClient(): algosdk.Algodv2 {
let client = new algosdk.Algodv2(algodToken, server, port);
return client;
}
export function getAccount(): algosdk.Account {
let account = algosdk.mnemonicToSecretKey(mnemonic);
return account;
}