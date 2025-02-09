import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import Circle from '../../decoration/circle';
import roundLogo from '../../../../public/images/VH_Logo_Crest_Tagline.png';
import getThemeColor from '../../../lib/helpers/theme';
import CustomImage from '../../decoration/customImage';

import type { ITag, ITagFields } from '../../../types/generated/contentful';

interface HeaderProps {
  query: string;
  tags: ITag[];
  onSearchChange: (query: string) => void;
  onLeaveInput: () => void;
  onTagChange: (tag?: ITagFields['name'] | null) => void;
  currentTag?: string | null;
}

const BlogsHeader: React.FC<HeaderProps> = ({
  query,
  tags,
  onSearchChange,
  onLeaveInput,
  onTagChange,
  currentTag,
}) => {
  const greyLight = getThemeColor('grey-light');

  const Tag: React.FC<{
    name: string;
    slug: string | null;
    active: boolean;
  }> = ({ name, slug, active }) => {
    return (
      <div
        className={classNames('pb-2 cursor-pointer select-none px-10 py-2', {
          'bg-grey': active,
        })}
        onClick={() => {
          onTagChange(active ? undefined : slug);
        }}
      >
        {name}
      </div>
    );
  };

  return (
    <div className="flex relative flex-col md:flex-row bg-black justify-around text-white md:px-20 pt-10 pb-0 overflow-hidden">
      <Circle opacity={0.1} radius={33} />
      <Circle opacity={0.05} xAlign="right" yAlign="bottom" radius={16} />
      <div className="flex flex-col justify-center md:w-1/2 z-10 pb-10">
        <div className="w-48 mx-auto my-10">
          <CustomImage src={roundLogo} alt="" />
        </div>
        <div className="text-2xl px-16 font-mono">
          Welcome to our official blog. We regularly post news, annnouncements,
          project updates, interviews, editorials, and more. Stay tuned!
        </div>
      </div>
      <div className="bg-grey-dark mt-10">
        <div className="px-10 pt-10">
          <label className="border-2 border-grey-lighter p-2 text-xl w-full flex justify-around">
            <input
              className="bg-invisible outline-none pr-2 w-full"
              type="text"
              name="query"
              id="blogQuery"
              value={query}
              onBlur={onLeaveInput}
              onChange={(e) => {
                onSearchChange(e.target.value);
              }}
            />
            <div>
              <FontAwesomeIcon icon={faSearch} color={greyLight} />
            </div>
          </label>
        </div>
        <div className="my-5 text-left text-xl">
          <div className="font-bold uppercase text-3xl font-mono mb-5 mt-10 px-10">
            Categories
          </div>
          <div>
            {tags.map((tag) => (
              <Tag
                key={tag.fields.slug}
                {...tag.fields}
                active={tag.fields.slug === currentTag}
              />
            ))}
            <Tag name="Other" slug="other" active={currentTag === null} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHeader;
