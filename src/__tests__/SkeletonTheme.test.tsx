import React from 'react';
import ReactDOM from 'react-dom';
import { it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { SkeletonTheme } from '../SkeletonTheme.js';
import { Skeleton } from '../Skeleton.js';
import { getSkeleton } from './__helpers__/index.js';

afterEach(cleanup);

it('does not render anything', () => {
  render(
    <div data-testid="container">
      <SkeletonTheme borderRadius="1rem" />
    </div>
  );

  expect(screen.getByTestId('container')).toBeEmptyDOMElement();
});

it('styles the skeleton', () => {
  render(
    <SkeletonTheme borderRadius="1rem" baseColor="black">
      <Skeleton />
    </SkeletonTheme>
  );

  const skeleton = getSkeleton();
  expect(skeleton).toHaveStyle({ borderRadius: '1rem' });
  expect(skeleton.style.getPropertyValue('--base-color')).toBe('black');
});

it('is overridden by Skeleton props', () => {
  render(
    <SkeletonTheme borderRadius="1rem" baseColor="black">
      <Skeleton borderRadius="2rem" />
    </SkeletonTheme>
  );

  const skeleton = getSkeleton();
  expect(skeleton).toHaveStyle({ borderRadius: '2rem' });
  expect(skeleton.style.getPropertyValue('--base-color')).toBe('black');
});

it('styles the skeleton through a portal', () => {
  const portalDestination = document.createElement('div');
  document.body.append(portalDestination);

  render(
    <SkeletonTheme borderRadius="1rem" baseColor="black">
      {ReactDOM.createPortal(<Skeleton />, portalDestination)}
    </SkeletonTheme>
  );

  const skeleton = getSkeleton();
  expect(skeleton).toHaveStyle({ borderRadius: '1rem' });
  expect(skeleton.style.getPropertyValue('--base-color')).toBe('black');
});

// Regression test
it('is not blocked by setting Skeleton props to undefined', () => {
  render(
    <SkeletonTheme baseColor="green" highlightColor="red">
      <Skeleton baseColor={undefined} highlightColor={undefined} />
    </SkeletonTheme>
  );

  const skeleton = getSkeleton();
  expect(skeleton.style.getPropertyValue('--base-color')).toBe('green');
  expect(skeleton.style.getPropertyValue('--highlight-color')).toBe('red');
});
