import matchers from '@testing-library/jest-dom/matchers.js';
import { expect } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
expect.extend(matchers as any);

export const skeletonSelector = 'span.react-loading-skeleton';

export function getAllSkeletons(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>(skeletonSelector));
}

export function getSkeleton(): HTMLElement {
  const skeleton = document.querySelector<HTMLElement>(skeletonSelector);
  if (!skeleton) throw new Error('Could not find skeleton.');

  return skeleton;
}

export function hasLineBreak(): boolean {
  return !!document.querySelector<HTMLElement>('br');
}
