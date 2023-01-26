export const IS_TESTNET = window.location.hostname === 'localhost' || window.location.hostname === 'dev.toolboxtoken.com';

const variables = {
  mainnet: {
    DIYFACTORY_ADDRESS: '0x7913F3563B452c3c51fa8821C4bB641C6d49C53F',
    DIYTOKEN_ADDRESS: '0x4B7ACAD40DEc7609386F8719e14a8ecCB32CDA89'
  },
  testnet: {
    DIYFACTORY_ADDRESS: '0x7423a1258d6748B0732aa9a66a211D2072F81216',
    DIYTOKEN_ADDRESS: '0x730bf82AC539E1D3F7bF7209a894B7e688277c60'
  }
}

export const envVars = IS_TESTNET ? variables.testnet : variables.mainnet;
