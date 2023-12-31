import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

export enum Version {
  tablet,
  desktop,
}

const getVersion = (): Version => (document.body.clientWidth < 744 ? Version.tablet : Version.desktop);

export const useAdaptive = (): { isTablet: boolean; isDesktop: boolean } => {
  const [version, setVersion] = useState(getVersion());
  const handleResize = throttle(() => {
    setVersion(getVersion());
  }, 100);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isTablet: version === Version.tablet,
    isDesktop: version === Version.desktop,
  };
};
