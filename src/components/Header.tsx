import 'twin.macro';

import { Link } from 'react-router-dom';

import imgLogo from '../assets/images/logo.svg';
import iconMenu from '../assets/svgs/sandwich.svg';
import iconClose from '../assets/svgs/times.svg';
import ConnectWalletButton from './ConnectWalletButton';

export const navMenu = [
  { isExternal: false, link: '#about', title: 'About' },
  { isExternal: false, link: '#guide', title: 'Guide' },
  { isExternal: false, link: '#roadmap', title: 'Roadmap' },
  { isExternal: true, link: 'https://www.youtube.com/c/DIYWithMichaelBorders', title: 'Youtube' },
];

const Header = ({
  menuOpened,
  onToggleMenu,
}: {
  menuOpened: boolean;
  onToggleMenu: () => void;
}) => {
  return (
    <>
      <header tw="w-full flex top-0 bg-[#F4F4F4] z-20">
        <div tw="w-[20px] md:w-[15%]"></div>
        <div tw="w-full h-[120px] flex justify-between items-center border-b-[1px] border-gray-200">
          <img alt="logo" src={imgLogo} tw="max-w-[202px]" />
          <div tw="items-center gap-10 hidden md:flex">
            <ul tw="flex gap-8">
              {navMenu.map((item) => (
                <li key={item.title}>
                  <a href={item.link} rel="noreferrer" target={item.isExternal ? '_blank' : '_self'} tw="font-avenirLTStdBook uppercase text-[#333333] hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <ConnectWalletButton/>
          </div>
          <Link to="#" tw="block md:hidden" onClick={() => onToggleMenu()}>
            <img alt="menu" src={menuOpened ? iconClose : iconMenu} />
          </Link>
        </div>
        <div tw="w-[20px] md:w-[15%] border-b-[1px] border-gray-200"></div>
      </header>
    </>
  );
};

export default Header;
