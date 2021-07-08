import ExternalLinkButton from './externalLinkButton';
import InstagramButton from './iconButtons/instagramButton';
import PatreonButton from './iconButtons/patreonButton';
import SubmitButton from './submitButton';

export interface ButtonProps {
  linkUrl?: string;
  label?: string;
  style?: string;
}

export { ExternalLinkButton, SubmitButton, PatreonButton, InstagramButton };

