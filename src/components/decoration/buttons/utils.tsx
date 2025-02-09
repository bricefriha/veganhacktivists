import classNames from 'classnames';
import React from 'react';

import getThemeColor from '../../../lib/helpers/theme';

import type { HTMLAttributes } from 'react';

interface FillBackgroundProps extends React.PropsWithChildren {
  base: string;
  fill: string;
  disabled?: boolean;
}

const fillStyle: (from: string, to: string) => React.CSSProperties = (
  from,
  to
) => {
  return {
    backgroundImage: `linear-gradient(to right, ${getThemeColor(
      to
    )},  50%, ${getThemeColor(from)} 50%)`,
    backgroundSize: '250% 100%',
    backgroundPosition: 'right',
  };
};

export const FillBackground: React.FC<FillBackgroundProps> = ({
  base,
  fill,
  disabled = false,
  children,
}) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement<HTMLAttributes<HTMLElement>>(child)) return child;

    const { className, style } = child.props;
    return React.cloneElement(child, {
      className: classNames(
        className,
        'transition-background-position duration-[400ms] ease-linear',
        {
          'hover:!bg-left group-hover:!bg-left': !disabled,
        }
      ),
      style: { ...style, ...(disabled ? {} : fillStyle(base, fill)) },
    });
  });

  return <>{childrenWithProps}</>;
};
