import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import activistHub from '../../public/images/ActivistHub.png';
import animalRebellion from '../../public/images/AnimalRebellion.png';
import animalRightsMap from '../../public/images/AnimalRightsMap.png';
import blogCow from '../../public/images/Blog-cow.jpg';
import dailyDozen from '../../public/images/DailyDozen.png';
import dailyNooch from '../../public/images/DailyNooch.png';
import sehati from '../../public/images/Sehati.png';
import veganBootcamp from '../../public/images/VeganBootcamp.png';
import veganCheatSheet from '../../public/images/VeganCheatSheet.jpeg';
import heroBackground from '../../public/images/VH-hero-bg.jpg';
import heroTagline from '../../public/images/VH-hero-tagline.png';
import teamIcons from '../../public/images/VH-team-icons.png';
import pixelHeart from '../../public/images/VH_PixelHeart.png';
import {
  DarkButton,
  GreenButton,
  LightButton,
} from '../components/decoration/buttons';
import Hero from '../components/decoration/hero';
import SquareField from '../components/decoration/squares';

const HERO_DECORATION_SQUARES = [
  { color: 'green', size: 32, left: 0, bottom: 0 },
  { color: 'white', size: 16, left: 32, bottom: 0 },
  { color: 'white', size: 16, right: 64, bottom: 0 },
  { color: 'magenta', size: 32, right: 0, bottom: 0 },
  { color: 'yellow', size: 32, left: 32, top: 0 },
  { color: 'yellow_orange', size: 16, left: 16, top: 32 },
  { color: 'red', size: 32, right: 32, top: 0 },
];

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Vegan Hacktivists | Developers Coding for a Vegan World</title>
      </Head>
      <Hero
        imageBackground={heroBackground}
        alignment="right"
        classNameMapping={{
          container: 'bg-center',
        }}
      >
        <div className="md:p-16">
          <Image
            src={heroTagline}
            width={heroTagline.width * 0.65}
            height={heroTagline.height * 0.65}
            alt="Compassion, Creativity, Code"
            quality={100}
            priority
          />
        </div>
        <div className="relative text-white mx-auto md:w-1/2 drop-shadow-2xl text-2xl">
          Fighting for the animal rights movement since 2019.
        </div>
        <div className="relative mx-auto mt-10">
          <LightButton href="/about">Learn More</LightButton>
        </div>
      </Hero>
      <SquareField
        squares={HERO_DECORATION_SQUARES}
        className="hidden md:block"
      />
      <div className="content-center mx-auto my-32 md:w-1/2 drop-shadow-2xl text-2xl px-5">
        <Image
          src={pixelHeart.src}
          width={pixelHeart.width / 3}
          height={pixelHeart.height / 3}
          alt="Compassion, Creativity, Code"
        />
        <p className="mb-16 text-grey-dark">
          <span className="font-italic font-semibold text-3xl">We are </span>
          <span className="text-5xl font-mono font-semibold">
            VEGAN HACKTIVISTS
          </span>
        </p>
        <p className="pb-5">
          We&apos;re a group of passionate Vegan Activists that volunteer our
          time and skills towards <b>vegan projects worth supporting.</b> Every
          project we work on aims to help spread compassion through Veganism by
          supporting both vegans, non-vegans and activists in some way.
        </p>
        <p className="pb-5">
          Every project we release is <b>100% free to use for everyone.</b> We
          don&apos;t do premium versions, microtransactions, advertisements, or
          sell user data - ever.
        </p>
        <p>
          <b>We do this for the animals</b> - we do this because coding is our
          way of doing our part for activism. If you want to support us, please
          consider a small donation via our{' '}
          <span className="text-pink">Patreon!</span> It means the world to us
          and the animals to have your support.
        </p>
        <div className="relative mx-auto mt-10 md:w-1/3">
          <DarkButton href="/mission" className="font-mono text-sm">
            Our Mission
          </DarkButton>
        </div>
      </div>
      <div className="bg-grey-light">
        <div className="content-center mx-auto md:w-1/2 drop-shadow-2xl text-2xl pt-10 px-5">
          <p className="text-grey-dark pb-5">
            <span className="font-italic font-semibold text-3xl">
              Featured{' '}
            </span>
            <b className="text-5xl font-mono">PROJECTS</b>
          </p>
          <p>
            Every project we release is 100% free for everyone, we don’t do
            premium versions, advertisments, or sell user data what-so-ever.
          </p>
          <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-4 grid-cols-1 gap-4 pt-16">
            <div>
              <a href="https://activisthub.org">
                <Image
                  className="rounded-2xl"
                  src={activistHub.src}
                  width={activistHub.width}
                  height={activistHub.height}
                  alt="Compassion, Creativity, Code"
                />
              </a>
            </div>
            <div>
              <a href="https://animalrebellion.org">
                <Image
                  className="rounded-2xl"
                  src={animalRebellion.src}
                  width={animalRebellion.width}
                  height={animalRebellion.height}
                  alt="Compassion, Creativity, Code"
                />
              </a>
            </div>
            <div>
              <Image
                className="rounded-2xl"
                src={animalRightsMap.src}
                width={animalRightsMap.width}
                height={animalRightsMap.height}
                alt="Compassion, Creativity, Code"
              />
            </div>
            <div>
              <a href="https://animalrightsmap.org">
                <Image
                  className="rounded-2xl"
                  src={dailyDozen.src}
                  width={dailyDozen.width}
                  height={dailyDozen.height}
                  alt="Compassion, Creativity, Code"
                />
              </a>
            </div>
            <div>
              <a href="https://dailynooch.org">
                <Image
                  className="rounded-2xl"
                  src={dailyNooch.src}
                  width={dailyNooch.width}
                  height={dailyNooch.height}
                  alt="Compassion, Creativity, Code"
                />
              </a>
            </div>
            <div>
              <a href="https://www.sehatianimalsanctuary.org">
                <Image
                  className="rounded-2xl"
                  src={sehati.src}
                  width={sehati.width}
                  height={sehati.height}
                  alt="Compassion, Creativity, Code"
                />
              </a>
            </div>
            <div>
              <a href="https://veganbootcamp.org">
                <Image
                  className="rounded-2xl"
                  src={veganBootcamp.src}
                  width={veganBootcamp.width}
                  height={veganBootcamp.height}
                  alt="Compassion, Creativity, Code"
                />
              </a>
            </div>
            <div>
              <a href="https://vegancheatsheet.org">
                <Image
                  className="rounded-2xl"
                  src={veganCheatSheet.src}
                  width={veganCheatSheet.width}
                  height={veganCheatSheet.height}
                  alt="Compassion, Creativity, Code"
                />
              </a>
            </div>
          </div>
          <div className="relative mx-auto mt-10 md:w-1/3 pb-16">
            <DarkButton href="/projects" className="font-mono text-sm">
              See All Projects
            </DarkButton>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="content-center mx-auto md:w-1/2 drop-shadow-2xl text-2xl">
          <p className="mb-16 text-grey-dark pt-16">
            <span className="text-5xl font-mono font-bold text-white">
              JOIN OUR TEAM
            </span>
          </p>
          <Image
            src={teamIcons.src}
            width={teamIcons.width}
            height={teamIcons.height}
            alt="Compassion, Creativity, Code"
          />
          <p className="pb-5 text-white">
            Are you a developer, designer, writer, or other creative
            professional wanting to use skills for the animals? We&apos;re
            always looking for more vegan activist volunteers to join our team!
            If you&apos;re interested and have the time to spare, click to see
            our positions.
          </p>
          <div className="mb-5 flex justify-center flex-wrap">
            <LightButton href="/team" className="m-5 font-mono text-sm">
              Meet the Team
            </LightButton>
            <LightButton href="/join" className="m-5 font-mono text-sm">
              Apply to Join
            </LightButton>
          </div>
        </div>
      </div>
      <div className="content-center mx-auto md:w-1/2 drop-shadow-2xl text-2xl">
        <p className="text-grey-dark pb-5">
          <span className="font-italic font-semibold text-3xl">On the </span>
          <b className="text-5xl font-mono">BLOG</b>
        </p>
        <p className="pb-5">
          We regularly post project updates, announcements, interviews, and
          other fun stuff here! Thanks for reading!
        </p>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-4 md:grid-cols-3 md:gap-4 sm:grid-cols-2 sm:gap-4 grid-cols-1 gap-4 lg:px-32 md:px-32 px-16">
        <div className="overflow-hidden w-full">
          <Image
            src={blogCow.src}
            width={blogCow.width}
            height={blogCow.height}
            className="w-full bg-cover"
            alt="Compassion, Creativity, Code"
          />
        </div>
        <div className="overflow-hidden w-full">
          <Image
            src={blogCow.src}
            width={blogCow.width}
            height={blogCow.height}
            className="w-full bg-cover"
            alt="Compassion, Creativity, Code"
          />
        </div>
        <div className="overflow-hidden w-full">
          <Image
            src={blogCow.src}
            width={blogCow.width}
            height={blogCow.height}
            className="w-full bg-cover"
            alt="Compassion, Creativity, Code"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-4 md:grid-cols-3 md:gap-4 sm:grid-cols-2 sm:gap-4 grid-cols-1 gap-4 lg:px-32 md:px-32 px-16 pb-5 bg-grey">
        <div className="overflow-hidden w-full">
          <div className="px-8 pt-6 pb-6 content-center mx-auto bg-white">
            <p className="font-semibold text-2xl">
              Developers! Join Our New Open Source Community - VH: Playground
            </p>
          </div>
          <GreenButton href="/">Read More</GreenButton>
        </div>
        <div className="overflow-hidden w-full">
          <div className="px-8 pt-6 pb-6 content-center mx-auto bg-white">
            <p className="font-semibold text-2xl">
              Developers! Join Our New Open Source Community - VH: Playground
            </p>
          </div>
          <GreenButton href="/">Read More</GreenButton>
        </div>
        <div className="overflow-hidden w-full">
          <div className="px-8 pt-6 pb-6 content-center mx-auto bg-white">
            <p className="font-semibold text-2xl">
              Developers! Join Our New Open Source Community - VH: Playground
            </p>
          </div>
          <GreenButton href="/">Read More</GreenButton>
        </div>
      </div>
      <div className="bg-grey">
        <div className="relative mx-auto pt-10 md:w-1/3 pb-16 sm:px-24 px-20">
          <LightButton href="/projects" className="font-mono text-sm font-bold">
            SEE OUR POSTS
          </LightButton>
        </div>
      </div>
    </>
  );
};

export default Home;
