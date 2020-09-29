import { ethers } from 'ethers';
import { CustomProvider } from 'eraswap-sdk';
import { Erc20, PlasmaManager, FundsManagerETH } from 'eraswap-sdk/dist/typechain/ETH';
import { ReversePlasma, FundsManagerESN } from 'eraswap-sdk/dist/typechain/ESN';

declare global {
  interface Window {
    providerETH: ethers.providers.BaseProvider;
    providerESN: CustomProvider;
    wallet: ethers.Wallet | undefined;
    esInstanceETH: Erc20;
    plasmaManagerInstanceETH: PlasmaManager;
    fundsManagerInstanceETH: FundsManagerETH;
    reversePlasmaInstanceESN: ReversePlasma;
    fundsManagerInstanceESN: FundsManagerESN;
    ethereum: ethers.providers.ExternalProvider;
  }
}
