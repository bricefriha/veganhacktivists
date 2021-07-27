import { NavButton } from 'components/decoration/buttons';
import Image from 'next/image';
import Hero from '../../decoration/hero';
import SquareField from '../../decoration/squares';
import heroBackground from '../../../../public/images/VH-pigs-hero.jpg';
import heroTagline from '../../../../public/images/VH-Mission-Hero-Text.png';

export const AboutButtons: React.FC = () => {
  return (
    <div className="mb-5 flex justify-center flex-wrap">
      <NavButton href="/about/our-mission">OUR MISSION</NavButton>
      <NavButton href="/about/our-story">OUR STORY</NavButton>
      <NavButton href="/about/our-values">OUR VALUES</NavButton>
    </div>
  );
};

const HERO_DECORATION_SQUARES = [
  { color: 'white', size: 16, left: 0, bottom: 0 },
  { color: 'magenta', size: 32, left: 16, bottom: 0 },
  { color: 'orange', size: 16, left: 0, top: 0 },
  { color: 'yellow_orange', size: 16, right: 32, bottom: 16 },
  { color: 'yellow', size: 32, right: 0, top: -16 },
  { color: 'white', size: 16, right: 32, bottom: 0 },
];

export const AboutHero: React.FC = () => {
  return (
    <>
      <Hero
        imageBackground={heroBackground.src}
        alignment="left"
        classNameMapping={{
          container: 'bg-center',
        }}
      >
        <div>
          <Image
            src={heroTagline.src}
            width={heroTagline.width * 0.5}
            height={heroTagline.height * 0.5}
            alt="Data-Driven Activism"
            layout="intrinsic"
            priority
          />
        </div>
      </Hero>
      <SquareField
        squares={HERO_DECORATION_SQUARES}
        className="hidden md:block"
      />
    </>
  );
};
