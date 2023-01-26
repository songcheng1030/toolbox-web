import { useState } from 'react';
import ReactModal from 'react-modal';
import { Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ToastContainer } from 'react-toastify';

import Layout from './components/Layout';
import MobileMenu from './components/MobileMenu';
import { UserContextProvider } from './contexts/UserContext';
import Home from './pages/Home';

// ReactModal.setAppElement('#root');

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <>
    <UserContextProvider>
      <ParallaxProvider>
        <Layout menuOpened={isMenuOpened} onToggleMenu={toggleMenu}>
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
          {isMenuOpened && (
            <MobileMenu onClose={() => setIsMenuOpened(false)} />
          )}
        </Layout>
      </ParallaxProvider>
    </UserContextProvider>
    
    <ToastContainer />
    </>
  );
};

export default App;
