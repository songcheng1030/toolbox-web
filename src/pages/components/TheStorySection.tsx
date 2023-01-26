import 'twin.macro';

import { Link } from 'react-router-dom';

import story3Img from '../../assets/images/story-3.png';
import story1Img from '../../assets/images/story-11.png';
import story2Img from '../../assets/images/story-2.png';
import dotSqure1Svg from '../../assets/svgs/thestory/dot-squre-1.svg';
import likeSvg from '../../assets/svgs/thestory/like.svg';
import quoteMarkSvg from '../../assets/svgs/thestory/quote-mark.svg';

const TheStorySection = () => {
  return (
    <div id="about" tw="w-full px-4 pt-32 pb-20 bg-[#F2F2F2FF] grid grid-cols-1 md:grid-cols-2 gap-8">
      <div tw="relative">
        <img alt={''} src={dotSqure1Svg} tw="absolute left-0 bottom-[40px] w-[15vw] sm:w-[10vw] z-0"/>
        <div tw="flex justify-center items-center gap-4">
          <div tw="self-center relative">
            <img alt={''} src={likeSvg} tw="w-[50px] pb-2"/>
            <img alt={''} src={story1Img} tw="w-[300px]"/>
            <div tw="absolute left-[100px] bottom-[-95px] w-[240px] rounded-2xl bg-white p-4 shadow-lg z-10">
              <p tw="font-generatorUltraBold font-bold pb-2">Mark</p>
              <p tw="text-xs text-gray-400">This is a very helpful video and explains a lot about the actual garage door as well.</p>
            </div>
            <div tw="absolute flex justify-center items-center left-[80px] bottom-[-2px] w-[40px] h-[40px] bg-[#ED1C24] rounded-full z-20">
              <img alt={''} src={quoteMarkSvg} tw="w-[25px]"/>
            </div>
          </div>
          <div tw="relative flex flex-col gap-4">
            <div tw="absolute right-[30px] md:right-[-30px] top-[-40px] w-[240px] rounded-2xl bg-white p-4 shadow-lg">
              <p tw="font-generatorUltraBold font-bold pb-2">Rogelio</p>
              <p tw="text-xs text-gray-400">Thank you to the moon & back!</p>
            </div>
            <div tw="absolute flex justify-center items-center right-[15px] md:right-[-45px] top-[-60px] w-[40px] h-[40px] bg-[#ED1C24] rounded-full">
              <img alt={''} src={quoteMarkSvg} tw="w-[25px]"/>
            </div>
            <img alt={''} src={story2Img} tw="w-[250px]"/>
            <img alt={''} src={story3Img} tw="w-[250px]"/>
          </div>          
        </div>
      </div>
      <div tw="flex flex-col gap-4 max-w-xl">
        <h2 tw="font-generatorUltraBold text-5xl mt-10 md:mt-0">The story</h2>
        <p tw="text-gray-400 text-lg">My name is Mike Borders, my wife Alena and I began our YouTube channel over <b>10 years</b> ago. As young adults trying to save money, we realized how important it was to maintain our belongings. Our passion is creating videos that equip you with the knowledge and confidence to get your DIY projects done</p>
        <p tw="text-gray-400 text-lg">Very quickly, we discovered how many DIY’ers out there were just like us, interested and motivated to learn. With over <b>1,100 DIY projects</b> completed to date, we have a lot more to do and are excited to continue our mission.</p>
        <p tw="text-gray-400 text-lg">Along with filming DIY projects for the community, answering your questions is our top priority. The DIY community is the friendliest, most loyal, and interactive community we have ever been part of. As we always say, “Us DIY’ers need to stick together”!</p>
        <p tw="text-gray-400 text-lg">The roots of Toolbox Token, a token thats provides you the benefits similar to completing your DIY projects, ecosystem containing staking, swapping, and more.</p>      
        <a href="#guide" tw="mt-8 px-[30px] py-[12px] w-[fit-content] bg-red-500 text-gray-50 text-xl rounded-full">Let’s get started</a>
      </div>
    </div>
  );
};

export default TheStorySection;
