import React from 'react';
import classNames from 'classnames';

import { NavButton } from '../../decoration/buttons';
import SquareField from '../../decoration/squares';
import { FirstSubSection } from '../../decoration/textBlocks';

interface YearButtonProps {
  year: number;
}

const YearButton: React.FC<YearButtonProps> = ({ year }) => {
  return (
    <NavButton className="w-48 font-bold" href={`/year-in-review/${year}`}>
      {year}
    </NavButton>
  );
};

interface YearInReviewButtonProps {
  currentYear: number;
}

const YearInReviewButtons: React.FC<YearInReviewButtonProps> = ({
  currentYear,
}) => {
  return (
    <div>
      <div
        className={classNames('pb-10 flex justify-center flex-wrap', {
          'mb-10': currentYear === 2020 || currentYear === 2021,
        })}
      >
        {[2020, 2021, 2022].map((year) => (
          <YearButton key={year} year={year} />
        ))}
      </div>
    </div>
  );
};

interface YearInReviewHeaderProps {
  year: number;
  hero: React.ReactNode;
  customMainSection?: React.ReactNode;
}

const HERO_DECORATION_SQUARES = [
  { color: 'white', size: 16, left: 0, bottom: 0 },
  { color: 'green', size: 32, left: 16, bottom: 0 },
  { color: 'yellow', size: 16, left: 0, top: 0 },

  { color: 'red', size: 32, right: 0, top: -16 },
  { color: 'orange', size: 16, right: 32, bottom: 16 },
  { color: 'white', size: 16, right: 32, bottom: 0 },
];

export const YearInReviewHeader: React.FC<YearInReviewHeaderProps> = ({
  year,
  hero,
  customMainSection,
}) => {
  return (
    <div className="bg-grey-background">
      {hero}
      <SquareField
        squares={HERO_DECORATION_SQUARES}
        className="hidden md:block"
      />
      {customMainSection ?? (
        <FirstSubSection
          header={`Our ${year} year in review`}
          firstWordsNum={2}
          className="pt-5"
        >
          We&apos;re so happy to release our {year} Year in Review! Scroll down
          to read all of our accomplishments thanks to your generous support,
          our partners, and most of all our amazing volunteers.
        </FirstSubSection>
      )}
      <YearInReviewButtons currentYear={year} />
    </div>
  );
};

export default YearInReviewHeader;
