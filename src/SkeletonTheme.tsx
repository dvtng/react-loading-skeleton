import React, { ReactElement, PropsWithChildren } from 'react';
import { SkeletonStyleProps } from './SkeletonStyleProps.js';
import { SkeletonThemeContext } from './SkeletonThemeContext.js';

export type SkeletonThemeProps = PropsWithChildren<SkeletonStyleProps>;

export function SkeletonTheme({
  children,
  ...styleOptions
}: SkeletonThemeProps): ReactElement {
  return (
    <SkeletonThemeContext.Provider value={styleOptions}>
      {children}
    </SkeletonThemeContext.Provider>
  );
}
