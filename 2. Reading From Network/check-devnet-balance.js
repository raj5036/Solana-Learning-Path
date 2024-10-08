const { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } = require("@solana/web3.js")

const publicKey = new PublicKey("5tvgTybF31BWqZyjed9Qz6B4hcA92Vc7zALuhyv24W76");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const getBalance = async () => {
	if (!PublicKey.isOnCurve(publicKey.toBuffer())) {
		console.log("Invalid address provided");
		return
	}
	return connection.getBalance(publicKey)
		.then(balance => {
			console.log(`The balance of the account is ${balance} lamports`);
			console.log(`The balance of the account is ${balance / LAMPORTS_PER_SOL} SOL`);
			return balance
		})
		.catch(err => {
			console.log(err);
		});
}

getBalance()