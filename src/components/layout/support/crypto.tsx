import { faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons';
import type {
  IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {
  faBitcoinSign,
  faCopy
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import getThemeColor from '../../../lib/helpers/theme';
import { GreenButton } from '../../decoration/buttons';
import TextInput from '../../forms/inputs/textInput';

interface CryptoWalletProps {
  code: string;
  icon: IconDefinition;
  color?: string;
}

const CryptoWallet: React.FC<CryptoWalletProps> = ({ code, icon, color }) => {
  const onCopy = useCallback(() => {
    toast.promise(navigator.clipboard.writeText(code), {
      success: 'Code succesfully copied!',
      error:
        'Something went wrong copying the code, please select and copy it manually',
    });
  }, [code]);

  return (
    <div className="flex flex-row justify-center">
      <div className="my-auto" style={{ color }}>
        <FontAwesomeIcon icon={icon} size="2x" fixedWidth />
      </div>
      <div style={{ backgroundColor: color }} className="py-1 my-auto">
        <FontAwesomeIcon
          icon={icon}
          size="2x"
          fixedWidth
          className="text-white"
        />
      </div>
      <div className="flex flex-row w-full px-2 py-2 text-xl bg-grey-over-background text-grey focus:ring-1 focus:ring-grey">
        <div className="w-full max-w-sm pr-10 my-auto -mr-10 text-ellipsis overflow-clip">
          {code}
        </div>
        <div className="w-5 h-5 my-auto bg-black aspect-square" />
      </div>

      <button
        onClick={onCopy}
        className="flex flex-row justify-center px-4 py-2 my-auto text-2xl text-white cursor-pointer bg-green gap-x-2"
      >
        Copy
        <div className="my-auto">
          <FontAwesomeIcon icon={faCopy} />
        </div>
      </button>
    </div>
  );
};

const Crypto: React.FC = () => {
  return (
    <div className="py-5 mx-auto space-y-3 text-xl bg-grey-background">
      <h3 className="text-2xl font-bold">We accept cryptocurrency!</h3>
      <div>
        Click the QR code to view the QR code enlarged, or copy the code to your
        clipboard.
      </div>
      <div className="flex flex-col w-1/2 mx-auto gap-y-5">
        <CryptoWallet
          color={getThemeColor('yellow')}
          code="14qFZxHb3C8UuijTLJYccZVQzgVbQrQh1f"
          // icon={faBitcoin}
          icon={faBitcoinSign}
        />
        <CryptoWallet
          color={getThemeColor('blue')}
          code="0x933AE0800e1Bb6aC4c720B4565Acc66eccc2127b"
          icon={faEthereum}
        />
      </div>
    </div>
  );
};

export default Crypto;
