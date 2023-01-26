import { parseEther } from 'ethers/lib/utils';
import { useCallback, useContext, useState } from 'react';

import DIYFactoryABI from '../constants/ABI/DIYFactory.json';
import { Asset, DIYFACTORY_ADDRESS } from '../constants/contracts';
import { UserContext } from '../contexts/UserContext';
import { numberToFloat,triggerToast } from '../utils';
import { useContract } from './useContract';
import { useIsMounted } from './useIsMounted';
import { usePresaleInfo } from './usePresaleInfo';

export const usePresaleDeposit = () => {
  const presaleContract = useContract(DIYFACTORY_ADDRESS, DIYFactoryABI, true);
  const [isDepositing, setIsDepositing] = useState(false);
  const isMounted = useIsMounted();
  const { setCurrencyAmount, setIsTransactionModalOpened } = useContext(UserContext);
  const presaleInfo = usePresaleInfo();

  const deposit = useCallback(
    (amount: number, asset: Asset) => {
      if (presaleContract && presaleInfo.buyRate) {
        let coinAmount = asset === 'ETH' ? amount : amount / presaleInfo.buyRate;
        let tokenAmount = coinAmount * presaleInfo.buyRate;
        setIsDepositing(true);

        const coinBalance = parseEther(numberToFloat(coinAmount));
        const tokenBalance = parseEther(numberToFloat(tokenAmount));

        presaleContract
          .buyToken(tokenBalance, 0, { value: coinBalance })
          .then((txPreHash: any) => txPreHash.wait())
          .then(async (txHash: any) => {
            if (isMounted.current) {
              triggerToast('SUCCESS');
              setIsTransactionModalOpened(true);
              setCurrencyAmount('');
            }
          })
          .catch((err: any) => {
            console.error(err);
            triggerToast('ERROR');
          })
          .then(() => {
            if (isMounted.current) {
              setIsDepositing(false);
            }
          });
      }
    },
    [presaleInfo, presaleContract, isMounted, setIsTransactionModalOpened, setCurrencyAmount]
  );

  return {
    deposit,
    isDepositing,
  };
};
