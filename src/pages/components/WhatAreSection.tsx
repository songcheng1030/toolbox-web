import 'twin.macro';

import { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import dotSqure1Svg from '../../assets/svgs/whatare/dot-square-1.svg';
import dotSqure2Svg from '../../assets/svgs/whatare/dot-square-2.svg';
import iconEthSvg from '../../assets/svgs/whatare/icon-eth.svg';
import iconKeySvg from '../../assets/svgs/whatare/icon-key.svg';
import iconRotateSvg from '../../assets/svgs/whatare/icon-rotate.svg';
import PresalePanel from './PresalePanel';
const WhatAreSection = () => {
  return (
    <div id="presale" tw="relative w-full bg-[#F2F2F2FF] flex justify-center items-center">
      <img alt={''} src={dotSqure1Svg} tw="absolute left-0 top-[50%] w-[15vw] sm:w-[7vw]"/>
      <div tw="flex flex-col items-center px-10 py-[100px] gap-8">
        <div tw="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div tw="flex flex-col max-w-xl gap-6">
            <h2 tw="font-generatorUltraBold text-4xl">What are you waiting for?</h2>
            <p tw="">Come join our presale, and become a part of the DIY community!</p>
            <p tw="">By joining our presale, you will be able to purchase $DIY tokens at a discount compared to our Initial Exchange Listing price. In order to prevent large liquidity dumps during the initial exchange listing, we will be vesting the presale tokens linearly.</p>
            <p tw="">Since the price of $DIY is destined to increase as the community grows, you can be sure that getting in at presale is the best way to develop massive gains through your $DIY community.</p>
            <div tw="flex gap-4">
              <img alt={''} src={iconKeySvg} tw=""/>
              <div tw="flex flex-col">
                <p><b>20%</b> ETH raised liquidity lock</p>
                <p>Tokens vested linearly over <b>8</b> months</p>
              </div>
            </div>
            <div tw="flex gap-4">
              <img alt={''} src={iconEthSvg} tw=""/>
              <div tw="flex flex-col">
                <p><b>50</b> ETH</p>
                <p>Softcap</p>
              </div>
            </div>
            <div tw="flex gap-4">
              <img alt={''} src={iconEthSvg} tw=""/>
              <div tw="flex flex-col">
                <p><b>118</b> ETH</p>
                <p>Hardcap</p>
              </div>
            </div>
            <div tw="flex gap-4">
              <img alt={''} src={iconEthSvg} tw=""/>
              <div tw="flex flex-col">
                <p><b>0.575</b> ETH</p>
                <p>Max spend per account</p>
              </div>
            </div>
            <div tw="flex gap-4">
              <img alt={''} src={iconEthSvg} tw=""/>
              <div tw="flex flex-col">
                <p><b>2,608,695.65217391</b> AVR / per ETH</p>
                <p>Presale price</p>
              </div>
            </div>
            <div tw="flex gap-4">
              <img alt={''} src={iconEthSvg} tw=""/>
              <div tw="flex flex-col">
                <p><b>2,347,826.08695652</b> AVR / per ETH</p>
                <p>Listing price</p>
              </div>
            </div>
          </div>
          <div
            css={{
              width: 'fit-content',
            }}
            tw="relative flex flex-col w-full items-center"
          >
            <img alt={''} src={dotSqure2Svg} tw="absolute left-[50%] top-[-20px] w-[70px]"/>
            <img alt={''} src={iconRotateSvg} tw="absolute right-[80px] top-[-30px] w-[80px]"/>
            <PresalePanel />
          </div>
        </div>        
      </div>
    </div>
  );
};

export default WhatAreSection;
