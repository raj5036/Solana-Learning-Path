const { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } = require("@solana/web3.js");

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');

const getBalance = async () => {
	return connection.getBalance(address)
		.then(balance => {
			console.log(`The balance of the account at ${address} is ${balance} lamports`);
			console.log(`The balance of the account at ${address} is ${balance / LAMPORTS_PER_SOL} SOL`);
			return balance
		})
		.catch(err => {
			console.log(err);
		});
}

getBalance();
// console.log(`The balance of the account at ${address} is ${getBalance()} lamports`); 
console.log(`✅ Finished!`)