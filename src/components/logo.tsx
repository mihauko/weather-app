import Image from 'next/image';

import logoLight from '../../public/logo_white.png';
import logoDark from '../../public/logo.png';
import { useMounted } from '@/hooks/use-mounted';

const Logo = ({
  isLight,
  className,
}: {
  isLight?: boolean;
  className?: string;
}) => {
  const isMounted = useMounted();
  return (
    <Image
      src={!isMounted ? logoDark.src : isLight ? logoDark.src : logoLight.src}
      alt="FrontendMe Michał Winiarski"
      width={200}
      height={50}
      className={className}
    />
  );
};

export default Logo;
