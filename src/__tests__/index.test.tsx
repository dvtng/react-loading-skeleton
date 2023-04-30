import React from 'react';
import { it, expect } from 'vitest';
import Skeleton, {
  SkeletonTheme,
  SkeletonThemeProps,
  SkeletonProps,
} from '../index.js';

it('exports Skeleton and friends', () => {
  expect(typeof Skeleton).toBe('function');
  expect(typeof SkeletonTheme).toBe('function');

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const skeletonProps: SkeletonProps = { count: 3, borderRadius: '1rem' };
  const skeletonThemeProps: SkeletonThemeProps = {
    children: <div />,
    baseColor: '#3a3a3a',
    highlightColor: 'white',
  };
  /* eslint-enable @typescript-eslint/no-unused-vars */
});
