import 'twin.macro';

import { useContext, useState } from 'react';

import ChevronDownImg from '../assets/images/chevron-down.svg';
import { UserContext } from '../contexts/UserContext';
import { useWeb3Provider } from '../hooks';
import { getWalletAddressAbbr } from '../utils';

const ConnectWalletButton = () => {
  const { isWalletConnectOpened, setIsWalletConnectOpened } =
    useContext(UserContext);
  const { account, active, deactivate } = useWeb3Provider();
  const [isWalletInfoOpened, setIsWalletInfoOpened] = useState(false);
  
  return (
    <div tw="relative">
        <button
          tw="font-avenirLTStdBlack border-[3px] border-red-500 rounded-3xl px-4 py-2 w-[190px] flex items-center justify-center gap-2 hover:shadow-md"
          onClick={() => {
            if (active) {
              setIsWalletInfoOpened(!isWalletInfoOpened);
            } else {
              !isWalletConnectOpened
                ? setIsWalletConnectOpened(true)
                : setIsWalletConnectOpened(false);
            }
          }}
        >
          {active ? (
            <>
              <span>{getWalletAddressAbbr(account)}</span>
              <img alt="" src={ChevronDownImg} />
            </>
          ) : (
            'Connect Wallet'
          )}
        </button>

        {active && isWalletInfoOpened ? (
          <button
            tw="absolute font-avenirLTStdBlack text-white bg-red-500 rounded-3xl px-4 py-2 mt-2 w-[190px] flex items-center justify-center z-10"
            onClick={() => {
              deactivate();
              setIsWalletInfoOpened(false);
            }}
          >
            Disconnect
          </button>
        ) : null}        
    </div>
  );
};

export default ConnectWalletButton;
