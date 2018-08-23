if (typeof web3 !== 'undefined') {
	//if using MetaMask or Mist, provider is automatically injected 
	web3 = new Web3(web3.currentProvider);
} else {
	//local: http://localhost:8545, infura: https://ropsten.infura.io/EP86cQtE0ra0dK0nNPUF
	web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/EP86cQtE0ra0dK0nNPUF"));
	$("#mm-supported").html('Web3 not supported. Please install MetaMask.');
	//TODO: handle MM not logged in, transaction waiting for approval/pending/rejected
}

web3.eth.defaultAccount = web3.eth.accounts[0]; //using account from testrpc (creates 10) OR MM (0=current)

var SmartInsTechContract = web3.eth.contract(smartInsTechABI);
var SmartInsTech = SmartInsTechContract.at(smartInsTechAddress);
console.log(SmartInsTech);