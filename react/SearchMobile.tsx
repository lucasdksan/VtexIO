import React, { ReactNode, useState } from 'react';
import { ButtonWithIcon } from 'vtex.styleguide';
import { useRuntime } from 'vtex.render-runtime';
import { IconSearch } from 'vtex.store-icons';
import { useCssHandles } from 'vtex.css-handles';

import styles from './SearchMobile.css';

interface SearchMobileProps {
  children: ReactNode;
}

const CSS_HANDLES = [
  'searchMobileContainer',
  'searchMobileCloseButtonContainer',
  'searchMobileCloseButton',
  'searchMobileCloseButtonText',
  'searchMobileAreaIcon',
];

function SearchMobile({ children }: SearchMobileProps) {
  const { deviceInfo } = useRuntime();
  const [isVisible, setVisible] = useState(false);
  const { handles, withModifiers } = useCssHandles(CSS_HANDLES);

  if (deviceInfo.isMobile === false) {
    return null;
  }

  if (!isVisible) {
    return (
      <div
        className={`${
          !isVisible ? withModifiers('searchMobileContainer', 'hidden') : ''
        }`}
      >
        <ButtonWithIcon
          icon={
            <span className="searchMobileAreaIcon">
              <IconSearch size={23} />
            </span>
          }
          variation="tertiary"
          onClick={() => setVisible(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`
      ${handles.container}
      ${isVisible ? withModifiers('searchMobileContainer', 'visible') : ''}
    `}
    >
      {children}
      <div className={`${handles.searchMobileCloseButtonContainer}`}>
        <ButtonWithIcon
          className={`${handles.searchMobileCloseButton}`}
          icon={
            <span className={`${styles.searchMobileCloseButtonText}`}>
              Fechar
            </span>
          }
          variation="tertiary"
          onClick={() => setVisible(false)}
        />
      </div>
    </div>
  );
}

export default SearchMobile;
