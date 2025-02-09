import CustomImage from '../../../decoration/customImage';
import CustomLink from '../../../decoration/link';
import { SubSection } from '../../../decoration/textBlocks';
import { HighlightBlock } from '../highlightBlock';
import avocadoIcon from '../../../../../public/images/people/teamIcons/icon-avo.png';
import peachIcon from '../../../../../public/images/people/teamIcons/icon-peach.png';
import mangoIcon from '../../../../../public/images/people/teamIcons/icon-mango.png';
import watermelonIcon from '../../../../../public/images/people/teamIcons/icon-wmelon.png';
import sweetPotatoIcon from '../../../../../public/images/people/teamIcons/icon-spotato.png';
import { pixelHeart } from '../../../../images/separators';

const Intro: React.FC = () => {
  return (
    <>
      <CustomImage
        src={pixelHeart}
        height={pixelHeart.height / 3}
        width={pixelHeart.width / 3}
        alt=""
      />
      <div className="px-5 mx-auto pb-10">
        <SubSection
          header="We explored and grew so much this year"
          headerSize="3xl"
          contentSize="2xl"
        >
          This year, we refined our goals and built projects that focused
          primarily on filling existing gaps in our movement. We grew more
          meaningful partnerships and we greatly improved our branding, design
          team, and services offered. We&apos;re excited to show you what
          we&apos;ve done below!
        </SubSection>
      </div>

      <div>
        <HighlightBlock
          borderColor="magenta"
          headerStart="We launched"
          headerBold="8 new projects"
          headerEnd="for the movement"
        >
          <b>Four of which were in-house projects.</b> We were also lucky enough
          to work on projects with Sehati Animal Sanctuary, Animal Alliance
          Asia, Vegan Japan Consulting, and many more.
        </HighlightBlock>
        <HighlightBlock
          borderColor="yellow"
          headerStart="We"
          headerBold="expanded our advisory team"
          headerEnd="of vegan experts"
        >
          <b>We&apos;re so thankful to have more advisors to lean on</b> such as
          Katie from Animal Equality, Chris from APEX Advocacy, Tessa from the
          Pollination Project, and Casey from Faunalytics. To browse more of our
          advisors, <CustomLink href="/people/advisors">click here.</CustomLink>
        </HighlightBlock>
        <HighlightBlock
          borderColor="green"
          headerStart="We expanded with"
          headerBold="5 new teams"
          headerEnd="in just 6 months"
        >
          <b>More teams, more impact!</b> We&apos;re so happy to announce the
          growth of our community with five new amazing teams. Please welcome
          Team Avocado, Team Mango, Team Watermelon, and Team Sweet Potato.
        </HighlightBlock>
        <div className="flex flex-row md:w-1/3 mx-auto mb-20 mt-20">
          {[
            avocadoIcon,
            peachIcon,
            mangoIcon,
            watermelonIcon,
            sweetPotatoIcon,
          ].map((icon) => (
            <div key={icon.src}>
              <CustomImage src={icon} alt={icon.src} height={250} width={250} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Intro;
