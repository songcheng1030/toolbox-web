import { useContext } from 'react';

import ConnectWalletModal from '../components/ConnectWalletModal';
import { UserContext } from '../contexts/UserContext';
import { useEagerConnect, useWeb3Listener } from '../hooks';
import BannerSection from './components/BannerSection';
import QuickStartSection from './components/QuickStartSection';
import RoadMapSection from './components/RoadMapSection';
import TheStorySection from './components/TheStorySection';
import TrustedBySection from './components/TrustedBySection';
import WhatAreSection from './components/WhatAreSection';

const Home = () => {
  useEagerConnect();
  useWeb3Listener();

  const { isWalletConnectOpened, setIsWalletConnectOpened } =
  useContext(UserContext);

  return (
    <>
      <BannerSection />
      <TrustedBySection />
      <TheStorySection />
      <QuickStartSection />
      <WhatAreSection />
      <RoadMapSection />
      <ConnectWalletModal
        isOpened={isWalletConnectOpened}
        onClose={() => setIsWalletConnectOpened(false)}
      />
    </>
  );
};

export default Home;
