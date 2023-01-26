import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

import dotSqure1Svg from '../../assets/svgs/roadmap/dot-squre-1.svg';
import dotSqure2Svg from '../../assets/svgs/roadmap/dot-squre-2.svg';
import iconLiMarkSvg from '../../assets/svgs/roadmap/icon-li-mark.svg';
import iconStep1Svg from '../../assets/svgs/roadmap/icon-step1.svg';
import iconStep2Svg from '../../assets/svgs/roadmap/icon-step2.svg';
import iconStep3Svg from '../../assets/svgs/roadmap/icon-step3.svg';
import iconStep4Svg from '../../assets/svgs/roadmap/icon-step4.svg';

const phases = [
  {
    iconImg: iconStep1Svg,
    subTitles: ['Token Launch ($DIY)', 'Presale event', 'Contract Verification'],
    title: 'Phase 1'
  },{
    iconImg: iconStep2Svg,
    subTitles: ['List $DIY on a Decentralized exchange platform', 'Charity wallet creation'],
    title: 'Phase 2'
  },{
    iconImg: iconStep3Svg,
    subTitles: ['10,000 DIYers', 'Introduce 2 new tokens'],
    title: 'Phase 3'
  },{
    iconImg: iconStep4Svg,
    subTitles: ['50,000 DIYers', 'Go live with staking rewards', 'Additional platforms listings'],
    title: 'Phase 4'
  }
]

const RoadMapSection = () => {
  const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: '(max-width: 800px)' })
  
  const isTabletAndBelow = useTabletAndBelowMediaQuery()

  return (
    <div id="roadmap" tw="relative w-full bg-white flex justify-center items-center">
      <img alt={''} src={dotSqure1Svg} tw="absolute left-0 bottom-[40px] w-[15vw] sm:w-[5vw] z-0"/>
      <img alt={''} src={dotSqure2Svg} tw="absolute right-0 top-[40px] w-[15vw] sm:w-[4vw] z-0"/>
      <div tw="flex flex-col items-center py-20 mx-auto">
        <h2 tw="font-generatorUltraBold text-4xl">Roadmap</h2>
        <div tw="relative">

          {
            !isTabletAndBelow && <div tw="absolute border-l-[1px] left-[50%] top-[80px] bottom-[80px]"></div>
          }          
          {
            phases.map((phase, index) => (
              <div
                key={index}
                css={[
                  isTabletAndBelow && tw`grid grid-cols-[60px 1fr 60px]`,
                  !isTabletAndBelow && tw`grid grid-cols-[100px 1fr 100px 1fr 100px]`
                ]}
                
              >
                {
                  (!isTabletAndBelow && index % 2 === 1) && 
                  <>
                    <div></div>
                    <div></div>
                    <div tw="flex justify-center items-center">
                      <div tw="w-[64px] h-[64px] border-[1px] border-gray-300 rounded-full flex items-center justify-center bg-white z-10">
                        <span tw="text-2xl">{index+1}</span>
                      </div>
                    </div>
                    <div tw="grid grid-rows-2 min-w-[300px]">
                      <div tw="relative flex items-end py-2 pl-6">
                        <span tw="font-generatorUltraBold text-2xl">{phase.title}</span>
                        <div tw="absolute w-full border-b-[1px] left-0 bottom-0"></div>
                      </div>
                      <div tw="flex flex-col gap-2 py-2 pl-6">
                        {
                          phase.subTitles.map((subTitle, index) => (
                            <div key={index} tw="flex justify-start items-start gap-2">
                              <img alt={''} src={iconLiMarkSvg}  tw="pt-[7px]"/>
                              <span tw="text-base text-gray-400 max-w-[200px]">{subTitle}</span>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <div tw="flex justify-center items-center">
                      <div tw="flex justify-center items-center">
                        <div tw="bg-[#F9F9F9] rounded-full p-2">
                          <img alt={''} src={phase.iconImg} tw="w-[40px]"/>
                        </div>
                      </div>
                    </div>                    
                  </>
                }
                {
                  (isTabletAndBelow || index % 2 === 0) && 
                  <>
                    <div tw="flex justify-center items-center">
                      <div tw="flex justify-center items-center">
                        <div tw="bg-[#F9F9F9] rounded-full p-2">
                          <img alt={''} src={phase.iconImg} tw="w-[40px]"/>
                        </div>
                      </div>
                    </div>
                    <div tw="grid grid-rows-2 min-w-[300px]">
                      <div tw="relative flex items-end py-2">
                        <span tw="font-generatorUltraBold text-2xl">{phase.title}</span>
                        <div tw="absolute w-full border-b-[1px] left-0 bottom-0"></div>
                      </div>
                      <div tw="flex flex-col gap-2 py-2">
                        {
                          phase.subTitles.map((subTitle, index) => (
                            <div key={index} tw="flex justify-start items-start gap-2">
                              <img alt={''} src={iconLiMarkSvg}  tw="pt-[7px]"/>
                              <span tw="text-base text-gray-400 max-w-[200px]">{subTitle}</span>
                            </div>
                          ))
                        }
                      </div>
                    </div>                  
                    <div tw="flex justify-center items-center">
                      <div tw="w-[64px] h-[64px] border-[1px] border-gray-300 rounded-full flex items-center justify-center bg-white z-10">
                        <span tw="text-2xl">{index+1}</span>
                      </div>
                    </div>
                    {
                      !isTabletAndBelow && <>
                        <div></div>
                        <div></div>
                      </>
                    }
                  </>
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default RoadMapSection;
