import DIYTokenABI from './ABI/DIYToken.json';
import { envVars } from './env';
export const DIYTOKEN_ADDRESS = envVars.DIYTOKEN_ADDRESS;
export const DIYFACTORY_ADDRESS = envVars.DIYFACTORY_ADDRESS;

export const ETHCOIN_DECIMALS = 18;
export const DIYTOKEN_DECIMALS = 18;

export type Asset = 'ETH' | 'DIY';

export const ASSET_LIST: {
  [key in Asset]: {
    address: string;
    abi: any;
    decimals: number;
  };
} = {
  DIY: {
    abi: DIYTokenABI,
    address: DIYTOKEN_ADDRESS,
    decimals: DIYTOKEN_DECIMALS,
  },
  ETH: {
    abi: null,
    address: '',
    decimals: ETHCOIN_DECIMALS,
  },
};
