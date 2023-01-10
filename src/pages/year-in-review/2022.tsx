import { NextSeo } from 'next-seo';
import React from 'react';

import Hero from '../../components/decoration/hero';
import { YearInReviewHeader } from '../../components/layout/yearInReview/layout';
import MoreEffectiveTeams from '../../components/layout/yearInReview/2022/moreEffectiveTeams';
import Intro from '../../components/layout/yearInReview/2022/intro';
import heroBackground from '../../../public/images/yearInReview/2022/2022-hero.jpg';
import heroTagline from '../../../public/images/yearInReview/2022/2022-type.png';
import MinorChangesBigImpact from '../../components/layout/yearInReview/2022/minorChangesBigImpact';
import DesignsForVeganOrgs from '../../components/layout/yearInReview/2022/designsForVeganOrgs';
import Partnerships from '../../components/layout/yearInReview/2022/partnerships';
import NewsletterLaunch from '../../components/layout/yearInReview/2022/newsletterLaunch';
import AdvisoryService from '../../components/layout/yearInReview/2022/advisoryService';
import ByTheNumbers from '../../components/layout/yearInReview/2022/byTheNumbers';
import Playground from '../../components/layout/yearInReview/2022/playground';
import NewVideos from '../../components/layout/yearInReview/2022/newVideos';
import MovingForward from '../../components/layout/yearInReview/2022/movingForward';
import { FirstSubSection } from '../../components/decoration/textBlocks';

import FeaturedInterviews from 'components/layout/yearInReview/2022/featuredInterviews';
import GrantProgram from 'components/layout/yearInReview/2022/grantProgram';
import AnimalRightsAdvocates from 'components/layout/yearInReview/2022/animalRightsAdvocates';

const YearInReview2022: React.FC = ({}) => {
  return (
    <>
      <NextSeo title="2022 in Review" />
      <div className="text-2xl">
        <YearInReviewHeader
          year={2022}
          hero={
            <Hero
              imageBackground={heroBackground}
              tagline={{
                image: heroTagline,
                alt: '2022 year in review',
              }}
              alignment="left"
              classNameMapping={{
                container: 'bg-center',
              }}
            />
          }
          customMainSection={
            <FirstSubSection
              header="Building up the movement"
              firstWordsNum={0}
            >
              This year, we leaned into our role and strength as capacity
              builders by expanding both our services and our professional
              volunteer network. We saved the movement over half a million
              dollars by serving over 120 organizations this year alone with our
              tech, design and advisory services. And we&apos;re just getting
              started!
            </FirstSubSection>
          }
        />

        <Intro />
        <MoreEffectiveTeams />
        <FeaturedInterviews
          interviews={[
            'leaders-in-animal-protection-jo-anne-mcarthur',
            'leaders-in-animal-protection-elly-nakajima',
            'leaders-in-animal-protection-lauren-ornelas',
            'leaders-in-animal-protection-aryenish-birdie',
            'leaders-in-animal-protection-aj-dahiya',
            'leaders-in-animal-protection-brooke-haggerty',
          ]}
        />
        <GrantProgram />
        {/* <CommunityGrowth /> */}
        <Playground />
        <NewVideos />
        <AnimalRightsAdvocates />
        <ByTheNumbers />
        <MinorChangesBigImpact />
        <DesignsForVeganOrgs />
        {/*<FeaturedBlogPosts featuredBlogPosts={featuredBlogPosts} />
        <FeaturedProjects projects={featuredProjects} />
        <Rebrand
          kate={
            featuredBlogPosts.find(
              (post) => post.member.fields.name === 'Kate Rodman'
            ) as BlogPostItem
          }
        />*/}
        <Partnerships />
        <NewsletterLaunch />
        <AdvisoryService />
        {/* IdeaBoard */}
        <MovingForward />
      </div>
    </>
  );
};

export default YearInReview2022;
