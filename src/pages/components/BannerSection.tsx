import 'twin.macro';
import './BannerSection.scss';

import { useCallback,useContext, useEffect,useMemo, useState } from 'react';
import ReactPlayer from 'react-player'

import banner1Img from '../../assets/images/banner-0.png';
import closeBtnImg from '../../assets/images/close.png';
import dotSqure1Svg from '../../assets/svgs/banner/dot-squre-1.svg';
import playButtonSvg from '../../assets/svgs/banner/play-button.svg';
const BannerSection = () => {
  const [isVideoPlaying, setVideoPlaying] = useState<boolean>(false);  
  return (
    <div tw="relative w-full h-[500px] bg-white pb-20">
      <div tw="relative h-full bg-[#F4F4F4] grid grid-cols-1 md:grid-cols-2">
        <img alt={''} src={dotSqure1Svg} tw="absolute left-0 top-0 w-[10vw] md:w-[5vw]"/>
        <div tw="flex flex-col justify-center items-center">
          <div tw="flex flex-col gap-4 text-4xl font-bold">
            {/* <p tw="font-generatorUltraBold text-5xl">Us DIY’ers</p>
            <p tw="font-generatorUltraBold text-5xl">need to stick</p>
            <p tw="font-generatorUltraBold text-5xl">together!</p> */}
            <p tw="font-generatorUltraBold text-5xl">As simple as</p>
            <p tw="font-generatorUltraBold text-5xl">grabbing</p>
            <p tw="font-generatorUltraBold text-5xl">your toolbox</p>            
            <a href="#presale" tw="mt-6 px-[30px] py-[10px] w-[fit-content] bg-red-500 text-gray-50 rounded-full text-base hover:shadow-lg">Buy at presale</a>
          </div>
        </div>
      </div>
      <div className="video-clip" tw="hidden md:block absolute left-[50%] top-0 w-[50%] h-[100%] bg-[#E0E0E0]">
        <div tw="overflow-hidden h-full">
          <img alt="banner1" src={banner1Img} tw="min-w-full h-full w-auto max-w-none" />
        </div>
      </div>
      <img alt="play" src={playButtonSvg} tw="absolute left-[70%] md:left-[53%] top-[55%] md:top-[40%] w-20 cursor-pointer rounded-full hover:shadow-md" onClick={()=>setVideoPlaying(true)}/>
      {
        isVideoPlaying && 
        <>
          <div tw="absolute left-0 top-0 w-full h-full bg-black">
            <ReactPlayer
              controls
              loop
              playing
              config={{
                file: {
                  attributes: {
                    preload: 'auto',
                  },
                }
              }}
              height="100%"
              url='/videos/banner-video.mp4'
              width="100%"
            />
          </div>
          <div tw="absolute right-[20px] top-[20px]">
            <img alt="" src={closeBtnImg} tw="w-[50px] cursor-pointer hover: shadow-md" onClick={()=>setVideoPlaying(false)}></img>
          </div>
        </>
      }
    </div>
  );
};

export default BannerSection;
