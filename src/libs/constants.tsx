// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { SUPPORTED_CHAINS, Token } from '@uniswap/sdk-core'

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  '0x1F98431c8aD98523631AE4a59f267346ea31F984'
export const QUOTER_CONTRACT_ADDRESS =
  '0x61fFE014bA17989E743c5F6cB21bF9697530B21e'
export const SWAP_ROUTER_ADDRESS = '0xE592427A0AEce92De3Edee1F18E0157C05861564'

export const WETH_CONTRACT_ADDRESS =
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

// Currencies and Tokens

export const WETH_TOKEN = new Token(
  SUPPORTED_CHAINS[0],
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  18,
  'WETH',
  'Wrapped Ether'
)

export const USDC_TOKEN = new Token(
  SUPPORTED_CHAINS[0],
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  6,
  'USDC',
  'USDC'
)
export const ZARP_TOKEN = new Token(
  SUPPORTED_CHAINS[0],
  '0xb755506531786C8aC63B756BaB1ac387bACB0C04',
  18,
  'ZARP',
  'ZARP Stablecoin'
)
export const ENS_TOKEN = new Token(
  SUPPORTED_CHAINS[0],
  '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
  18,
  'ENS',
  'Ethereum Name Service'
)
export const GOERLI_TOKEN = new Token(
  SUPPORTED_CHAINS[0],
  '0xdD69DB25F6D620A7baD3023c5d32761D353D3De9',
  18,
  'GOERLI',
  'Goerli ETH'
)

// ABI's

export const ERC20_ABI = [
  // Read-Only Functions
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function fee() view returns (uint256)',

  // Authenticated Functions
  'function transfer(address to, uint amount) returns (bool)',
  'function approve(address _spender, uint256 _value) returns (bool)',

  // Events
  'event Transfer(address indexed from, address indexed to, uint amount)',
];


export const WETH_ABI = [
  // Wrap ETH
  'function deposit() payable',

  // Unwrap ETH
  'function withdraw(uint wad) public',
]

// Transactions
export const Tokens = [USDC_TOKEN, WETH_TOKEN, ZARP_TOKEN, ENS_TOKEN, GOERLI_TOKEN ];
export const MAX_FEE_PER_GAS = 100000000000
export const MAX_PRIORITY_FEE_PER_GAS = 100000000000
export const TOKEN_AMOUNT_TO_APPROVE_FOR_TRANSFER = 2000000000000000000