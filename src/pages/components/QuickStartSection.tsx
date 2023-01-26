import 'twin.macro';

import { Link } from 'react-router-dom';

import cardStep1Svg from '../../assets/svgs/quickstart/card-step-1.svg';
import cardStep2Svg from '../../assets/svgs/quickstart/card-step-2.svg';
import cardStep3Svg from '../../assets/svgs/quickstart/card-step-3.svg';
import cardStep4Svg from '../../assets/svgs/quickstart/card-step-4.svg';
import dotSqure1Svg from '../../assets/svgs/quickstart/dot-squre-1.svg';
import dotSqure2Svg from '../../assets/svgs/quickstart/dot-squre-2.svg';
import rightArrowSvg from '../../assets/svgs/quickstart/right-arrow.svg';
import ConnectWalletButton from '../../components/ConnectWalletButton';
const steps = [
  { desc: 'List how much $DIY you would like to buy', icon: cardStep1Svg, title: 'Step 1' },
  { desc: 'Connect your wallet', icon: cardStep2Svg, title: 'Step 2' },
  { desc: 'Approve transaction in defi wallet', icon: cardStep3Svg, title: 'Step 3' },
  { desc: 'Received $DIY in your wallet!', icon: cardStep4Svg, title: 'Step 4' },
];

const QuickStartSection = () => {
  return (
    <div id="guide" tw="relative w-full bg-white flex justify-center items-center">
      <div tw="flex flex-col items-center px-10 py-20 gap-8 relative">
        <img alt={''} src={dotSqure1Svg} tw="absolute left-0 z-0 w-[15vw] sm:w-[5vw]"/>
        <h2 tw="font-generatorUltraBold text-5xl text-center">Quick Start Guide</h2>
        <div tw="flex flex-wrap justify-center gap-8 relative">
          {
            steps.map((step, index) => (
              <div key={index} tw="relative flex flex-col items-center p-8 w-[270px] h-[200px] border-[1px] bg-white border-gray-200 rounded-2xl gap-4 z-0">
                <div tw="flex justify-center items-center w-[48px] h-[48px] border-[1px] border-gray-300 rounded-full">
                  <img alt={''} src={step.icon} tw="scale-75"/>
                </div>
                <p tw="font-generatorUltraBold">{step.title}</p>
                <p tw="text-sm text-center text-gray-400">{step.desc}</p>
                {/* <img alt={''} src={rightArrowSvg} tw="absolute bottom-[40%] left-[100%] scale-[90%] translate-x-[-10px] z-50"/> */}
              </div>
            ))
          }
        </div>
        <div tw="mt-8">
          <ConnectWalletButton/>
        </div>
      </div>
      <img alt={''} src={dotSqure2Svg} tw="absolute right-0 bottom-[40px] z-0 w-[15vw] sm:w-[5vw]"/>
    </div>
  );
};

export default QuickStartSection;
