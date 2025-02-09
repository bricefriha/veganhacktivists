import CustomImage from '../decoration/customImage';

import type { Asset } from 'contentful';
import type { ImageProps } from 'next/image';

interface ContentfulImageProps
  extends Partial<Omit<ImageProps, 'src' | 'alt'>> {
  image: Asset;
  alt: string;
  ratio?: number;
  downloadwidth?: number;
  thumbnail?: boolean;
}

const ContentfulImage: React.FC<ContentfulImageProps> = ({
  image,
  alt,
  ...props
}) => {
  const { url, details } = image.fields.file;

  if (!details.image) {
    return null;
  }

  const { width, height } = details.image;

  const sizeProps =
    props.layout !== 'fill' || !props.layout ? { width, height } : {};

  return (
    <CustomImage src={`https:${url}`} alt={alt} {...sizeProps} {...props} />
  );
};

export default ContentfulImage;
