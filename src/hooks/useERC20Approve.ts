import { BigNumber, constants } from 'ethers';
import { useCallback, useEffect, useState } from 'react';

import { Asset, ASSET_LIST, DIYFACTORY_ADDRESS } from '../constants/contracts';
import { triggerToast } from '../utils';
import { useContract } from './useContract';
import { useIsMounted } from './useIsMounted';
import { useWeb3Provider } from './useWeb3Provider';

export const useERC20Approve = (asset: Asset) => {
  const erc20Contract = useContract(
    ASSET_LIST[asset].address,
    ASSET_LIST[asset].abi,
    true
  );
  const { account } = useWeb3Provider();
  const [isApproved, setIsApproved] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const isMounted = useIsMounted();

  const approve = useCallback(() => {
    if (erc20Contract) {
      setIsApproving(true);
      erc20Contract
        .approve(DIYFACTORY_ADDRESS, constants.MaxUint256)
        .then((txPreHash: any) => txPreHash.wait())
        .then((txHash: any) => {
          if (isMounted.current) {
            setIsApproved(true);
            triggerToast('SUCCESS');
          }
        })
        .catch((err: any) => {
          triggerToast('ERROR');
        })
        .then(() => {
          if (isMounted.current) {
            setIsApproving(false);
          }
        });
    }
  }, [erc20Contract, isMounted]);

  useEffect(() => {
    if (account && erc20Contract) {
      erc20Contract
        .allowance(account, DIYFACTORY_ADDRESS)
        .then((value: BigNumber) => {
          if (!value.isZero() && isMounted.current) {
            setIsApproved(true);
          } else {
            setIsApproved(false);
          }
        });
    }
  }, [account, erc20Contract, isMounted]);

  return {
    approve,
    isApproved,
    isApproving,
  };
};
