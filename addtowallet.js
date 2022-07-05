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
        alert("Refresh the page if chains are not available");
        return 0;
      });
  }
}

function addChains() {
  const pylonsDevNetConfig = {
    rpc: "http://35.188.86.73:36657",
    rest: "http://35.188.86.73:2317",
    chainId: "pylons",
    chainName: "PYLONS",
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

  myFunction(pylonsDevNetConfig);
}
