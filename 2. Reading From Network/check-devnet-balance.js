const { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } = require("@solana/web3.js")


const MAINNET_BETA_ENDPOINT="https://api.mainnet-beta.solana.com";
const DEVNET_ENDPOINT="https://api.devnet.solana.com";

const MAINNET_ACCOUNTS = [
	{domain: "toly.sol", address: "86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY"},
	{domain: "shaq.sol", address: "gacMrsrxNisAhCfgsUAVbwmTC3w9nJB6NychLAnTQFv"},
	{domain: "mccann.sol", address: "JCZjJcmuWidrj5DwuJBxwqHx7zRfiBAp6nCLq3zYmBxd"},
]

const connection = new Connection(MAINNET_BETA_ENDPOINT, "confirmed");

const getBalance = async (address) => {
	const publicKey = new PublicKey(address.address);

	if (!PublicKey.isOnCurve(publicKey.toBuffer())) {
		console.log("Invalid address provided");
		return
	}
	return connection.getBalance(publicKey)
		.then(balance => {
			console.log(`The balance of the account ${address.domain} is ${balance} lamports or ${balance / LAMPORTS_PER_SOL} SOL`);
			return balance
		})
		.catch(err => {
			console.log(err);
		});
}

MAINNET_ACCOUNTS.forEach(getBalance)