import './ConnectWalletModal.scss';

import CloseIcon from '../assets/images/close.png';
import MetamaskImg from '../assets/images/metamask.png';
import WalletConnectImg from '../assets/images/wallet-connect.png';
import { useWeb3Provider } from '../hooks';
import Modal from './Modal';

const ConnectWalletModal = ({
  isOpened,
  onClose,
}: {
  isOpened: boolean;
  onClose: () => void;
}) => {
  const { activate } = useWeb3Provider();

  return (
    <Modal isOpen={isOpened} onRequestClose={onClose}>
      <div className="wallet-connect-modal">
        <button className="wallet-connect-close">
          <img
            alt=""
            height="100%"
            src={CloseIcon}
            width="100%"
            onClick={onClose}
          />
        </button>

        <div className="wallet-connect-inner">
          <button
            className="wallet-connector-button"
            onClick={() => activate('Injected')}
          >
            <img alt="" src={MetamaskImg} />
            MetaMask
          </button>
          <button
            className="wallet-connector-button"
            onClick={() => activate('WalletConnect')}
          >
            <img alt="" src={WalletConnectImg} />
            WalletConnect
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default ConnectWalletModal;
