// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore -- The type definitions don't define this entrypoint
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
expect.extend(matchers);

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
