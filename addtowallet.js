function myFunction(config) {
  if (!window.keplr) {
    alert("Keplr wallet not found");
  } else {
    window.keplr
      .experimentalSuggestChain(config)
      .then(() => {
        alert(`${config.chainName} was added`);
        return 1;
      })
      .catch((err) => {
        console.log(err);
        alert("Refresh the page if both chains are not available");
        return 0;
      });
  }
}

function addChains() {
  const pylonsConfig = {
    rpc: "http://46.166.140.172:26657",
    rest: "http://46.166.140.172:1317",
    chainId: "pylons-testnet-3",
    chainName: "pylons-testnet-3",
    stakeCurrency: {
      coinDenom: "Bedrock",
      coinMinimalDenom: "ubedrock",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "pylo",
      bech32PrefixAccPub: "pylo" + "pub",
      bech32PrefixValAddr: "pylo" + "valoper",
      bech32PrefixValPub: "pylo" + "valoperpub",
      bech32PrefixConsAddr: "pylo" + "valcons",
      bech32PrefixConsPub: "pylo" + "valconspub",
    },
    currencies: [
      {
        coinDenom: "Bedrock",
        coinMinimalDenom: "ubedrock",
        coinDecimals: 6,
      },
      {
        coinDenom: "Pylon",
        coinMinimalDenom: "upylon",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "Pylon",
        coinMinimalDenom: "upylon",
        coinDecimals: 6,
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/juno/txs/{txHash}",
  };

  const AxelarTestNetConfig = {
    rpc: "https://axelar-lisbon-rpc.allthatnode.com:26657",
    rest: "https://axelar-lisbon-rpc.allthatnode.com:1317",
    chainId: "axelar-testnet-lisbon-3",
    chainName: "Axelar-Lisbon",
    stakeCurrency: {
      coinDenom: "AXL",
      coinMinimalDenom: "uaxl",
      coinDecimals: 5,
    },
    bip44: { coinType: 118 },
    bech32Config: {
      bech32PrefixAccAddr: "axelar",
      bech32PrefixAccPub: "axelar" + "pub",
      bech32PrefixValAddr: "axelar" + "valoper",
      bech32PrefixValPub: "axelar" + "valoperpub",
      bech32PrefixConsAddr: "axelar" + "valcons",
      bech32PrefixConsPub: "axelar" + "valconspub",
    },
    currencies: [
      {
        coinDenom: "AXL",
        coinMinimalDenom: "uaxl",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      { coinDenom: "AXL", coinMinimalDenom: "uaxl", coinDecimals: 6 },
    ],
    gasPriceStep: { low: 0.05, average: 0.125, high: 0.2 },
    features: ["stargate", "no-legacy-stdTx", "ibc-transfer"],
  };

  myFunction(pylonsConfig);
  myFunction(AxelarTestNetConfig);
}
