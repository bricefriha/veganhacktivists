import CustomImage from '../../../decoration/customImage';
import SectionContainer from '../sectionContainer';

import advisorService from '../../../../../public/images/yearInReview/2021/advisory.png';
import React from 'react';
import { SectionHeader } from '../../../decoration/textBlocks';
import { DarkButton } from '../../../decoration/buttons';
import SquareField from '../../../decoration/squares';

const AdvisoryService: React.FC = () => {
  const dim = 350;
  return (
    <>
      <SectionContainer>
        <div className="flex flex-col md:flex-row md:w-3/4 mx-auto gap-x-10">
          <div>
            <CustomImage
              src={advisorService}
              alt=""
              layout="fixed"
              height={dim}
              width={dim}
            />
          </div>
          <div className="mx-auto text-left space-y-5 text-3xl">
            <SectionHeader
              header={['Our new', 'advisory service']}
              className="text-grey"
            />
            <p>
              We launched our newest service that allows folks to get advice
              from our team of experts. We have several advisors with a wide
              range of experience that now help. We&apos;ll happily advise any
              vegan activist or organization - whether that be for their
              technology, organizational structure, strategy, marketing, grant
              requests, and more!
            </p>
            <p>
              We&apos;ve been very happy with the launch of this service,
              we&apos;ve received over 100+ requests for advice, many of them
              where we&apos;ve been able to accommodate. We&apos;ve helped
              organizations like Sinergia Animal, The Humane League, Vegan
              Tokyo, Mercy for Animals, PETA, Animal Rights Advocates, Ethics
              over Habits, among many others!
            </p>
            <DarkButton
              href="/services"
              className="font-semibold font-mono w-min mt-5"
            >
              Check out our services
            </DarkButton>
          </div>
        </div>
      </SectionContainer>
      <SquareField
        className="hidden md:block"
        squares={[
          { color: 'grey-light', left: 0, bottom: 0 },
          { color: 'grey', left: 0, top: 0 },
          { color: 'grey-light', right: 0, bottom: 0 },
        ]}
      />
    </>
  );
};

export default AdvisoryService;
