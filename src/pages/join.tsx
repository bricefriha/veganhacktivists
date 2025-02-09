import { NextSeo } from 'next-seo';
import React from 'react';

import Hero from '../components/decoration/hero';
import CandidateRequirement from '../components/layout/join/candidateRequirement';
import JobRole from '../components/layout/join/jobRole';
import heroBackground from '../../public/images/joinUs/VH-chicken2-hero.jpg';
import heroTagline from '../../public/images/joinUs/VH-join-hero-text.png';
import PixelBulb from '../../public/images/VH_PixelBulb.png';
import heartLogo from '../../public/images/joinUs/VH-join-mini-icon-heart.png';
import checkLogo from '../../public/images/joinUs/VH-join-mini-icon-check.png';
import resumeLogo from '../../public/images/joinUs/VH-join-mini-icon-resume.png';
import clockLogo from '../../public/images/joinUs/VH-join-mini-icon-time.png';
import codeLogo from '../../public/images/joinUs/VH-icon-dev.png';
import designLogo from '../../public/images/joinUs/VH-icon-uidesigner.png';
import paintBrushLogo from '../../public/images/joinUs/VH-icon-graphicdesign.png';
import socialMediaLogo from '../../public/images/joinUs/VH-icon-socialmedia.png';
import communityManagerLogo from '../../public/images/joinUs/VH-icon-communitymanager.png';
import grantWriterLogo from '../../public/images/joinUs/VH-icon-grantwriter.png';
import playgroundManagerLogo from '../../public/images/joinUs/VH-icon-playgroundmanager.png';
import penLogo from '../../public/images/joinUs/VH-icon-writer.png';
import { LightButton } from '../components/decoration/buttons';
import MeetOurTeam from '../components/layout/meetOurTeam';
import Sprite, { sheep, chicks } from '../components/decoration/sprite';
import JoinPlayground from '../components/layout/join/joinPlayground';
import SquareField from '../components/decoration/squares';
import { FirstSubSection } from '../components/decoration/textBlocks';
import CustomImage from '../components/decoration/customImage';
import { pixelFlower } from '../images/separators';
import PriorityRole from '../components/layout/join/priorityRole';

import type { PriorityRoleProps } from '../components/layout/join/priorityRole';
import type { JobRoleProps } from '../components/layout/join/jobRole';
import type { CandidateRequirementProps } from '../components/layout/join/candidateRequirement';

const CANDIDATE_REQUIREMENTS: CandidateRequirementProps[] = [
  {
    description: 'Commitment to a vegan lifestyle',
    image: heartLogo,
    color: 'green',
  },
  {
    description: 'Professional experience in your field',
    image: checkLogo,
    color: 'yellow',
  },
  {
    description: 'Portfolio, resume, or work product to demonstrate experience',
    image: resumeLogo,
    color: 'magenta',
  },
  {
    description: 'Ability to volunteer at least 5 hours a week',
    image: clockLogo,
    color: 'orange',
  },
];

const PRIORITY_ROLES: PriorityRoleProps[] = [
  {
    image: communityManagerLogo,
    color: 'black',
    squareColor: 'yellow',
    title: 'Community Manager',
    href: 'https://forms.gle/zN5rYjZ8nLXXgktZA',
    description: (
      <>
        Recruit, onboard, and engage our growing VH community on Discord.
        Candidate will host events, facilitate interactions, and support our
        growing community of volunteers.
      </>
    ),
  },
  {
    image: grantWriterLogo,
    color: 'black',
    squareColor: '#64BC46',
    title: 'Grant Writer',
    href: 'https://forms.gle/zN5rYjZ8nLXXgktZA',
    description: (
      <>
        Manage and oversee grantwriting and fundraising pipeline. Candidate must
        exemplify strong organizational and writing skills, with excellent
        grammar and spelling.
      </>
    ),
  },
  {
    image: playgroundManagerLogo,
    color: 'black',
    squareColor: 'pink',
    title: 'Ads Manager',
    href: 'https://forms.gle/zN5rYjZ8nLXXgktZA',
    description: (
      <>
        Support our advertising efforts, including developing campaigns, manage
        budgets, and analyzing metrics. Candidate should have a background in
        marketing, media or advertising.
      </>
    ),
  },
];
const JOB_ROLES: JobRoleProps[] = [
  {
    image: codeLogo,
    color: 'green',
    squareColor: '#58a345',
    title: 'Developers',
    href: 'https://forms.gle/zN5rYjZ8nLXXgktZA',
    description: (
      <>
        Write quality, clean code for projects at various stages of development.
        We use Laravel for most projects, and expect you to be familiar or
        interested in levelling up in PHP, JS, and CSS.
      </>
    ),
  },
  {
    image: designLogo,
    color: 'yellow-orange',
    squareColor: '#eb7d23',
    title: 'UI Designers',
    href: 'https://forms.gle/zN5rYjZ8nLXXgktZA',
    description: (
      <>
        Define the user&apos;s experience and interface for our projects by
        producing modern, visually-appealing web designs—from wireframes and
        mockups to the app&apos;s final look and feel.
      </>
    ),
  },
  {
    image: socialMediaLogo,
    color: 'yellow',
    squareColor: '#fcb216',
    title: 'Social Media Manager',
    href: 'https://forms.gle/zN5rYjZ8nLXXgktZA',
    description: (
      <>
        Craft our voice and brand on social media, whether it&apos;s through
        developing content strategy, analyzing engagement data, or interacting
        with followers.
      </>
    ),
  },
  {
    image: penLogo,
    color: 'red',
    squareColor: '#c61f45',
    title: 'Writers',
    href: 'https://forms.gle/RAhPpLyxpYcTNPpQ7',
    description: (
      <>
        Produce original and well-written content for a variety of medium—our
        blog, newsletter, social media, software copy, and more.
      </>
    ),
  },
  {
    image: paintBrushLogo,
    color: 'pink',
    squareColor: '#d31679',
    title: 'Graphic Designers',
    href: 'https://forms.gle/zN5rYjZ8nLXXgktZA',
    description: (
      <>
        Create high-quality and innovative designs that include logo and
        branding, social media visuals, and UI components.
      </>
    ),
  },
];

const HERO_DECORATION_SQUARES = [
  { color: 'white', size: 16, left: 0, bottom: 0 },
  { color: 'pink', size: 24, left: 16, bottom: 0 },
  { color: 'green', size: 16, lwft: 0, top: 0 },

  { color: 'yellow', size: 32, right: 0, top: -16 },
  { color: 'yellow', size: 16, right: 32, bottom: 16 },
  { color: 'white', size: 16, right: 32, bottom: 0 },
];

const Join: React.FC = () => (
  <>
    <NextSeo title="Join Us" />
    <Hero
      imageBackground={heroBackground}
      tagline={{
        image: heroTagline,
        alt: 'You are their voice',
      }}
      alignment="left"
    />
    <SquareField
      squares={HERO_DECORATION_SQUARES}
      className="hidden md:block"
    />
    <FirstSubSection header="Join our team">
      We are growing! If you believe in our mission and want to help animals
      through technology, join us. Even if you do not meet all qualifications,
      we encourage you to apply anyway.
    </FirstSubSection>
    <div>
      <div className="p-8 bg-gray-background content-center mx-auto my-16 md:w-1/2 text-2xl">
        <div className="flex flex-col gap-4">
          {CANDIDATE_REQUIREMENTS.map((requirement, i) => (
            <CandidateRequirement key={i} {...requirement} />
          ))}
        </div>
      </div>
    </div>
    <div className="text-grey content-center mx-auto my-12 md:w-1/2 drop-shadow-2xl text-2xl px-10">
      <CustomImage
        src={pixelFlower.src}
        width={pixelFlower.width / 3}
        height={pixelFlower.height / 3}
        alt=""
      />
      <p>
        Our team uses Discord for internal communication, Trello for project and
        task workflow, Figma for designing, and GitHub for code management and
        collaboration.
      </p>
    </div>
    <JoinPlayground />
    <Sprite image={sheep} pixelsLeft={1} pixelsRight={0} />
    <div className="lg:h-[500px] py-16 lg:py-20 px-5 relative pb-[300px]">
      <h2 className="text-4xl font-modo font-bold mb-10">
        High Priority Positions
      </h2>
      <h4 className="text-2xl">
        We&apos;re actively seeking skilled volunteers to fulfill the following
        positions:
      </h4>
    </div>
    <div className="bg-pink">
      <SquareField
        squares={[
          {
            color: '#F171A2',
            size: 16,
            top: -16,
            left: 0,
          },
          {
            color: '#EDEDED',
            size: 16,
            top: -16,
            right: 0,
          },
        ]}
        className="hidden md:block"
      />
      <div className="flex flex-col lg:flex-row justify-center content-center flex-wrap gap-2 lg:gap-6 xl:gap-10 pb-16">
        {PRIORITY_ROLES.map((role) => (
          <div
            key={role.title}
            className="w-[400px] lg:w-[320px] xl:w-[375px] first-of-type:mt-[-260px] lg:mt-[-260px] "
          >
            <PriorityRole key={role.title} {...role} />
          </div>
        ))}
      </div>
      <SquareField
        squares={[
          {
            color: '#F171A2',
            size: 16,
            bottom: 0,
            right: 0,
          },
          {
            color: '#ED2384',
            size: 16,
            bottom: -16,
            right: 0,
          },
          {
            color: '#EDEDED',
            size: 16,
            bottom: 0,
            left: 0,
          },
        ]}
        className="hidden md:block"
      />
    </div>
    <div className="mt-16 md:max-w-5xl mx-auto mb-16">
      <h2 className="mb-16 text-4xl font-bold">Available Positions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
        {JOB_ROLES.map((role) => (
          <JobRole key={role.title} {...role} />
        ))}
        <div className="md:col-span-2 bg-gray-background py-8 md:px-40 text-grey-dark">
          <h2 className="text-4xl font-modo font-bold mb-10">
            Other Talents & Specialists
          </h2>
          <CustomImage
            src={PixelBulb}
            width={PixelBulb.width / 3}
            height={PixelBulb.height / 3}
            alt=""
          />
          <p className="mt-4 mb-4 text-2xl px-10 md:px-0">
            Don&apos;t see a role that matches your skills? Reach out to us
            anyway. We&apos;d love to get to know you and appreciate your
            interest in supporting us!
          </p>
          <div className="w-2/3 mx-auto">
            <LightButton
              href="https://forms.gle/zN5rYjZ8nLXXgktZA"
              className="font-semibold font-mono px-16 py-2"
            >
              Apply Now
            </LightButton>
          </div>
        </div>
      </div>
    </div>
    <SquareField
      squares={[
        { color: 'white', size: 16, top: 0, left: 0 },
        { color: 'grey-light', size: 16, bottom: 0, left: 0 },
        { color: 'grey-light', size: 16, bottom: 0, right: 0 },
      ]}
      className="hidden md:block"
    />
    <Sprite image={chicks} pixelsLeft={1} pixelsRight={1} />
    <MeetOurTeam />
  </>
);

export default Join;
