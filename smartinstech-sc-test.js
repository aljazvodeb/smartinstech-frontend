var smartInsTechAddress = '0xd9111c88e1c1b5ec097d74d19f1f19659e131410';
var smartInsTechABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "bytes16"
			},
			{
				"name": "_linkToWS",
				"type": "bytes16"
			},
			{
				"name": "_TRR",
				"type": "bytes16"
			},
			{
				"name": "_ethAddress",
				"type": "address"
			},
			{
				"name": "_insurancePrice",
				"type": "uint256"
			},
			{
				"name": "_maxPayment",
				"type": "uint256"
			}
		],
		"name": "createAirline",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_firstName",
				"type": "bytes16"
			},
			{
				"name": "_lastName",
				"type": "bytes16"
			},
			{
				"name": "_email",
				"type": "bytes16"
			},
			{
				"name": "_sAddress",
				"type": "bytes16"
			},
			{
				"name": "_city",
				"type": "bytes16"
			},
			{
				"name": "_postCode",
				"type": "bytes16"
			},
			{
				"name": "_country",
				"type": "bytes16"
			},
			{
				"name": "_TRR",
				"type": "bytes16"
			}
		],
		"name": "createUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "userId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "firstName",
				"type": "bytes16"
			},
			{
				"indexed": false,
				"name": "lastName",
				"type": "bytes16"
			}
		],
		"name": "NewUser",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "airlineId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "name",
				"type": "bytes16"
			}
		],
		"name": "NewAirline",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "airlines",
		"outputs": [
			{
				"name": "name",
				"type": "bytes16"
			},
			{
				"name": "linkToWS",
				"type": "bytes16"
			},
			{
				"name": "TRR",
				"type": "bytes16"
			},
			{
				"name": "ethAddress",
				"type": "address"
			},
			{
				"name": "insurancePrice",
				"type": "uint256"
			},
			{
				"name": "maxPayment",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "users",
		"outputs": [
			{
				"name": "firstName",
				"type": "bytes16"
			},
			{
				"name": "lastName",
				"type": "bytes16"
			},
			{
				"name": "email",
				"type": "bytes16"
			},
			{
				"name": "sAddress",
				"type": "bytes16"
			},
			{
				"name": "city",
				"type": "bytes16"
			},
			{
				"name": "postCode",
				"type": "bytes16"
			},
			{
				"name": "country",
				"type": "bytes16"
			},
			{
				"name": "TRR",
				"type": "bytes16"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];