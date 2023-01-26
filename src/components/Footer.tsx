import 'twin.macro';

import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';


export const socialLink = [
  { icon: 'instagram', link: 'https://www.instagram.com/diywithmike/', title: 'Instagram' },
  { icon: 'twitter', link: 'https://twitter.com/toolboxtoken/', title: 'Twitter' },
  { icon: 'youtube', link: 'https://www.youtube.com/c/DIYWithMichaelBorders/', title: 'Youtube' },
];

const Footer = () => {
  return (
    <footer tw="w-full py-16 bg-[#F2F2F2] flex flex-col justify-center items-center gap-8">
      <div tw="font-generatorUltraBold text-2xl">Stay in the Loop</div>
      <div>
      <ul tw="flex gap-8">
        {socialLink.map((item) => (
          <li
            key={item.title}
            tw="rounded-full"
          >
            <SocialIcon bgColor="#ED1C24" target="_blank" network={item.icon} style={{ height: 48, width: 48 }} url={item.link} />
          </li>
        ))}
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
