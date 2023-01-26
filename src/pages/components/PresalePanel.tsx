import 'twin.macro';

import { useCallback,useContext, useEffect,useMemo, useState } from 'react';

import iconKeySvg from '../../assets/svgs/whatare/icon-key.svg';
import iconMoneySvg from '../../assets/svgs/whatare/icon-money.svg';
import iconPeopleSvg from '../../assets/svgs/whatare/icon-people.svg';
import CurrencyInput from '../../components/CurrencyInput';
import Loader from '../../components/Loader';
import { Asset } from '../../constants/contracts';
import { UserContext } from '../../contexts/UserContext';
import {
  useERC20Balance,
  usePresaleDeposit,
  usePresaleInfo,
  useWeb3Provider,
} from '../../hooks';
import { addLeadingZeros,getNormalizedPriceString, triggerToast } from '../../utils';

const dayjs = require('dayjs');
var dayjsDuration = require('dayjs/plugin/duration')
dayjs.extend(dayjsDuration)

const PresalePanel = () => {
  const { currencyAmount, setCurrencyAmount, setIsWalletConnectOpened } =
  useContext(UserContext);
  const [asset, setAsset] = useState<Asset>('ETH');  
  const { active } = useWeb3Provider();  
  const [assetBalance, refreshAssetBalance] = useERC20Balance(asset);
  const presaleInfo = usePresaleInfo();
  const { deposit, isDepositing } = usePresaleDeposit();
  const [presaleDuration, setPresaleDuration] = useState<{
    days: number;
    hours: number;
    mins: number;
    secs: number;
  }>({ days: 0, hours: 0, mins: 0, secs: 0});
  
  const onAssetChange = (newAsset: Asset) => {
    if (asset !== newAsset) {
      setAsset(newAsset);
      setCurrencyAmount('');
    }
  };

  const isPresaleLive = useMemo<boolean>(
    () =>
      Boolean(
        presaleInfo.isSelling && presaleInfo.endDateTime &&
          presaleInfo.endDateTime.getTime() >= Date.now()
      ),
    [presaleInfo.isSelling, presaleInfo.endDateTime]
  );

  const isSoldOut = useMemo(
    () =>
      typeof presaleInfo.tokensRemained !== 'undefined' &&
      presaleInfo.tokensRemained < 1,
    [presaleInfo.tokensRemained]
  );
  
  const ctaBtn = useMemo(() => {
    const btnContent = isSoldOut ? (
      'Sold Out'
    ) : active ? (
      isPresaleLive ? (
        isDepositing ? (
          <div tw="flex items-center gap-2">
            <Loader />
            Depositing
          </div>
        ) : (
          'Buy'
        )
      ) : (
        'Sale Not Started'
      )
    ) : (
      'Connect Wallet'
    );

    return (
      <>
        <button
          disabled={
            isSoldOut || (active && (!currencyAmount || !isPresaleLive))
          }
          tw="min-w-[100px] px-[30px] py-[10px] w-[fit-content] bg-red-500 text-gray-50 rounded-full flex-1"
          onClick={() => {
            if (active) {
              if (!isDepositing && presaleInfo.coinsRemained && presaleInfo.buyRate && presaleInfo.ethAmount) {
                const amount = parseFloat(currencyAmount);
                const coinAmount = asset === 'ETH' ? amount : amount / presaleInfo.buyRate;
                // const tokenAmount = coinAmount * presaleInfo.buyRate;
                if (presaleInfo.ethAmount <= coinAmount)  {
                  triggerToast(
                    'INSUFFICIENT_BALANCE',
                    (
                      (presaleInfo.ethAmount)
                    ).toLocaleString()
                  );
                } else if (presaleInfo.coinsRemained < coinAmount) {
                  triggerToast(
                    'LIMIT_EXCEED',
                    (
                      (presaleInfo.tokensRemained ?? 0)
                    ).toLocaleString()
                  );
                } else  {
                  deposit(amount, asset);
                }
              }
            } else {
              setIsWalletConnectOpened(true);
            }
          }}
        >
          {btnContent}
        </button>
      </>
    );
  }, [
    active,
    asset,
    currencyAmount,
    deposit,
    isDepositing,
    isPresaleLive,
    isSoldOut,
    presaleInfo.ethAmount,
    presaleInfo.buyRate,
    presaleInfo.tokensRemained,
    presaleInfo.coinsRemained,
    setIsWalletConnectOpened,
  ]);

  const updatePresaleTime = useCallback(() => {
    const nowTime = dayjs()
    const endTime = dayjs(presaleInfo.endDateTime)
    const duration = dayjs.duration(endTime.diff(nowTime));
    setPresaleDuration({
      days: duration.days(),
      hours: duration.hours(),
      mins: duration.minutes(),
      secs: duration.seconds(),
    })
  }, [presaleInfo]);

  useEffect(() => {
    updatePresaleTime();
    const timer = setInterval(() => updatePresaleTime(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [updatePresaleTime]);

  return (
    <div tw="flex flex-col gap-16">
      <div tw="grid grid-cols-2 gap-6">
        <div tw="flex items-center gap-2">
          <div tw="w-[70px] h-[70px] border-[4px] border-[#E0E0E0] bg-white rounded-full flex items-center justify-center">
            <img alt={''} src={iconKeySvg} tw="pl-2 scale-75"/>
          </div>
          <div tw="flex flex-col">
            <span tw="font-generatorUltraBold text-2xl">20%</span>
            <span tw="text-base text-gray-300">Locked for 12 months</span>
          </div>
        </div>
        <div></div>
        <div tw="flex items-center gap-2">
          <div tw="w-[70px] h-[70px] border-[4px] border-[#E0E0E0] bg-white rounded-full flex items-center justify-center">
            <img alt={''} src={iconPeopleSvg} tw="scale-75"/>
          </div>
          <div tw="flex flex-col">
            <span tw="font-generatorUltraBold text-2xl">{presaleInfo.purchasedUsers}</span>
            <span tw="text-base text-gray-300">Participants</span>
          </div>
        </div>
        <div tw="flex items-center gap-2">
          <div tw="w-[70px] h-[70px] border-[4px] border-[#E0E0E0] bg-white rounded-full flex items-center justify-center">
            <img alt={''} src={iconMoneySvg} tw="scale-75"/>
          </div>
          <div tw="flex flex-col">
            <span tw="font-generatorUltraBold text-2xl">0%</span>
            <span tw="text-base text-gray-300">Tokenomics</span>
          </div>
        </div>              
      </div>
      <div tw="flex flex-col items-center max-w-[500px] bg-white p-8 gap-8 rounded-2xl">
        <p tw="font-generatorUltraBold text-2xl">Time left for presale, hurry up!</p>
        <div tw="flex justify-between w-full">
          <span tw="w-[80px] text-center text-gray-300">Days</span>
          <span tw="w-[80px] text-center text-gray-300">Hours</span>
          <span tw="w-[80px] text-center text-gray-300">Minutes</span>
          <span tw="w-[80px] text-center text-gray-300">Seconds</span>
        </div>                
        <div tw="flex justify-between w-full">
          <span tw="w-[80px] text-center font-generatorUltraBold text-3xl">{addLeadingZeros(presaleDuration.days, 2)}</span>
          <span>:</span>
          <span tw="w-[80px] text-center font-generatorUltraBold text-3xl">{addLeadingZeros(presaleDuration.hours, 2)}</span>
          <span>:</span>
          <span tw="w-[80px] text-center font-generatorUltraBold text-3xl">{addLeadingZeros(presaleDuration.mins, 2)}</span>
          <span>:</span>
          <span tw="w-[80px] text-center font-generatorUltraBold text-3xl">{addLeadingZeros(presaleDuration.secs, 2)}</span>
        </div>
      </div>
      <div tw="flex flex-col gap-4">
      <div tw="text-xl font-bold">
        ETH allocated to presale so far: {presaleInfo.coinRaised?.toFixed(3)}{' '}ETH
        </div>
        <div tw="text-xl font-bold">
          Amount of DIY that is reserved: {presaleInfo.purchasedAmount?.toFixed(3)}{' '}DIY
        </div>
        <div tw="w-full flex justify-between gap-4">
          <CurrencyInput
            maxValue={assetBalance}
            selectedAsset={asset}
            value={currencyAmount}
            onAssetChange={onAssetChange}
            onChange={setCurrencyAmount}
          />
          {ctaBtn}
        </div>        
      </div>
    </div>
  );
};

export default PresalePanel;
