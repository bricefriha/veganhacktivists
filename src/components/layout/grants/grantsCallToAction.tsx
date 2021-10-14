import impactReviewImage from '../../../../public/images/grants/impact-header.png';
import beeImage from '../../../../public/images/grants/bee-header.png';
import beeIcon from '../../../../public/images/grants/VH-icon-bee.png';
import PixelFlowers from '../../../../public/images/VH_PixelFlowers.png';
import { DarkButton } from '../../decoration/buttons';
import React from 'react';
import useThemeColor from '../../../hooks/useThemeColor';
import CustomImage from '../../decoration/customImage';

const Info: React.FC<{
  title: string;
  image: StaticImageData;
  boxicon: StaticImageData;
  backgroundColor?: string;
  button: {
    content: React.ReactNode;
    href: string;
  };
}> = ({
  children,
  title,
  boxicon,
  image,
  backgroundColor = 'white',
  button,
}) => {
  const color = useThemeColor(backgroundColor);

  return (
    <div className="flex flex-col gap-14 mb-20">
      <div style={{ backgroundColor: color }}>
        <div className="overflow-hidden w-full">
          <CustomImage src={image} alt="" />
        </div>
        <div className="items-center">
          <div className="text-left break-words max-w-sm md:pb-8 px-10">
            <div className="mb-10 text-grey-dark pt-10 text-3xl md:text-4xl font-mono font-semibold uppercase md:px-2">
              {title}
            </div>
            <div className="mb-8 md:mb-0 text-2xl">{children}</div>
          </div>
          <div className="flex flex-row justify-between px-10 mb-20 h-10">
            <DarkButton className="md:max-w-72" href={button.href}>
              {button.content}
            </DarkButton>
            <div className="w-1/4">
              <CustomImage
                src={boxicon}
                alt=""
                layout="fixed"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GrantsCallToAction: React.FC = () => {
  return (
    <div className="bg-gray-background pt-14 pb-10">
      <div className="md:grid grid-cols-1 md:grid-cols-2 gap-0 md:w-2/3 mx-auto auto-rows-fr">
        <Info
          image={beeImage}
          boxicon={beeIcon}
          backgroundColor="white"
          title="Apply for a $1000 VH seed grant"
          button={{ content: <>Apply&nbsp;now!</>, href: '/grants' }}
        >
          We&apos;re excited to offer grants for oustanding, and effective,
          animal rights activism!
        </Info>
        <Info
          image={impactReviewImage}
          boxicon={PixelFlowers}
          title="See our 2020 impact review"
          backgroundColor="grey-over-background"
          button={{
            content: <>See&nbsp;our&nbsp;impact!</>,
            href: '/year-in-review',
          }}
        >
          Read our annual impact review and see what we&apos;ve accomplished
          last year!
        </Info>
      </div>
    </div>
  );
};

export default GrantsCallToAction;
