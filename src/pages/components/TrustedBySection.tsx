import 'twin.macro';

import { Link } from 'react-router-dom';

import dotSqure2Svg from '../../assets/svgs/banner/dot-squre-2.svg';
import iconCoingeckoLogo from '../../assets/svgs/followers/coingecko-logo.svg';
import iconCoinmarketLogo from '../../assets/svgs/followers/coinmarket-logo.svg';
import iconEthereumLogo from '../../assets/svgs/followers/ethereum-logo.svg';
import iconUniswapLogo from '../../assets/svgs/followers/uniswap-logo.svg';

export const followersLink = [
  { icon: iconEthereumLogo, link: '/', title: 'Ethereum Logo' },
  { icon: iconUniswapLogo, link: '/', title: 'Uniswap Logo' },
  { icon: iconCoingeckoLogo, link: '/', title: 'Coingecko Logo' },
  { icon: iconCoinmarketLogo, link: '/', title: 'Coinmarket Logo' },
];

const TrustedBySection = () => {
  return (
    <div tw="relative w-full bg-white flex flex-col justify-center items-center gap-1 sm:gap-2 px-12 py-20">
      <img alt={''} src={dotSqure2Svg} tw="absolute right-0 top-0 w-[10vw] md:w-[5vw]"/>
      <div>
      <p tw="p-6 text-2xl text-gray-400 font-avenirLTStdBook">Trusted by over <span tw="text-gray-100 font-generatorUltraBold text-xl">100,000</span> followers  and counting</p>
      <ul tw="flex justify-center gap-2 sm:gap-8">
        {followersLink.map((item) => (
          <li
            key={item.title}
            tw="rounded-full"
          >
            <div tw="w-full h-full flex justify-center items-center uppercase text-white">
              <img
                alt={item.title}
                src={item.icon}
                tw="object-center h-[80px]"
              />
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TrustedBySection;
